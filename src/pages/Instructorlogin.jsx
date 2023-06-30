import React from "react";
import {  NavLink } from "react-router-dom";
import instructorimg from "../assests/images/instructorimg.png";

function instructourlogin() {
  return (
    <>
      <div className="login flex justify-center space-x-28 items-center mt-20">
        <form action="" className="" method="post">
          <h1 className="font-lora text-2xl font-bold text-emerald-400 w-444px h-38px mt-1 ml-2 mb-3">Welcome Back</h1>
          <div className="logbuttons  flex flex-row bg-gray rounded-full space-x-6 ">
            <button variant="primary" className="bg-gray  text-green m-1 ">
              <NavLink to="/Login">Student</NavLink>
            </button>
            <button variant="primary" className=" bg-bg rounded-full text-bg m-1 border-0" >
             <NavLink to='/Instructorlogin'>Instructor</NavLink>
            </button>
          </div>
          <label htmlFor="email-input" className="text-sm font-semibold">Email Address</label>
          <input type="email" name="email-input" id="email-input" placeholder="Enter email address" className="placeholder:text-white p-2 py-4 rounded-md"/>

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
