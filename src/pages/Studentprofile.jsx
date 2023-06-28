import React from "react";
import Sidebar from "../components/Common/Sidebar";
import "../components/styles/profile.css";
import Stuprofile from "../assests/images/stuprofile.png";
import { NavLink } from "react-router-dom";

export default function Studentprofile() {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="content m-3 ">
          <p className="text-sm font-noraml text-gray mt-2">
            Home / Dashboard/ My profile
          </p>
          <p className="text-text font-bold text-3xl mt-2">My profile</p>
          <div className="parts flex flex-col space-y-5 mt-10 ">
            <div className="part1 flex flex-row justify-between  p-3 rounded-lg">
              <div className="flex flex-row">
                <div>
                  <img src={Stuprofile} alt="no" className="profileimg" />
                </div>
                <div className="ml-5">
                  <p className="text-text font-bold text-xl mt-2">
                    Omkar Lande
                  </p>
                  <p className="text-sm font-noraml text-gray mt-1">
                    ogom534@gmail.com
                  </p>
                </div>
              </div>
              <div>
                <button className="Edit bg-green  text-bg m-1  w-full px-4">
                  <NavLink to="/Studenteditprofile">Edit</NavLink>
                </button>
              </div>
            </div>
            <div className="part2 p-3 rounded-lg flex flex-col">
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-text font-bold text-xl mt-2">
                    Personal Details
                  </p>
                </div>
                <div>
                  {" "}
                  <button className="Edit bg-green  text-bg m-1  w-full px-4">
                    <NavLink to="/Studenteditprofile">Edit</NavLink>
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row space-x-96 m-2">
                  <div>
                    <p className="text-sm font-noraml text-gray mt-1">
                      First Name
                    </p>
                    <p className="text-sm font-semibold text-text mt-1">
                      Omkar
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="text-sm font-noraml text-gray mt-1">
                      Last Name
                    </p>
                    <p className="text-sm font-semibold text-text mt-1">
                      Lande
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-80 m-2">
                  <div>
                    <p className="text-sm font-noraml text-gray mt-1">Email</p>
                    <p className="text-sm font-semibold text-text mt-1">
                      ogom534@gmail.com
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="text-sm font-noraml text-gray mt-1">
                      Phone Number
                    </p>
                    <p className="text-sm font-semibold text-text mt-1">
                      (+91) 12345 67890
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="part3 p-3 rounded-lg flex flex-col">
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-text font-bold text-xl mt-2">
                    Address
                  </p>
                </div>
                <div>
                  {" "}
                  <button className="Edit bg-green  text-bg m-1  w-full px-4">
                    <NavLink to="/Studenteditprofile">Edit</NavLink>
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row space-x-96 m-2">
                  <div>
                    <p className="text-sm font-noraml text-gray mt-1">
                      Country
                    </p>
                    <p className="text-sm font-semibold text-text mt-1">
                     India
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="text-sm font-noraml text-gray mt-1">
                      City/State
                    </p>
                    <p className="text-sm font-semibold text-text mt-1">
                      Mumbai
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-80 m-2">
                  <div>
                    <p className="text-sm font-noraml text-gray mt-1">Postal code</p>
                    <p className="text-sm font-semibold text-text mt-1">
                      400036
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
