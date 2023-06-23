const  mongoose = require("mongoose");

const categorySchema =new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true
    },
    courses:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course",
    },
});

module.exports = mongoose.model("category", categorySchema);