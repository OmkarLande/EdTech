/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {  NavLink } from "react-router-dom";
import instructorimg from "../assests/images/instructorimg.png";

import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { login } from "../services/Operation/authApi"


function instructourlogin() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }


  return (
    <>
      <div className="login flex justify-center space-x-28 items-center mt-20">
        <form onSubmit={handleOnSubmit}  className="" method="post">
          <h1 className="font-lora text-2xl font-bold text-emerald-400 w-444px h-38px mt-1 ml-2 mb-3">Welcome Back</h1>
          <div className="logbuttons  flex flex-row bg-gray rounded-full space-x-6 ">
            <button variant="primary" className="bg-gray  text-green m-1 ">
              <NavLink to="/Login">Student</NavLink>
            </button>
            <button variant="primary" className=" bg-bg rounded-full text-bg m-1 border-0" >
             <NavLink to='/Instructorlogin'>Instructor</NavLink>
            </button>
          </div>
          <label className="text-sm font-semibold">Email Address</label>
          <input type="text" name="email" value={email} id="email" placeholder="Enter email address" onChange={handleOnChange} className="placeholder:text-white p-2 py-4 rounded-md"/>

          <label htmlFor="password" className="text-sm font-semibold">Password</label>
          <input type="password" id="password" placeholder="Enter Password" className="placeholder:text-white p-2 py-4 rounded-md"/>
          <NavLink to="/Resetpassword"><a href="" className="text-sm font-semibold">Forgot Password?</a></NavLink>
          <input type="submit" value="Sign In" />
        </form>
        <div className="carousal">
          <img src={instructorimg} alt="" className="loginimg"/>
        </div>
      </div>
    </>
  );
}

export default instructourlogin;
