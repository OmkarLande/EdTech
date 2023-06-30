import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import Logo from "../../assests/Logo/Frame 61 (1).png"
import { NavbarLinks } from "../../data/navbarlinks.js"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropDown from "../core/Auth/ProfileDropDown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [  setSubLinks ] = useState([])
  const [loading, setLoading] = useState(false)

  const subLinks = [
    {
        title: "python",
        link:"/catalog/python"
    },
    {
          title: "web dev",
        link:"/catalog/web-development"
    },
];


useEffect(() => {
  ;(async () => {
    setLoading(true)
    try {
      
      const res = await apiConnector("GET", categories.CATEGORIES_API)
      setSubLinks(res.data.data)
      
    } catch (error) {
      console.log("Could not fetch Categories.", error)
    }
    setLoading(false)
  })()
}, [])
// console.log("sub links", subLinks)

  

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center ${
        location.pathname !== "/" ? "bg-bg" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 gap-8 max-w-maxContent items-center  justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" width={162} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-text">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-green font-semibold"
                          : "text-text"
                      }` }
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-shadow p-4 text-text opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-shadow"></div>
                        
                        
                         {loading ? (
                          <p className="text-center">Loading...</p>
                        ) :  subLinks.length ? ( 
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-shadow"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))} 
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )} 


                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-green font-semibold"
                          : "text-text"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
         <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-text" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-bg text-center text-xs font-bold text-green">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/Login">
              <button className="w-[78px] h-10 px-3 py-2 bg-bg rounded-lg justify-center items-center gap-2 inline-flex text-center text-text text-[16px] border-1 border-text leading-normal">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/Studentsignin">
              <button className="w-[78px] h-10 px-3 py-2 bg-green rounded-lg justify-center items-center gap-2 inline-flex text-center text-bg text-[16px] font-bold leading-6 shrink-0 whitespace-nowrap	">
              Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#000000" />
        </button> 
      </div>
    </div>
  )
}

export default Navbar