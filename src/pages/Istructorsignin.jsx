import React from "react";
import Instructorsigninimg from "../assests/images/instructorsignin.png";
import "../components/styles/signin.css";
import { NavLink } from "react-router-dom";

import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../services/Operation/authApi"
import { setSignupData } from "../slices/authSlice"
import { ACCOUNT_TYPE } from "../utils/constants"



export default function Instructorsignin() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }


  return (
    <div className="signin flex justify-center space-x-28 items-start mt-20">
      <form onSubmit={handleOnSubmit} className=" shadow-lg shadow-slate-400 p-6 rounded-3xl">
        <h1 className="text-text font-bold text-3xl mb-2">Welcome!!</h1>
        <p className="text-gray font-normal text-xl mb-3">Discover your passion today... </p>
        <div className="switch flex flex-row bg-gray rounded-full space-x-6">
          <button className="switchbut bg-gray rounded-full text-bg m-1 ">
            <NavLink to="/Studentsignin">Student</NavLink>
          </button>
          <button className="switchbut bg-bg rounded-full text-green  m-1 border-0">
            <NavLink to="/Instructorsignin">Instructor</NavLink>
          </button>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              name="firstName"
              onChange={handleOnChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="">
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="phone bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="987654321"
              //pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter email-address"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type={showPassword? "text":"password"}
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter password"
            required
          />
          <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
        </div>
        <div className="mb-6">
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type={showConfirmPassword? "text" : "password"}
            id="confirm_password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="confirm password"
            required
          />
          <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
        </div>
        <div className="submit">
          <button type="submit" className=" bg-green ">
            Create Account
          </button>
        </div>
        <p className="text-sm font-noraml text-gray mt-2">
          <NavLink to="/Instructorlogin">Already have an account ?</NavLink>
        </p>
      </form>
      <div className="carousal">
        <img src={Instructorsigninimg} alt="" className="signinimg" />
      </div>
    </div>
  );
}
