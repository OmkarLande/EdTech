import React from "react";
import Demoimg from "../assests/images/demoimg.png";
import feature1 from "../assests/images/fea1.png";
import feature2 from "../assests/images/fea2.png";
import feature3 from "../assests/images/fea3.png";
import { Icon } from "@iconify/react";
import "../components/styles/Home.css";

export default function Home() {
  return (
    <div className="content">
      <div className="firstpart flex justify-center items-center space-x-20">
        <div className="demo">
          <h1 className="w-444px h-91px font-bold text-4xl ">
            Empower Your Future with Practical Skills
          </h1>
          <p className="w-444px h-77px font-normal text-lg text-gray-400 mt-4">
            Build skills with courses, certificates, and get online knowledge
            from our world- class platform.
          </p>
          <button className="flex flex-row items-center justify-center px-6 py-18 gap-10 w-30 h-10 rounded-md mt-20  p-3">
            Book a demo
          </button>
        </div>
        <div className="caurosal">
          <img src={Demoimg} alt="demonimg" className="demoimg" />
        </div>
      </div>
      <div className="secondpart flex flex-row justify-center items-center mt-10">
        <div className="feauters flex flex-row items-center justify-center mt-10 space-x-5 ">
          <div className="feauter1 flex flex-row items-center justify-center w-90 h-150">
            <Icon icon="ri:computer-line" color="white" className=" icon1 rounded-xl m-3 w-28 h-28 p-3"/>
            <div className="feauter-content flex flex-col">
              <p className="font-semibold text-2xl">Best Instructor</p>
              <p className="font-normal text-lg my-3 mr-3">
                We have world class mentor with lots of experience.
              </p>
            </div>
          </div>
          <div className="feauter2 flex flex-row items-center justify-center w-90 h-150">
            <Icon
              icon="arcticons:fiitjee-recorded-lectures"
              color="white"
              className=" icon2 rounded-xl m-3 w-28 h-28 p-3"
            />
            <div className="feauter-content flex flex-col">
              <p className="font-semibold text-2xl">Full Lectures</p>
              <p className="font-normal text-lg my-3 mr-3">
                You will via our classes with long time.
              </p>
            </div>
          </div>
          <div className="feauter3 flex flex-row items-center justify-center w-90 h-150">
            <Icon
              icon="mdi:support"
              color="white"
              className=" icon3 rounded-xl m-3 w-28 h-28 p-3"
            />
            <div className="feauter-content flex flex-col">
              <p className="font-semibold text-2xl">1 to 1 Support</p>
              <p className="font-normal text-lg my-3 mr-3">
                Anytime. anywhere you will got support from us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdpart flex items-center justify-center mt-10 h-400 bg-">
        <div className="heading flex flex-col">
          <div className="flex flex-row "> 
            <div className="flex flex-row ">
            <p className="border-4 border-emerald-400 w-28 h-1 mt-2 mx-10"></p>
            <p className="Font-bold text-4xl">Most Popular </p>
            <p className="Font-bold text-4xl"> Categories</p>
            </div>
            <div className="">
            <p className="text-normal font-medium ">
              Phosphorescently deploy unique intellectual capital without Not 
              enterprise-wide e-tilers. Phosphorescently disseminate other
              imperatives after bricks-and-clicks synergy.
              </p>
              </div>
          </div>
        </div>

        <div className="categories">
          <h1>hey hey</h1>
        </div>
      </div>
    </div>
  );
}
