import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/verifyemail.css'

const Verifyemail = () => {
  return (
    <div className='menu'>
      <form action="" method='post'>
        <h1>Check Your Email</h1>
        <p>We have sent the reset email to <br></br> h**************@gmail.com</p>
        <div className="click">
          <NavLink to="/Createpassword"><input type="Submit" Value="Resend Email"/></NavLink>
        </div>
        <div className="return">
          <NavLink to="/">Back to Login</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Verifyemail
