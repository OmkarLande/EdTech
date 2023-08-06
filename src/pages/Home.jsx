import React from "react";
import Demoimg from "../assests/images/demoimg.png";
import crs1 from "../assests/images/crs1.jpg";
import crs2 from "../assests/images/crs2.jpg";
import crs3 from "../assests/images/crs3.jpg";
import sid from "../assests/images/IMG_20230211_231315.jpg";
import og from "../assests/images/OG.png";
import harshal from "../assests/images/Harshal.png";
import shera from "../assests/images/model 2.jpg";
import bhos from "../assests/images/BG.png";
import {
  Card,
  CardBody,
  CardHeader,
  Rating,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import "../components/styles/Home.css";
import { hover } from "@testing-library/user-event/dist/hover";

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
            <Icon
              icon="ri:computer-line"
              color="white"
              className=" icon1 rounded-xl m-3 w-28 h-28 p-3"
            />
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
      <div className="thirdpart flex items-center justify-center mt-10 h-788 bg-gray p-10">
        <div className="heading ">
          <div className="flex flex-row ">
            <div className="flex flex-row w-700" style={{ width: "800px " }}>
              <p className="border-4 border-emerald-400 w-28 h-1 mt-2 mx-10"></p>
              <p className="Font-bold text-4xl">Most Popular </p>
              <p className="Font-bold text-4xl text-green"> Categories</p>
            </div>
            <div className="contmost">
              <p className="text-lg not-italic font-normal leading-6 ml-50">
                Phosphorescently deploy unique intellectual capital without Not
                enterprise-wide e-tilers. Phosphorescently disseminate other
                imperatives after bricks-and-clicks synergy.
              </p>
            </div>
          </div>
          <div className="categories flex flex-row mt-14">
            <div className="flex flex-col">
              <div className="cards1">
                <Card className=" mt-6 w-96 m-3 max-h-60">
                  <CardBody>
                    <div className="flex flex-row items-center ">
                      <Icon
                        Icon
                        icon="icon-park-outline:code-computer"
                        color="#33beaf"
                        width="45"
                        height="45"
                        className="icon4 rounded-lg"
                      />

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 ml-4"
                      >
                        Web Development
                      </Typography>
                    </div>
                    <Typography>
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 w-40 border-0"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
                <Card className="mt-6 w-96 m-3 max-h-60">
                  <CardBody>
                    <div className="flex flex-row items-center ">
                      <Icon
                        Icon
                        icon="mingcute:pen-fill"
                        color="#33beaf"
                        width="45"
                        height="45"
                        className="icon4 rounded-lg"
                      />

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 ml-4"
                      >
                        Graphic Design
                      </Typography>
                    </div>
                    <Typography>
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 w-40 border-0"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
                <Card className="mt-6 w-96 m-3 max-h-60">
                  <CardBody>
                    <div className="flex flex-row items-center ">
                      <Icon
                        Icon
                        icon="fluent-emoji-high-contrast:national-park"
                        color="#33beaf"
                        width="45"
                        height="45"
                        className="icon4 rounded-lg"
                      />

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 ml-4"
                      >
                        Web Development
                      </Typography>
                    </div>
                    <Typography>
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 w-40 border-0"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
              <div className="cards2 flex flex-row">
                <Card className="mt-6 w-96 m-3 max-h-60">
                  <CardBody>
                    <div className="flex flex-row items-center ">
                      <Icon
                        Icon
                        icon="mdi:camera"
                        color="#33beaf"
                        width="45"
                        height="45"
                        className="icon4 rounded-lg"
                      />

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 ml-4"
                      >
                        Web Development
                      </Typography>
                    </div>
                    <Typography>
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 w-40 border-0"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
                <Card className="mt-6 w-96 m-3 max-h-60">
                  <CardBody>
                    <div className="flex flex-row items-center ">
                      <Icon
                        Icon
                        icon="solar:health-bold"
                        color="#33beaf"
                        width="45"
                        height="45"
                        className="icon4 rounded-lg"
                      />

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 ml-4"
                      >
                        Web Development
                      </Typography>
                    </div>
                    <Typography>
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 w-40 border-0"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
                <Card className="mt-6 w-96 m-3 max-h-60">
                  <CardBody>
                    <div className="flex flex-row items-center ">
                      <Icon
                        Icon
                        icon="carbon:user-filled"
                        color="#33beaf"
                        width="45"
                        height="45"
                        className="icon4 rounded-lg"
                      />

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 ml-4"
                      >
                        Web Development
                      </Typography>
                    </div>
                    <Typography>
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 w-40 border-0"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourthpart flex flex-col items-center justify-center">
        <div className="fourthone mt-20 flex flex-col">
          <div>
            <h2 className="text-center text-4xl font-semibold">
              Our Most Popular Cources
            </h2>
            <p className="text-center text-lg font-normal mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-row mt-10">
            <button
              type="button"
              className=" bg-green hover:bg-bg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-64 mx-5 h-fit"
            >
              <div className=" flex flex-row justify-between space-x-10 items-center">
                <Icon
                  Icon
                  icon="ph:book-fill"
                  width="45"
                  height="45"
                  className="rounded-lg"
                />
                <p className="text-2xl font-semibold"> All Courses</p>
              </div>
            </button>
            <button
              type="button"
              className=" bg-green hover:bg-bg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-64 mx-5 h-fit"
            >
              <div className="flex flex-row justify-between space-x-10 items-center">
                <Icon
                  Icon
                  icon="fluent:design-ideas-16-filled"
                  width="45"
                  height="45"
                  className="rounded-lg"
                />
                <p className="text-2xl font-semibold"> Design</p>
              </div>
            </button>
            <button
              type="button"
              className=" bg-green hover:bg-bg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-64 mx-5 h-fit"
            >
              <div className="flex flex-row justify-between space-x-10 items-center">
                <Icon
                  Icon
                  icon="fluent:window-dev-edit-16-filled"
                  width="45"
                  height="45"
                  className="rounded-lg "
                />
                <p className="text-2xl font-semibold"> Development</p>
              </div>
            </button>
            <button
              type="button"
              className=" bg-green hover:bg-bg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-64 mx-5 h-fit"
            >
              <div className="flex flex-row justify-between space-x-10 items-center">
                <Icon
                  Icon
                  icon="fluent-emoji-high-contrast:national-park"
                  width="45"
                  height="45"
                  className="rounded-lg"
                />
                <p className="text-2xl font-semibold"> Markting</p>
              </div>
            </button>
          </div>
          <div className=" flex flex-row my-40 justify-between">
            <Card className="course max-w-[24rem] overflow-hidden flex flex-col justify-center items-center">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={crs1} />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-5">
                  The Complete After Effect From Zero to Hero
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Instructor Name
                </Typography>
              </CardBody>
              <Rating className="" />
              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left">
                  Rs. 1,700
                </Typography>
              </CardFooter>
            </Card>
            <Card className="course max-w-[24rem] overflow-hidden flex flex-col justify-center items-center">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={crs2} className="" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="">
                  The Complete Bootcamp From Zero to Hero in JavaScript
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Instructor Name
                </Typography>
              </CardBody>
              <Rating className="" />
              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left">
                  Rs. 1,700
                </Typography>
              </CardFooter>
            </Card>
            <Card className="course max-w-[24rem] overflow-hidden flex flex-col justify-center items-center">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={crs3} />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  The Complete Video editing From Zero to Hero in Premier pro
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  Instructor Name
                </Typography>
              </CardBody>
              <Rating className="" />
              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left">
                  Rs. 1,700
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="fourthtwo flex flex-col">
          <div>
            <h2 className="text-center text-4xl font-semibold">
              Meet Our Highly Skilled Instructors
            </h2>
            <p className="text-center text-lg font-normal mt-3">
              Build skills with courses, certificates, and get online knowledge
              from our world-class platform. ipsum is simply dummy text of the
              printing and typesetting.
            </p>
          </div>
          <div className="mt-40 flex flex-row justify-between">
            <Card
              className="mentor max-w-[24rem] overflow-hidden flex flex-col justify-center items-center"
              style={{ width: "260px" }}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={og} style={{ height: "290px", width: "360px" }} />
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left mb-">
                  Omkar Lande
                </Typography>
              </CardFooter>
              <p className="font-medium text-lg">Graphic Design Mentor</p>
            </Card>
            <Card
              className="mentor max-w-[24rem] overflow-hidden flex flex-col justify-center items-center"
              style={{ width: "260px" }}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={sid} style={{ height: "290px", width: "360px" }} />
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left">
                  Siddhesh Wayal
                </Typography>
              </CardFooter>
              <p className="font-medium text-lg"> Fullstack Web Developer</p>
            </Card>
            <Card
              className="mentor  max-w-[24rem] overflow-hidden flex flex-col justify-center items-center"
              style={{ width: "260px" }}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={harshal}
                  style={{ height: "290px", width: "360px" }}
                />
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left">
                  Hrashal Pawar
                </Typography>
              </CardFooter>
              <p className="font-medium text-lg"> Muscian</p>
            </Card>
            <Card
              className="mentor  max-w-[24rem] overflow-hidden flex flex-col justify-center items-center"
              style={{ width: "260px" }}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={shera} style={{ height: "290px", width: "360px" }} />
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <Typography className="font-semibold text-xl text-green text-left">
                  Sharayu Nagare
                </Typography>
              </CardFooter>
              <p className="font-medium text-lg">Painter</p>
            </Card>
          </div>
          <div className="flex flex-row justify-center items-center mt-20">
            <button className="w-max text-2xl font-semibold p-8 text-bg">
              {" "}
              See More
            </button>
          </div>
        </div>
        <div className="fourththree flex flex-row mt-40 ">
          <div className="w-600 h-600">
            <img src={bhos} />
          </div>
          <div className="flex flex-col ml-10  space-x-20">
            <h1 className="text-5xl font-bold ml-20">
              Want to share your knowledge? Join us a Mentor
            </h1>
            <p className="text-lg font-medium mt-14">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
            <button className="mt-14 w-max text-2xl font-semibold p-8 text-bg">
              Career Information
            </button>
          </div>
        </div>
        <div className="fourthfour flex flex-col mt-40 justify-start ">
          <div className="flex flex-col justify-start">
            <p className="Font-bold text-4xl ">People says</p>
            <div className="flex  flex-row">
              <p className="Font-bold text-4xl text-left">SkillHive</p>
              <p className="Font-bold text-4xl text-green text-left">
                {" "}
                About Courses
              </p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}