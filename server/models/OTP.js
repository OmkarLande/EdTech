const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OTPSchema =new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    OTP:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:60*5. //5 min
    },
});


async function sendVerificationEmail(email, otp){

    try{
        const mailResponse =await mailSender
        (email, "Verification Email from SkillHive", otp);
        console.log("Emaili sent successfully: " , mailResponse.response);
    }catch(error){
            console.log("Error occurred during sending the email: ",error);
            throw error;
        }
    }
    OTPSchema.pre("save", async function(next){
        console.log("new document is saved in database");
    
    if (this.isNew){
        await sendVerificationEmail(this.email, this.otp);
    }
    next();
    });

module.exports =mongoose.model("OTP", OTPSchema);