import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, text: "ABOUT ME", link: "#about" },
    { id: 2, text: "EDUCATION", link: "#education" },
    { id: 3, text: "SKILLS", link: "#skills" },
    { id: 4, text: "PROJECTS", link: "#projects" },
    { id: 5, text: "WORK EXPERIENCE", link: "#internship" },
    { id: 6, text: "CONTACT ME", link: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050B24]/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
      
      <nav className="flex items-center justify-between h-[75px] px-5 lg:px-12">

        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="./logo/logo.png"
              alt="Arjun Logo"
              className="h-10 md:h-12"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="
                  relative
                  py-2
                  font-semibold
                  text-gray-200
                  hover:text-[#D946EF]
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:w-0
                  after:bg-gradient-to-r
                  after:from-[#7C3AED]
                  after:to-[#EC4899]
                  hover:after:w-full
                  after:transition-all
                  after:duration-300
                "
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Buttons */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="https://github.com/ARJU7500"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2.5
              rounded-lg
              border border-purple-400
              text-white
              font-medium
              hover:bg-purple-600
              transition-all
              duration-300
            "
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/arjunegi/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2.5
              rounded-lg
              text-white
              font-medium
              bg-gradient-to-r
              from-[#7C3AED]
              to-[#EC4899]
              hover:from-[#6D28D9]
              hover:to-[#DB2777]
              transition-all
              duration-300
              shadow-lg
              shadow-purple-500/20
            "
          >
            Linkedin
          </a>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-purple-400 focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#080F2A] border-t border-purple-500/20">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className="
                block
                py-4
                text-center
                font-semibold
                text-gray-200
                border-b
                border-purple-500/10
                hover:text-purple-400
                hover:bg-purple-500/10
                transition-all
              "
            >
              {item.text}
            </a>
          ))}

          {/* Mobile Social Buttons */}
          <div className="flex justify-center gap-3 py-5">

            <a
              href="https://github.com/ARJU7500"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2
                border
                border-purple-400
                rounded-lg
                text-white
              "
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/arjunegi/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2
                rounded-lg
                text-white
                bg-gradient-to-r
                from-purple-600
                to-pink-500
              "
            >
              Linkedin
            </a>

          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;