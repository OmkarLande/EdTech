import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/createpassword.css'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { resetPassword } from "../services/Operation/authApi"


const Createpassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
    {loading ? (
      <div className="spinner"></div>
    ) : (
    <div className="main">
      <form onSubmit={handleOnSubmit} method='post'>
        <h1 className='font-Lora'>Choose New Password</h1>
        <p>Almost Done! Enter your new password and you're all set</p>
        <div className="form">
          <label htmlFor="#"><p className='mb-1 text-[0.875rem] leading-[1.375rem] text-text'>New Password:</p>
          <input 
          type={showConfirmPassword? "text" : "password"}
          name='password'
          value={password}
          id='password'
          onChange={handleOnChange}
          placeholder='Enter Password'/>
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
          </label>
          <label htmlFor="#"><p className='mb-1 text-[0.875rem] leading-[1.375rem] text-text'> Confirm Password: </p>
          <input
          required
          type={showConfirmPassword? "text" : "password"}
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleOnChange}
          id='password'
          placeholder='Enter Password'/>
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
          </label>
        </div>
        <div className="click">
          <input type="Submit" value="Reset Your Password"/>
        </div>
        <div className="return">
          <NavLink to="/Login">Back to Login</NavLink>
        </div>
      </form>
    </div>
  )}
  </div>
  )
}

export default Createpassword
