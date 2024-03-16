import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section>
      <h1
        className="text-center mt-10 text-orange-600 text-5xl font-bold "
        id="education"
      >
        Contact
      </h1>
      <p className=" font-semibold text-center mt-2 text-orange-600 text-lg ">
        Feel free to reach out to me for any opportunities!
      </p>
      <div className="flex justify-between mx-auto max-w-screen-xl gap-4 mt-10">
        <div className="flex items-center justify-center p-2 w-[70%] shadow-md">
          <div class="mx-auto w-full max-w-[80%]">
            <form>
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-orange-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[orange] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-orange-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-base font-medium text-orange-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-orange-600"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button class="hover:shadow-form rounded-md bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="max-w-md p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="./contact/git.png" />
            <div className="p-5">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600 dark:text-white">
                Get In touch:
              </h5>
              <p className="mb-3 font-bold text-orange-600">
                Fill the form to start a Conversation
              </p>
              <p className="mb-3 text-orange-600 font-bold ">
                Chamoli, Uttarakhand, India
              </p>
              <p className="mb-3 font-bold text-orange-600">
                Email: an096237@gmail.com
              </p>
              <p className="mb-3 font-bold text-orange-600 ">
                mobile Number : +917668213002
              </p>
              <p className="mb-3 font-bold text-orange-600 ">
                Whatsapp Number : +917668213002
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
