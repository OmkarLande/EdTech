const { contactUsEmail} = require("../mail/Template/contactFormRes");
const mailSender = require("../utils/mailSender");

exports.contactUsController = async (req,res) =>{
    //data fetch
    const {email,firstName,lastName,message,contactNo, countrycode } = req.body;
    console.log(req.body);
    //mail send
    try{
        const emailRes = await mailSender(
            email,
            "Your Data Send Successfully",
            contactUsEmail(email,firstName,lastName, message, contactNo, countrycode)
        )
        console.log("Enail res ", emailRes)
        return res.status(200).json({
            success:true,
            message:"Email Sent",
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"error at contactUsController",
        });
    }

};