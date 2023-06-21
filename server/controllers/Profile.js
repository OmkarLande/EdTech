const Profile = require("../models/profile");
const User = require("../models/user");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();

exports.updateProfile = async(req,res) => {
    try{
        //data fetch and id
        const { dateOfBirth = "", about ="",contry ="",city="",postalCode ="", contactNo } = req.body;
        const id = req.user.id;

        //find profile by id
        const userDetails = await User.findById(id);
        const profile = await Profile.findById(userDetails.additionalDetails);

        // update profile
        profile.dateOfBirth = dateOfBirth;
        profile.about = about;
        profile.constactNo = contactNo;
        profile.contry = contry;
        profile.city = city;
        profile.postalCode = postalCode;

        //upload to DB
        await profile.save();

        //return res
        return res.status(200).json({
            success:true,
            message:"profile updated",
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'error during updation of profile',
        });
    }
};

exports.deleteAccount = async(req,res) => {
    try{
        //get id
        const id = req.user.id;
        console.log(id);

        //find user
        const user = await User.findById({ _id: id });

        //validate
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found",
            });
        }

        //delete linked profile
        await Profile.findByIdAndDelete({ _id: user.additionalDetails});

        //delete user
        await User.findByIdAndDelete({ _id:id });

        //return res
        return res.status(200).json({
            success:true,
            message:'user deleted',
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'error during deletion of profile',
        });
    }
};

exports.getAllUserDetails = async(req,res) =>{
    try{
       // get id
       const id = req.user.id;

        //find user
        const userDetails = await User.findById(id)
                                    .populate("additionalDetails")
                                    .exec();
        console.log(userDetails);
       // return res
       return res.status(200).json({
        success:true,
        message:'User data fetched',
        data:userDetails,
       })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'error during getting all user details',
        });
    }
};

exports.updateProfilePicture = async(req,res) => {
    try {
        const displayPicture = req.files.displayPicture
        const userId = req.user.id
        const image = await uploadImageToCloudinary(
          displayPicture,
          process.env.FOLDER_NAME,
          1000,
          1000
        )
        console.log(image)
        const updatedProfile = await User.findByIdAndUpdate(
          { _id: userId },
          { image: image.secure_url },
          { new: true }
        )
        res.send({
          success: true,
          message: `Image Updated successfully`,
          data: updatedProfile,
        })
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: error.message,
        })
      }
};

exports.getEnrolledCourses = async(req,res) => {
    try{
        //data fetch
        const userId = req.user.id;
        const userDetails = await User.findOne({
            _id:userId,
        }).populate("courses")
          .exec();
        
        //validate
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:`cources not find with user id ${userDetails}`,
            });
        }

        //return res
        return res.status(200).json({
            success:true,
            data:userDetails.courses,
            message:'we got the cources',
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'error during getting enrolled courses',
        });
    }
};