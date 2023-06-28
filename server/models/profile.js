const  mongoose = require("mongoose");

const profileSchema =new mongoose.Schema({
    gender:{
        type:String,
        
    },
    dateOfBirth:{
        type:String,
        
    },
    about:{
        type:String,
        trim:true,
    },
    contactNo:{
        type:Number,
        trim:true,
        
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