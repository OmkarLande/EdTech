const  mongoose = require("mongoose");

const courseProgressSchema =new mongoose.Schema({

    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course",
    },
    completedVideos:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
    },
});

module.exports = mongoose.model("couresProgress", courseProgressSchema);