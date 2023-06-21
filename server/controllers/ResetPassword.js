const user = require("../models/user");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


//resetPasswordToken
exports.resetPasswordToken = async(req,res) =>{
    try{
        //get email
        const email = req.body;
        //check user for email and validataion?
        const user = await user.findOne({email: email});
        if(!user){
            return res.json({
                success:false,
                message:"email is not registered",
            });
        }
        //generate token for random byte
        const token = crypto.randomBytes(20).toString("hex");

        //update user by adding token and expiration time
        const updatedDetails = await user.findOneAndUpdate({email:email},
            {
                token:token,
                resetPasswordExpires:Date.now() +3600000,
            },
            { new:true}
        );
        console.log("DETAILS", updatedDetails);
        //create url for sending mail
    
        const url = `http://localhost:3000/update-password/${token}`;
        
        //send mail
        await mailSender(
            email,
            "Passsword Reset",
            `Your link for email verification is ${url}.
            Please click on this link to reset password.`
        );
        //return res

        res.json({
            success:true,
            message:'Email Sent Successfully.'
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Error while sending the email',
        });
    }
};

//resetPassword
exports.resetPassword = async(req, res) =>{
    try{

        //data fetch
        const{ password, confirmPassword, token} = req.body;

        //validation?
        if(confirmPassword !== password){
            return res.json({
                success: false,
                message:'Both does not matched',
            });
        }
        //userDetail from DB using Token
        const userDetails = await user.findOne({token:token});
        //if no entry- invlid token
        if(!userDetails){
            return res.status(401).json({
                success:false,
                message:'Invalid token',
            });
        }
        //token time check
        if(!(userDetails.resetPasswordExpires > Date.now())) {
            return res.status(403).json({
                success:false,
                message:'token expired',
            });
        }
        //hash pwd
        const encryptedPassword = await bcrypt.hash(password, 10);
        //password update
        await user.findOneAndUpdate(
            { token: token },
            { password: encryptedPassword },
            { new: true }
        );
        //return res
        res.json({
            success:true,
            message:'Password reset succesfully',
        });

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:'some error during updating password',
        });
    }
};
