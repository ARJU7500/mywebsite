import React from "react";
import ProjectCard from "../card/project/ProjectCard";

function Project() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[#050B24]
        text-white
        px-5
        py-20
        lg:px-16
        xl:px-24
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          -left-32
          top-20
          w-72
          h-72
          rounded-full
          bg-purple-700/10
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          -right-32
          bottom-0
          w-96
          h-96
          rounded-full
          bg-pink-600/10
          blur-3xl
        "
      ></div>

      {/* Decorative Dots */}
      <div className="absolute right-10 top-20 hidden lg:grid grid-cols-4 gap-4 opacity-40">
        {[...Array(16)].map((_, index) => (
          <span
            key={index}
            className="w-1 h-1 rounded-full bg-purple-500"
          ></span>
        ))}
      </div>


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p
            className="
              text-purple-400
              font-semibold
              uppercase
              tracking-widest
              text-sm
              mb-3
            "
          >
            My Work
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Projects
          </h1>

          {/* Gradient Line */}
          <div
            className="
              w-20
              h-1
              mx-auto
              mt-5
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-pink-500
            "
          ></div>

          <p
            className="
              max-w-3xl
              mx-auto
              mt-6
              text-gray-300
              text-base
              md:text-lg
              leading-7
            "
          >
            I have worked on several projects during my professional
            journey and personal learning. Here are some of my
            featured projects.
          </p>

        </div>


        {/* Project Cards */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            items-stretch
            gap-8
            mx-auto
          "
        >
          <ProjectCard />
        </div>

      </div>

    </section>
  );
}

export default Project;