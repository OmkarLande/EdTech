import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/createpassword.css'

const Createpassword = () => {
  const [password,setPassword] = useState("");
  const [visible,setVisible] = useState(false);

  const [password1,setPassword1] = useState("");
  const [visible1,setVisible1] = useState(false);
  return (
    <div className="main">
      <form action="" method='post'>
        <h1>Choose New Password</h1>
        <p>Almost Done! Enter your new password and you're all set</p>
        <div className="form">
          <label htmlFor="#">New Password:</label>
          <input 
          value={password}
          id='password'
          onChange={(e)=>setPassword(e.target.value)}
          type={visible ? "text":"password"} 
          placeholder='Enter Password'/>
          <label htmlFor="#">Confirm Password:</label>
          <input
          value={password1}
          id='password'
          onChange={(e)=>setPassword1(e.target.value)}
          type={visible1 ? "text":"password"} 
          placeholder='Enter Password'/>
        </div>
        <div className="click">
          <NavLink to="/Reset"><input type="Submit" value="Reset Your Password"/></NavLink>
        </div>
        <div className="return">
          <NavLink to="/">Back to Login</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Createpassword
