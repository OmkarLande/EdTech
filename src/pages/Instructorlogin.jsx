/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {  NavLink } from "react-router-dom";
import instructorimg from "../assests/images/instructorimg.png";
import { TouchableOpacity, View } from "react-native";
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

  const [selectedTab,setSelectedTab] = useState(0);
  return (
    <>
      <div className="login flex justify-center space-x-28 items-center mt-20">
        <form onSubmit={handleOnSubmit}  className="" method="post">
          <h1 className="font-lora text-2xl font-bold text-emerald-400 w-444px h-38px mt-1 ml-2 mb-3">Welcome Back</h1>
          <div className="Navigate">
            <TouchableOpacity
            style={{
              width: '45%',
              height: 50,
              borderRadius: 15,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: selectedTab == 0? '#fff': "#ccc",
            }}
            onPress={()=>{
              setSelectedTab(0);
            }
            }>
              <NavLink style={{color: selectedTab == 0? '#33BEAF': "#fff",fontSize: 18, fontWeight: '700'}} to="/Login">
                Student
                </NavLink>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
              width: '45%',
              height: 50,
              borderRadius: 15,
              margin: 10,
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundColor: selectedTab == 1? '#fff': "#ccc",
            }}
            onPress={()=>{
              setSelectedTab(1);
            }
            }>
              <NavLink style={{color: selectedTab == 1? "#33BEAF": "#fff",fontSize: 18, fontWeight: '700'}} to="/Instructorlogin">
                Instructor
                </NavLink>
            </TouchableOpacity>
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
