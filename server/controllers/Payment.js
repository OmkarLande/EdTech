const {instance} = require("../config/razorpay");
const Course = require("../models/course");
const User = require("../models/user");
const mailSender = require("../utils/mailSender");
// const {courseEnrollmentEmail} = require("../mail/template/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");

//capture Payment at initiating the order
exports.capturePayment = async(req,res) =>{
    //get courseID and USErID
    const { course_Id } = req.body;
    const userId = req.user.id;

    //validation for courseId courseDetail 
        //courseID
        if(!course_Id){
            return res.status(403).json({
                success:false,
                message:"please provide valid couse id",
            });
        }

        //courseDetail
        let course;
        try{
            course = await Course.findById(course_Id);
            if(!course){
                return res.json({
                    success:false,
                    message:'could not found out the course',
                });
            }

            //user aleready exist
            const uid = new mongoose.Types.ObjectId(userId);
            if(course.studentEnrolled.includes(uid)) {
                return res.status(200).json({
                    success:true,
                    message:"Student is already enrolled",
                });
            }
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                success:false,
                message:error.message,
            });
        }

    //order create
    const amount = course.price;
    const currency ="INR";
    const options ={
        amount: amount*100,
        currency,
        receipt:Math.random(Date.now()).toString(),
        notes:{
            courseId:course_Id,
            userId,
        }
    };
    //payment intiation
        try{
            //initialization
            const paymentResponse = await instance.orders.create(options);
            console.log(paymentResponse);

            //return res
            return res.status(200).json({
                success:true,
                courseName:course.courseName,
                courseDescription:course.courseDescription,
                thumbnai:course.thumbnail,
                orderID:paymentResponse.id,
                currency:paymentResponse.currency,
                amount:paymentResponse.amount,
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                success:false,
                message:error.message,
            });
        }
};


exports.verifySignature = async(req,res) =>{
    const webhookSecret = "12345678";
    const signature = req.headers["x-razorpay-signature"];
    const shasum = crypto.createHmac("sha256", webhookSecret);

    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");
    if(signature === digest ){
        console.log("Payment is Authorized");

        const { courseId, userId } =req.body.payload.entity.notes;
        
            try{
                //fulfil the action

                //find the course and enroll the student in it
                const enrolledCourse = await Course.findOneAndUpdate(
                                                {_id: courseId},
                                                {$push:{studentsEnrolled: userId}},
                                                {new:true},
                );

                if(!enrolledCourse) {
                    return res.status(500).json({
                        success:false,
                        message:'Course not Found',
                    });
                }

                console.log(enrolledCourse);

                //find the student and add the course to their list enrolled courses me 
                const enrolledStudent = await User.findOneAndUpdate(
                                                {_id:userId},
                                                {$push:{courses:courseId}},
                                                {new:true},
                );

                console.log(enrolledStudent);

                //confirmation mail
                const emailResponse = await mailSender(
                                        enrolledStudent.email,
                                        "Congratulations from CodeHelp",
                                        "Congratulations, you are onboarded into new CodeHelp Course",
                );

                console.log(emailResponse);
                return res.status(200).json({
                    success:true,
                    message:"Signature Verified and COurse Added",
                });


        }       
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success:false,
                message:error.message,
            });
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:'Bad request',
        });
    }
};