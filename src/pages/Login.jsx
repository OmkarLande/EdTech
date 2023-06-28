import { React } from "react";
import {  NavLink } from "react-router-dom";
import loginImage from "../../src/assests/images/login.png";
import "../components/styles/Login.css";
<<<<<<< HEAD
import Button from "react-bootstrap/Button";
=======
import Instructorlogin from './Instructorlogin';
>>>>>>> eaa804359be1385b3e5f02f5e20c0843ddfd96c3

export default function Login() {
 
  return (
    <>
      <div className="login flex justify-center space-x-28 items-center mt-20">
        <form action=""  method="post">
          <h1 className="font-lora text-2xl font-bold text-emerald-400 w-444px h-38px mt-1 ml-2 mb-3">Welcome Back</h1>
          <div className="logbuttons flex flex-row bg-gray rounded-full space-x-6" >
            <button  className="bg-bg rounded-full text-green m-1 "  >
              <NavLink to="/Login">Student</NavLink>
            </button>
            <button  className=" bg-gray text-bg m-1 border-0" >
             <NavLink to='/Instructorlogin'>Instructor</NavLink>
            </button>
          </div>
<<<<<<< HEAD
          <label htmlFor="email-input">Email Address</label>
          <input type="email" name="email-input" id="email-input"/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <NavLink to="/resetpassword">Forgot Password?</NavLink>
=======
          <label htmlFor="email-input" className="text-sm font-semibold" >Email Address</label>
          <input type="email" name="email-input" id="email-input" placeholder="Enter email address" className="placeholder:text-white p-2 py-4 rounded-md"/>
          <label htmlFor="password" className="text-sm font-semibold">Password</label>
          <input type="password" id="password" placeholder="Enter Password" className="placeholder:text-white p-2 py-4 rounded-md"/>
          <a href="" className="text-sm font-semibold">Forgot Password?</a>
>>>>>>> eaa804359be1385b3e5f02f5e20c0843ddfd96c3
          <input type="submit" value="Sign In" />
        </form>
        <div className="carousal">
          <img src={loginImage} alt="" className="loginimg" />
        </div>
      </div>
    </>
  );
}
