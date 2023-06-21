const Section = require("../models/section");
const SubSection = require("../models/subSection");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();


exports.createSubSection = async(req,res) => {
    try{
        //data fetch
        const { sectionId, title, description } = req.body;

        //for video
        const video = req.files.video;

        // validation
        if(!sectionId || !title || !description || !video){
            return res.status(404).json({
                success:false,
                message:"All fields are required",
            });
        }
        console.log(video);

        //video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(
                                    video,
                                    process.env.FOLDER_NAME
                                );
        console.log(uploadDetails);

        //new subSection
        const subSectionDetails = await SubSection.create({
            title:title,
            timeDuration: `${uploadDetails.duration}`,
            description: description,
            videoUrl: uploadDetails.secure_url,
        });
        
        //update section
        const updatedSection = await Section.findByIdAndUpdate(
                                    { _id:sectionId },
                                    { $push: {
                                        subSection: subSectionDetails._id
                                    }},
                                    { new: true }
                                ).populate("subSection");

        //return res
        return res.status(200).json({
            success:true,
            data: updatedSection,
            message:'subsection created',
        });

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};


exports.updateSubSection =  async(req, res) => {
    try{
        //data fetch
        const { sectionId, title, description } = req.body;

        const subSection = await SubSection.findById(sectionId);

        //validation
        if(!subSection){
            return res.status(404).json({
                success:false,
                message:'sub-section not found',
            });
        }

        if(title !== undefined) {
            subSection.title = title
        }

        if(description !== undefined){
            subSection.description = description
        }

        if(req.files && req.files.video !== undefined){
            const video = req.files.video
            const uploadDetails = await uploadImageToCloudinary(
                                        video,
                                        process.env.FOLDER_NAME
                                    )
            subSection.videoUrl = uploadDetails.secure_url
            subSection.timeDuration = `${uploadDetails.duration}`
        }

        //upload to DB
        await subSection.save()

        //return res
        return res.status(200).json({
            success:true,
            message:"subSection updated",
        });

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'error during updating the subsection',
        });
    }
};


exports.deleteSubSection = async(req,res) => {
    try{
        const { subSectionId, sectionId } = req.body

        await Section.findByIdAndUpdate(
            { _id: sectionId },
            {
                $pull:{
                    subSection: subSectionId,
                },
            }
        )

            const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId });

            if(!subSection){
                return res.status(404).json({
                    success:false,
                    message:"subsesctoin not found",
                });
            }

            return res.status(200).json({
                success:true,
                message:'Subsection deleted',
            });

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:'error during deleting the subsection',
        });
    }
};
