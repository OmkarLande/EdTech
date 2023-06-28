const User = require("../models/user");
const Otp = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/Template/passwordUpdated")
require("dotenv").config();


//otp
exports.sendOTP = async (req, res) => {
	try {
		const { email } = req.body; 

		// Check if user is already present
		const checkUserPresent = await User.findOne({ email });

		// If user found with provided email
		if (checkUserPresent) {
			return res.status(401).json({
				success: false,
				message: `User is Already Registered`,
			});
		}

		var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		});
		const result = await Otp.findOne({ otp: otp });
		console.log("Result is Generate OTP Func");
		console.log("OTP", otp);
		console.log("Result", result);
		// while (result) {
		// 	otp = otpGenerator.generate(6, {
		// 		upperCaseAlphabets: false,
		// 	});
		// }
		const otpPayload = { email, otp };
		const otpBody = await Otp.create(otpPayload);
		console.log("OTP Body", otpBody);
		res.status(200).json({
			success: true,
			message: `OTP Sent Successfully`,
			otp,
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
            success: false, 
            error: error,
        });
	}
};

//signup
exports.signUp = async(req,res)=>{
    try{
                //data fetching
        const{
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNo,
            otp
        } = req.body;

        //validation
        if(!firstName || !lastName || !email || !password || !confirmPassword
            || !contactNo || !otp){
                return res.status(403).json({
                    success:false,
                    message:'All fields are required'
                })
            }
        
        //password matching
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:'Password not matched',
            })
        }

        //alredy user?
        const existingUser =await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User is alredy register',
            })
        }

        //otp
        const response = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log(response);

        //validate OTP
        if(response.length == 0){
            return res.status(400).json({
                success:false,
                message:'Otp not found',
            })
        }   else if(otp !== response[0].otp){
            return res.status(400).json({
                success:false,
                message:'Invalid OTP',
            })
        }

        //hashing
        const hashedPassword = await bcrypt.hash(password,10);

        // // Create the user
		// let approved = "";
		// approved === "Instructor" ? (approved = false) : (approved = true);

        //DB store
        const profileDetails = await Profile.create({
            gender:"",
            dateOfBirth:"",
            about:"",
            contactNo:"",
            contry:"",
            city:"",
            postalCode:"",
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNo,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        })
        return res.status(200).json({
            success:true,
            message:'User is registered',
            user,
        });
    }

    catch(error){
        console.log(error.message)
            res.status(500).json({
                success:false,
                message:"User cannot registered, try again",
            })
    }
};


//login

exports.login = async(req,res)=>{
    try{
        //data fetch
        const{email,password} = req.body;
        //validate?
        if(!User || !password){
            return res.status(401).json({
                success:false,
                message:'All fields are required',
            });
        }
        //alredyUser?
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User not exists',
            });
        }
        //passCheck?
        if(await bcrypt.compare(password, user.password)){
            
            //creteToken
            const payload = {
                email:user.email,
                id:user._id,
                accountType:user.accountType,
            }
            
            const token =  jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"3h",
            });

            user.token = token;
            user.password = undefined;

            //creteCookie
            const options ={
                expires:new Date(Date.now() + (3*24*60*60*1000)),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successful'
            });
        }
        else{
            return res.status(500).json({
                success:false,
                message:'Password not matched',
            });
        }

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:'Login Failed!',
        });
    }
};

//passChange
exports.changePassword = async(req,res) =>{
    try{
        //fetchData
        const userDetails = await User.findById(req.user.id);

        //oldPass newPass confirmPass
        const {oldPassword, newPassword, confirmPassword} = req.body;

        //validate?
        const isCorrectPassword = await bcrypt.compare(oldPassword, userDetails.password);

        if(!isCorrectPassword){
            //not matched
            return res.status(401).json({
                success:false,
                message:'Password is incorrect',
            });
        }

        //newPass is same as confirmPass?
        if(newPassword !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"password is not matched with confirm password",
            });
        }
        //update in DB
        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        const updateUserDetails =await User.findByIdAndUpdate(
            req.user.id,
            {password:encryptedPassword},
            {new:true},
        );

        //send Mail
        try{
            const emailResponse = await mailSender(
                updateUserDetails.email, passwordUpdated(
                    updateUserDetails.email,  `Password updated successfully 
                    for${updateUserDetails.firstName} 
                    ${updateUserDetails.lastName}`));
                console.log("Email sent successfully: ", 
                emailResponse.response);
            }
        catch(error){
            console.log("Error while sending email:", error);
            return res.status(500).json({
                success:false,
                message:'Error occured while sending email',
                error:error.message,
            });
        }
        return res.status(200).json({
            success:true,
            message:'Password changed',
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:'Login Failed!',
        });
    }
};



