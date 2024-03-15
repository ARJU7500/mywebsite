import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const navItems = [
    { id: 1, text: "ABOUT_ME", link: "/" },
    { id: 2, text: "EDUCATION", link: "/education" },
    { id: 3, text: "SKILLS", link: "/skills" },
    { id: 4, text: "PROJECTS", link: "/projects" },
    { id: 5, text: "INTERNSHIP", link: "/internship" },
    { id: 6, text: "CONTACT_ME", link: "/contact" },
  ];
  return (
    <>
      <header className="shadow sticky z-50 top-0 ">
        <nav className="bg-white border-gray-800 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl logo ">
            <Link to="/" className="flex items-center">
              <img src="./logo/logo.png" className="mr-3 h-12" alt="Logo" />
            </Link>
            {/* buttons  */}
            <div className="flex items-center lg:order-2">
              <Link
                to="https://github.com/ARJU7500"
                target="_blank"
                className="text-orange-600 border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Github
              </Link>
              <Link
                to="https://www.linkedin.com/in/arjun-negi-a28ba61b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwlpSw0GhTUSz3HdPWM0m0Q%3D%3D"
                target="_blank"
                className="text-white bg-orange-600 hover:bg-white hover:text-orange-600 hover: border-solid border-2 border-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Linkedin
              </Link>
            </div>
            {/* navbar start  */}
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navItems.map((items) => (
                  <li key={items.id}>
                    <NavLink
                      to={items.link}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-black-600 " : "text-orange-600"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 hover:underline decoration-solid lg:p-0`
                      }
                    >
                      {items.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
