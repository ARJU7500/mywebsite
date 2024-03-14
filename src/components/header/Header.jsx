import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="shadow sticky z-50 top-0 ">
        <nav className="bg-white border-gray-800 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl logo ">
            <Link to="/" className="flex items-center">
              <img src="./logo/logo.png" className="mr-3 h-12" alt="Logo" />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                to="#"
                className="text-orange-600 border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Github
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-600 hover:bg-white hover:text-orange-600 hover: border-solid border-2 border-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Linkedin
              </Link>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="../aboutUS/About.jsx"
                    className={(isActive) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-black-600 " : "text-orange-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 hover:underline decoration-solid lg:p-0`
                    }
                  >
                    ABOUT ME
                  </NavLink>
                </li>
                <li>
                  <NavLink>EDUCATION</NavLink>
                </li>
                <li>
                  <NavLink>SKILLS</NavLink>
                </li>
                <li>
                  <NavLink>PROJECTS</NavLink>
                </li>
                <li>
                  <NavLink>EXPERIENCE</NavLink>
                </li>
                <li>
                  <NavLink>CONTACT ME</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
