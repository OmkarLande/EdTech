const Course = require("../models/course");
const Category =require("../models/category");
const User = require("../models/user");
const { uploadImageToCloudinary} = require("../utils/imageUploader");

exports.createCourse = async(req,res) => {
    try{

        //data fetch
        const userId = req.user.id;
        let {
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            category,
            status,
            instructions,
        } = req.body;

        //validation
        if(
            !courseName ||
            !courseDescription ||
            !whatYouWillLearn ||
            !price ||
            !category
        ){
            return res.status(400).json({
                success:false,
                message:"all fields are mandatory",
            });
        }
        if(!status || status === undefined){
            status = "Draft";
        }

        //is user instructor?
        const instrctorDetails = await User.findById(userId, {
            accountType: "Instructor",
        });

        if (!instrctorDetails){
            return res.status(404).json({
                success:false,
                message:"Instructor Details not found",
            });
        }
         
        //Category validation
        const categoryDetails = await Category.findById(category);
        if(!categoryDetails){
            return res.status(404).json({
                success:false,
                message:'Category not found',
            });
        }

        //new course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor:instrctorDetails._id,
            whatYouLearn:whatYouWillLearn,
            price,
            category:category._id,
            status:status,
            instructions:instructions,
        });

        //new course to instructor dashboard
        await User.findByIdAndUpdate(
            {
                _id:instrctorDetails._id,
            },
            {
                $push:{
                    courses:newCourse._id,
                },
            },
            { new: true}
        );

        //new course to Category
         await Category.findByIdAndUpdate(
            { _id:category },
            {
                $push:{
                    course: newCourse._id,
                },
            },
            { new: true }
         );

         //return res
         res.status(200).json({
            success:true,
            data:newCourse,
            message:'Course created successfully',
         });

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:'course not created',
        });
    }
};

//get all course

exports.getAllCourses = async(req,res) => {
    try{
        const allCourses = await Course.find(
            {},
            {
                courseName: true,

                price:true,
                thumbnail:true,
                instructor:true,
                ratingAndReviews:true,
                studentEnrolled:true,
            }
        )
        .populate("instructor")
        .exec();
        return res.status(200).json({
            success:true,
            data:allCourses,
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:'Cant fetch all cources',
        });

    }
};

//course details

exports.getCourseDetails = async(req,res)=>{
    try{
        //getting id
        const {courseId} = req.body;

        //find course details

        const courseDetails = await Course.find(
                                    {_id:courseId})
                                    .populate(
                                        {
                                            path:"instructor",
                                            populate:{
                                                path:"additionalDetails",
                                            },
                                        }
                                    )
                                    .populate("category")
                                    .populate({
                                        path:"courseContent",
                                        populate:{
                                            path:"subSection",
                                        },
                                    })
                                    .exec();

        //validation

        if(!courseDetails){
            return res.status(400).json({
                success:false,
                message:`could not found the course with ${courseId}`,
            });
        }

        //return res
        return res.status(200).json({
            success:false,
            message:'course found!!!',
            data:courseDetails,
        });

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:'could not get course detail',
        });
    }
};