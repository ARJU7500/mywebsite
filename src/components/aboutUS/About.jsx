import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      id="about"
      className=" bg-gray-200 flex flex-col-reverse px-4 min-h-[95vh] justify-center items-center py-5 md:pt-[30px] md:min-w-[70vh] lg:flex-row lg:justify-between lg:items-start lg:pt-20 lg:px-10 "
    >
      <div className="flex flex-col items-center justify-center md:flex md:flex-col md:justify-start lg:flex-col lg:justify-start lg:items-start lg:w-[65%]">
        <h1 className="text-orange-600 mt-6 text-[25px] font-bold md:text-5xl">
          Hii,
        </h1>
        <h1 className="text-orange-600  text-[25px] font-bold md:text-5xl">
          I'm Arjun Negi
        </h1>
        <h2 className="text-orange-600  text-[25px] font-bold pt-2 md:text-5xl">
          I'm a Web Developer
        </h2>
        <h2 className="text-orange-600 text-[25px] font-bold pt-2 md:text-5xl">
          & Programmer
        </h2>
        <p className="text-orange-600 text-[13px] md:text-[15px] pt-2 mb-2 w-[100%] md:text-xl md:pt-4 md:px-3 md:leading-8 lg:px-0 lg:py-4">
          Hello, Welcome to my profile, My name is Arjun Negi from Almora. I
          have done my entire Schooling from Uttarakhand, India. I have done my
          Diploma in "Information Technology" from Government Polytechnic
          Dwarahat, Almora. Currently I am pursuing B.Tech. in "Computer Science
          & Engineering" from Institute of Technology Gopeshwar, Chamoli where I
          am currently in my final year. Currently i am intern at "CompWallha"
          (Software Development) as a "Web developer and designer". Apart from
          studies/you can say my hobby, I like to travel alone/with friends,
          learn about new things, and I always like to do/learn something new
          and share what I have learned with friends.
        </p>
        <Link
          to="./resume/asncollege.pdf"
          target="_blank"
          className="text-orange-600 border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-2"
        >
          Check Resume
        </Link>
      </div>
      <div className="md:flex-col-reverse lg:w-[35%] lg:flex lg:justify-center lg:items-center">
        <img
          src="./personal/mypic.jpg"
          className=" rounded-full border-solid border-4 border-orange-500 w-[250px] h-[250px] md:rounded-full md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"
        />
      </div>
    </div>
  );
}

export default About;
