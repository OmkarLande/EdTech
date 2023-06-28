import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/reset.css'

const Reset = () => {
  return (
    <div className='window'>
      <form action="">
        <h1>Reset Complete</h1>
        <p>All Done! We have sent an email to <br/> h************@gmail.com to confirm</p>
        <div className="click">
        <NavLink to="/"><input type="Submit" value="Return to login" /></NavLink>
      </div>
      <div className="return">
        <NavLink to="/">Back to Login</NavLink>
      </div>
      </form>
    </div>
  )
}

export default Reset
