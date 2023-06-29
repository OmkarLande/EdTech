import React, { useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import { NavLink } from "react-router-dom";
import "../components/styles/edit.css";
import Stuprofile from "../assests/images/stuprofile.png";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function Studenteditprofile() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="content m-3">
          <NavLink to="/Studentprofile" className="text-gray">
            {" "}
            Back{" "}
          </NavLink>
          <p className="text-text font-bold text-3xl mt-2">Edit profile</p>
          <div className="parts flex flex-col space-y-5 mt-10 ">
            <div className="part1 p-3 rounded-lg flex flex-row">
              <div>
                <img src={Stuprofile} alt="no" className="profileimg" />
              </div>
              <div className="ml-5">
                <p className="text-base font-medium text-gray mt-2">
                  Change Profile Picture
                </p>
                <div className="flex flex-row space-x-4">
                  <button className="bg-green rounded-md text-text mt-3 w-20 h-6 p-3 px-5">
                    <NavLink to="">Change</NavLink>
                  </button>
                  <button className="bg-bg rounded-md text-gray mt-3 w-20 h-6 p-3 px-5 border border-black">
                    <NavLink to="">Remove</NavLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="part2 p-3 rounded-lg flex flex-col">
              <p className="text-text font-semibold text-lg mt-2">
                Profile Information
              </p>
              <div className="flex flex-row  justify-between mt-3">
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
                    className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-0"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-0"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-3">
                <div className="w-full ">
                  <label
                    for="DOB"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of birth
                  </label>
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    className="date "
                  />
                </div>
                <div>
                  <label
                    for="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <Card className="w-full max-w-[24rem] bg-gray mr-2">
                    <List className="flex-row">
                      <ListItem className="p-0">
                        <label
                          htmlFor="horizontal-list-react"
                          className="px-3 py-2 flex items-center w-full cursor-pointer"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              name="horizontal-list"
                              id="horizontal-list-react"
                              ripple={false}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-bg"
                          >
                            Male
                          </Typography>
                        </label>
                      </ListItem>
                      <ListItem className="p-0">
                        <label
                          htmlFor="horizontal-list-vue"
                          className="px-3 py-2 flex items-center w-full cursor-pointer"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              name="horizontal-list"
                              id="horizontal-list-vue"
                              ripple={false}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-bg"
                          >
                            female
                          </Typography>
                        </label>
                      </ListItem>
                      <ListItem className="p-0">
                        <label
                          htmlFor="horizontal-list-svelte"
                          className="px-3 py-2 flex items-center w-full cursor-pointer"
                        >
                          <ListItemPrefix className="mr-3">
                            <Radio
                              name="horizontal-list"
                              id="horizontal-list-svelte"
                              ripple={false}
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-bg"
                          >
                            Other
                          </Typography>
                        </label>
                      </ListItem>
                    </List>
                  </Card>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-4">
                  <div>
                    <label
                      for="phonenumber"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phonenumber
                    </label>
                    <select
                      id="countries"
                      className="mt-2 select border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  pt-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>+91</option>
                      <option value="US">+11</option>
                      <option value="CA">+12</option>
                      <option value="FR">+13</option>
                      <option value="DE">+14</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    {" "}
                    <input
                      type="tel"
                      id="phone"
                      className="text-left mt-1 phonecall bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                      placeholder="1234567890"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="about"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  >
                    About
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    class="messagebox block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Bio Details"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="part3 p-3 rounded-lg flex flex-row justify-between">
              {" "}
              <div className="mb-6">
                <p className="text-text font-semibold text-lg mt-2">Password</p>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="password ml-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="confirm_password"
                  className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className="password ml-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="confirm password"
                  required
                />
              </div>
            </div>
            <div className="part4 p-3 rounded-lg flex flex-col space-y-4">
              <div className="flex flex-col">
                <div>
                  <p className="text-text font-semibold text-lg mt-2">Adress</p>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <div>
                    <label
                      for="country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-0"
                      placeholder="Country Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                    >
                      City/State
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-0"
                      placeholder="City Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label
                    for="postalcode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-bg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-0"
                    placeholder="Postal Code"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="part5 p-3 rounded-lg flex flex-row bg-green">
              <div>
                <button className="w-full border-0">
                  <Icon
                    icon="fluent:delete-28-filled"
                    color="white"
                    className="bg-gray rounded-full w-10 h-10 p-2"
                  />
                </button>
              </div>
              <div className="ml-4">
                <p className="text-bg font-semibold text-lg mt-2">
                  Delete Account
                </p>
                <p className="text-base font-medium text-gray">Would you like to delete account?</p>
                <p className="text-base font-medium text-gray">This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
                <p className="text-lg font-medium italic text-text">I want to delete my account.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
