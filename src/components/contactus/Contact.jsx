import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="px-2 lg:px-10" id="contact">
      <h1 className="text-center mt-10 text-orange-600 text-5xl font-bold md:text-6xl ">
        Contact
      </h1>
      <p className=" text-center mt-2 text-orange-600 text-lg md:text-2xl">
        Feel free to reach out to me for any opportunities!
      </p>
      <div className=" flex flex-col-reverse justify-between px-4 gap-4 mt-10 lg:flex lg:flex-row lg:justify-between">
        <div className="flex p-2 shadow-md md:p-2 lg:w-[50%]">
          <div className=" w-[100%] md:w-[100%]">
            <form>
              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-600 md:text-xl"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[orange] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="mb-3 block text-base font-medium text-orange-600 md:text-xl"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  for="subject"
                  className="mb-3 block text-base font-medium text-orange-600 md:text-xl"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  for="message"
                  className="mb-3 block text-base font-medium text-orange-600 md:text-xl"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
                ></textarea>
              </div>
              <div className=" flex justify-center items-center md:flex md:justify-center md:items-center">
                <button className="hover:shadow-form rounded-md bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none md:font-bold md:text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-full md:flex md:justify-center md:text-center lg:w-[50%]">
          <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:flex md:flex-col  md:justify-center md:items-center">
            <img src="./contact/git.png" className="md:w-[80%] lg:w-[80%]" />
            <div className="p-5">
              <div className="flex flex-col justify-center items-center ">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600 dark:text-white md:text-5xl">
                  Get In Touch:
                </h5>
                <p className="mb-3  text-orange-600 md:text-2xl ">
                  Fill the form to start a Conversation
                </p>
                <p className="mb-3 text-orange-600  md:text-2xl">
                  Chamoli, Uttarakhand, India
                </p>
                <p className="mb-3  text-orange-600 md:text-2xl">
                  Email: an096237@gmail.com
                </p>
                <p className="mb-3  text-orange-600 md:text-2xl">
                  mobile Number : +917668213002
                </p>
                <p className="mb-3 text-orange-600 md:text-2xl">
                  Whatsapp Number : +917668213002
                </p>
              </div>
              <div className="flex justify-between md:flex md:justify-between md:mt-10 lg:flex lg:justify-between">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/arjun-negi-a28ba61b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwlpSw0GhTUSz3HdPWM0m0Q%3D%3D"
                >
                  <img src="./contact/ld.png" />
                </Link>
                <Link to="https://github.com/ARJU7500" target="_blank">
                  <img src="./contact/gitghub.png" />
                </Link>
                <Link to="">
                  <img src="./contact/tw.png" />
                </Link>
                <Link to="">
                  <img src="./contact/instra.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
