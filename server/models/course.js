const  mongoose = require("mongoose");

const courseSchema =new mongoose.Schema({

    courseName:{
        type:String,
        trim:true,
        required:true,
    },
    courseDescription:{
        type:String,
        trim:true,
        required:true,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    whatYouLearn:{
        type:String,
    },
    courseContent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
    },
    tags:{
        type:String,
    },
    ratingAndReviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratingAndReviews",
    },
    price:{
        type:Number,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
    },
    studentEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
});

module.exports = mongoose.model("course", courseSchema);