import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className=" bg-gray-200 py-10 h-[90vh]">
      <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl pt-20">
        <div className="w-2/3">
          <h1 className="text-orange-600 text-5xl font-bold ">Hii,</h1>
          <h1 className="text-orange-600 text-5xl font-bold ">
            I'm Arjun Negi
          </h1>
          <h2 className="text-orange-600 text-5xl font-bold pt-2 ">
            I'm a Web Developer
          </h2>
          <h2 className="text-orange-600 text-5xl font-bold pt-2">
            & Programmer
          </h2>
          <p className="text-orange-600 font-semibold pt-2 mb-10 w-[100%]">
            Hello, Welcome to my profile, My name is Arjun Negi from Almora. I
            have done my entire Schooling from Uttarakhand, India. I have done
            my Diploma in "Information Technology" from Government Polytechnic
            Dwarahat, Almora. Currently I am pursuing B.Tech. in "Computer
            Science & Engineering" from Institute of Technology Gopeshwar,
            Chamoli where I am currently in my final year. Currently i am intern
            at "CompWallha" (Software Development). Apart from studies/you can
            say my hobby, I like to travel alone/with friends, learn about new
            things, and I always like to do/learn something new and share what I
            have learned with friends.
          </p>
          <Link
            to="./resume/asncollege.pdf"
            target="_blank"
            className="text-orange-600 border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-40"
          >
            Check Resume
          </Link>
        </div>
        <div className="w-1/3">
          <img
            src="./personal/mypic.jpg"
            className="rounded-full border-solid border-4 border-orange-500 w-96 h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
