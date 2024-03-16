import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse logo"
          >
            <img src="./logo/logo.png" className="h-8" alt="Arjun Negi" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6 text-orange-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6  text-orange-600"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6  text-orange-600"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline  text-orange-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-s sm:text-center dark:text-gray-400  text-orange-600">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Arjun Negi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
