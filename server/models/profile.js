const  mongoose = require("mongoose");

const profileSchema =new mongoose.Schema({
    gender:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        trim:true,
    },
    contactNo:{
        type:Number,
        trim:true,
        required:true,
    },
    contry:{
        type:String,
    },
    city:{
        type:String,
    },
    postalCode:{
        type:Number,
        trim:true,
    },
});

module.exports = mongoose.model("profile", profileSchema);