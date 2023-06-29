import {React} from 'react';
import { NavLink } from "react-router-dom";
import '../components/styles/Resetpassword.css';

function Resetpassword ()  {
  return (
    <>
    <div className="title">
      <form action="" method="post">
        <h1>Reset Your Password</h1>
        <p>Don't worry. We'll email you instructions to <br></br> reset your password</p>
        <div className="email">
          <label htmlFor="">Email Id:</label>
          <input type="text" placeholder="Enter Email Address" />
        </div>
        <div className="click">
          <NavLink to="/Verifyemail"><input type="Submit" Value="Reset Your Password"/></NavLink>
        </div>
        <div className="return">
          <NavLink to="/">Back to Login</NavLink>
        </div>
      </form>
    </div>
    </>
  );
}

export default Resetpassword
