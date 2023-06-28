import { React } from "react";
import {  NavLink } from "react-router-dom";
import loginImage from "../../src/assests/images/login.png";
import "../components/styles/Login.css";
// import Instructorlogin from './Instructorlogin';
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { login } from "../services/Operation/authApi"


export default function Login() {
 
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
        <form onSubmit={handleOnSubmit}   method="post">
          <h1 className="font-lora text-2xl font-bold text-emerald-400 w-444px h-38px mt-1 ml-2 mb-3">Welcome Back</h1>
          <div className="logbuttons flex flex-row bg-gray rounded-full space-x-6" >
            <button  className="bg-bg rounded-full text-green m-1 "  >
              <NavLink to="/Login">Student</NavLink>
            </button>
            <button  className=" bg-gray text-bg m-1 border-0" >
             <NavLink to='/Instructorlogin'>Instructor</NavLink>
            </button>
          </div>
          <label htmlFor="email-input" className="text-sm text-bgfont-semibold" >Email Address</label>
          <input type="email" name="email-input" id="email-input" placeholder="Enter email address" onChange={handleOnChange} className="placeholder:text-white p-2 py-4 rounded-md"/>
          <label htmlFor="password" className="text-sm font-semibold">Password</label>
          <input type="password" id="password" placeholder="Enter Password" onChange={handleOnChange} className="placeholder:text-white p-2 py-4 rounded-md"/>
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
          <Link to="/forgetPassword">
            <p  className="text-sm font-semibold">Forgot Password?</p>
            </Link>
          <button type="submit" value="Sign In" />
        </form>
        <div className="carousal">
          <img src={loginImage} alt="" className="loginimg" />
        </div>
      </div>
    </>
  );
}
