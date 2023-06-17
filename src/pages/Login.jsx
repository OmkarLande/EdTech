import { React } from "react";
import {  NavLink } from "react-router-dom";
import loginImage from "../../src/assests/images/login.png";
import "../components/styles/Login.css";
import Button from "react-bootstrap/Button";
import Instructorlogin from './Instructorlogin';

export default function Login() {
 
  return (
    <>
      <div className="login">
        <form action="" method="post">
          <h1>Welcome Back</h1>
          <div className="logbuttons">
            <Button variant="primary">
              <NavLink to="/">Student</NavLink>
            </Button>
            <Button variant="primary" >
             <NavLink to='/Instructorlogin'>Instructor</NavLink>
            </Button>
          </div>
          <label htmlFor="email-input">Email Address</label>
          <input type="email" name="email-input" id="email-input" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <a href="">Forgot Password?</a>
          <input type="submit" value="Sign In" />
        </form>
        <div className="carousal">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </>
  );
}
