import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Schoollama.png"
import { NavbarLinks } from "../../data/navbar-links"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../Core/Auth/ProfileDropdown"
import SideBar from "../Core/Dashboard/Sidebar"


function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)



  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }


  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  bg-[#241a10]
         transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>


                <Link to={link?.path}>
                  <p
                    className={`${matchRoute(link?.path)
                      ? "text-[#efde44]"
                      : "text-richblack-25"
                      }`}
                  >
                    {link.title}
                  </p>
                </Link>

              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-[#2b2824] px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-[#2b2824] px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>

        {/* Mobile dropdown */}
        <button className="mr-4 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose fontSize={24} fill="#AFB2BF" /> : <AiOutlineMenu fontSize={24} fill="#AFB2BF" />}
          {/* {open ? (
            <AiOutlineClose fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )} */}

        </button>




      </div>

      {open && (
        <div className="absolute top-14 left-0 right-0 z-40 bg-[#241a10] p-4 md:hidden ">
          <button className="absolute top-4 right-8 z-50" onClick={toggleOpen}>

          </button>
          <SideBar
            NavbarLinks={NavbarLinks}
            matchRoute={matchRoute}
            loading={loading}
            subLinks={subLinks}
            toggleOpen={toggleOpen}
          />
        </div>
      )}
      {/* <SideBar open={open} toggleOpen={toggleOpen} NavbarLinks={NavbarLinks} matchRoute={matchRoute} /> */}

    </div>
  )
}

export default Navbar
