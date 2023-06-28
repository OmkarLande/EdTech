import React from "react";
import Studentsigninimg from "../assests/images/studentsignin.png";
import "../components/styles/signin.css";
import { NavLink } from "react-router-dom";

export default function Studentsignin() {
  return (
    <div className="signin flex justify-center items-start space-x-28  mt-20">
      <form className=" shadow-lg shadow-slate-400 p-6 rounded-3xl">
        <h1 className="text-text font-bold text-3xl mb-2">Join the millions learning to code with SkillHive.</h1>
        <p className="text-gray font-normal text-xl mb-5">Build skills for today, tomorrow, and beyond. </p>
        <div className="switch flex flex-row bg-gray rounded-full space-x-6">
          <button className="switchbut bg-bg rounded-full text-green m-1">
            <NavLink to="/Studentsignin">Student</NavLink>
          </button>
          <button className="switchbut rounded-full bg-gray text-bg m-1 border-0">
            <NavLink to="/Instructorsignin">Instructor</NavLink>
          </button>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="">
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="phone bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="1234567890"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter email-address"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="submit">
          <button type="submit" className=" bg-green ">
            Create Account
          </button>
        </div>
        <a href="" className="text-sm font-noraml text-gray mt-2">
          <NavLink to="/Login">Already have an account ?</NavLink>
        </a>
      </form>
      <div className="carousal">
        <img src={Studentsigninimg} alt="" className="signinimg" />
      </div>
    </div>
  );
}
