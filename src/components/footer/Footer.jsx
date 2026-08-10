function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        bg-[#030719]
        text-white
        border-t
        border-purple-500/20
      "
    >
      <div className="max-w-7xl mx-auto px-5 py-10 lg:px-10">

        {/* Main Footer */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-8
            lg:flex-row
          "
        >

          {/* Logo */}
          <div className="flex items-center">

            <a
              href="#about"
              className="flex items-center"
            >
              <img
                src="./logo/logo.png"
                className="
                  h-12
                  md:h-14
                  object-contain
                "
                alt="Arjun Negi"
              />
            </a>

          </div>


          {/* Navigation */}
          <ul
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-x-6
              gap-y-4
              text-sm
              md:text-base
              font-medium
            "
          >

            <li>
              <a
                href="#about"
                className="
                  text-gray-400
                  hover:text-purple-400
                  transition-colors
                  duration-300
                "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="
                  text-gray-400
                  hover:text-purple-400
                  transition-colors
                  duration-300
                "
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="
                  text-gray-400
                  hover:text-purple-400
                  transition-colors
                  duration-300
                "
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="
                  text-gray-400
                  hover:text-purple-400
                  transition-colors
                  duration-300
                "
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#internship"
                className="
                  text-gray-400
                  hover:text-purple-400
                  transition-colors
                  duration-300
                "
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="
                  text-gray-400
                  hover:text-purple-400
                  transition-colors
                  duration-300
                "
              >
                Contact
              </a>
            </li>

          </ul>


          {/* Social Buttons */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/ARJU7500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-purple-500/30
                bg-[#080F2A]
                text-gray-300
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-600
                transition-all
                duration-300
              "
            >
              Git
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arjunegi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                text-white
                font-semibold
                hover:from-purple-700
                hover:to-pink-600
                transition-all
                duration-300
              "
            >
              in
            </a>

          </div>

        </div>


        {/* Divider */}
        <div
          className="
            my-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-purple-500/30
            to-transparent
          "
        ></div>


        {/* Copyright */}
        <div className="text-center">

          <p className="text-sm text-gray-500">

            © {currentYear}{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                to-pink-500
                bg-clip-text
                text-transparent
                font-semibold
              "
            >
              Arjun Negi
            </span>

            . All Rights Reserved.

          </p>

          <p className="mt-2 text-xs text-gray-600">
            Designed & Developed by Arjun Negi
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;