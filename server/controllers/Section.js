const Section = require("../models/section");
const Course = require("../models/subSection");

exports.createSection = async( req , res) =>{
    try{
        //data fetch
        const {sectionName , courseId } = req.body;

        //validate
        if(!sectionName || !courseId ){
            return res.status(400).json({
                success: false,
                message:"Properties missing",
            });
        }

        //create section
        const newSection = await Section.create({sectionName});

        //update course with objId

        const updatedCourse = await Course.findByIdAndUpdate(
                                            courseId,
                                            {
                                                $push: {
                                                    courseContent : newSection._id,
                                                }
                                            },
                                            {new: true}
                                        )
                                        .populate({
                                            path:"courseContent",
                                            populate: {
                                                path:"subSection",
                                            },
                                        })
                                        .exec();
        //return res
        res.status(200).json({
            success: true,
            message: " Section created successfully",
            updatedCourse,
        });

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};


exports.updateSection = async(req, res) =>{
    try{    
        //data Fetch
        const { sectionName, sectionId } = req.body;
        //validate

        if(!sectionName || !sectionId ){
            return res.status(403).json({
                success:false,
                message:"all fields are required",
            });
        }

        //update at DB
        const section = await Section.findByIdAndUpdate(
            sectionId,
            { sectionName },
            { new: true }
        );
        res.status(200).json({
            success:true,
            message:section,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

exports.deleteSection = async(req,res) => {
    try{
        //get Id
        const { sectionId } = req.params;
        //findIdAndDelete
        await Section.findByIdAndDelete(sectionId);
        //return res
        res.status(200).json({
            success: true,
            message:'Section successfully deleted',
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};