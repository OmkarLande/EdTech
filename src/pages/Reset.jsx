import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/reset.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPasswordResetToken } from "../services/Operation/authApi"

const Reset = () => {

  const [email] = useState("")
  const [setEmailSent] = useState(false)
  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }


  return (
    <div className='window'>
      <form onSubmit={handleOnSubmit}>
        <h1>Reset Complete</h1>
        <p>All Done! We have sent an email to <br/> {`${email}`} to confirm</p>
        <div className="click">
        <NavLink to="/Login"><input type="Submit" value="Return to Login" /></NavLink>
      </div>
      <div className="return">
        <NavLink to="/Login">Back to Login</NavLink>
      </div>
      </form>
    </div>
  )
}

export default Reset
