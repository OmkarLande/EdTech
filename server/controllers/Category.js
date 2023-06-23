const Category = require("../models/category");

//handler

exports.createCategory = async (req, res) => {
	try {
		const { name, description } = req.body; 
		if (!name || !description ) {
			return res
				.status(400)
				.json({
                    success: false,
                    message: "All fields are required",
                });
		}
        
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
			message: "Category Created Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

exports.showAllCategories = async(req,res) =>{
    try{
        const allCategory = await Category.find({}, {name:true, description:true});
        res.status(200).json({
            success:true,
            message:'All Category are getting succesfully',
            allCategory,
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:'error getting while getting all Category',
        });
    }
};

exports.catagoryPageDetails = async(req,res) =>{
    try{
        //get category id
        const {categoryId} = req.body;

        //get course from id
        const selectedCategory = await Category.findById(categoryId)
                                                .populate("courses")
                                                .exec();

        //validation
        if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:"data not found",
            });
        }
        //get courses from diff categories
        const differentCategories = await Category.find({
                                        _id:{$ne: categoryId},
                                        })
                                        .populate("courses")
                                        .exec();

        //return res
        return res.status(200).json({
            success:true,
            data:{
                selectedCategory,
                differentCategories,
            },
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"error at getting categoryPageDetails",
        });
    }
};