import React from "react";
import loginImage from "./images/login.png";
import "./styles/Login.css";

function login() {
  return (
    <>
      <div className="login">
        <form action="" method="post">
          <h1>Welcome Back</h1>
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

export default login;
