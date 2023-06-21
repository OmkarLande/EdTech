const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

//authentication

exports.auth = async (req, res, next)=> {
    try{

        //token extraction
        const token = req.cookies.token
                        || req.body.token
                        || req.header("Authorisation").replace("Bearer","");
        console.log("Token Extracted");
        //token missing

        if(!token){
            return res.status(401).json({
                success:false,
                message:'token is missing',
            });
        }
        //verify token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user =decode;
        }catch(error){
            //token issue
            return res.status(401).json({
                success:false,
                message:'token is not valid',
            });
        }

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'error while token validation',
        });
    }
};


//isStudent
exports.isStudent = async(req, res, next) =>{
    try{
        if(req.User.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:'This is protected route only for students',
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is cannot be verified",
        });
    }
};

//isInstructor
exports.isInstructor = async(req, res, next) =>{
    try{
        if(req.User.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:'This is protected route only for Instructor',
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is cannot be verified",
        });
    }
};

//isAdmin
exports.isAdmin = async(req, res, next) =>{
    try{
        if(req.User.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:'This is protected route only for Admin',
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is cannot be verified",
        });
    }
};