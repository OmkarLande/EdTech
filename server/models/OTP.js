const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/Template/emailVerificationTemplate");

const OTPSchema =new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:60*10. //10 min
    },
});


async function sendVerificationEmail(email, otp){

    try{
        const mailResponse =await mailSender
        (email, "Verification Email from SkillHive", emailTemplate(otp));
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