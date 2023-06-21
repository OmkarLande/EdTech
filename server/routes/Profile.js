const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/Auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateProfilePicture,
  getEnrolledCourses,
} = require("../controllers/Profile")


// Profile routes

// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateProfilePicture", auth, updateProfilePicture)

module.exports = router