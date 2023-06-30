import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/Checkemail.css'

const Checkemail = () => {
  return (
    <div>
      <form action="" className="echo">
        <div className="header">
            <h1 className="title">Check Your Email</h1>
            <p className="text">
                We have sent the reset email to <br/> youremailaccount@gmail.com
            </p>
            <div className="onpress">
                <NavLink to="/Createpassword"><button className="clickto">Resend Email</button></NavLink>
            </div>
            <div className="return">
                <NavLink to="/">Back to Login</NavLink>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Checkemail
