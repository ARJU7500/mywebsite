import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-75px)]
        bg-[#050B24]
        text-white
        flex
        items-center
        px-5
        py-16
        lg:px-16
        xl:px-24
      "
    >

      {/* Background Circle - Left */}
      <div
        className="
          absolute
          -left-20
          top-20
          w-56
          h-56
          rounded-full
          bg-purple-700/20
          blur-sm
        "
      ></div>

      {/* Background Circle - Right */}
      <div
        className="
          absolute
          -right-32
          bottom-[-100px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-purple-600/10
          blur-2xl
        "
      ></div>

      {/* Decorative dots */}
      <div className="absolute right-10 top-20 hidden lg:grid grid-cols-4 gap-4 opacity-50">
        {[...Array(16)].map((_, index) => (
          <span
            key={index}
            className="w-1 h-1 rounded-full bg-purple-500"
          ></span>
        ))}
      </div>

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1400px]
          mx-auto
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-12
        "
      >

        {/* ================= LEFT CONTENT ================= */}

        <div
          className="
            w-full
            lg:w-[55%]
            flex
            flex-col
            items-center
            lg:items-start
          "
        >

          {/* Hii */}
          <h1
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-purple-400
              mb-3
            "
          >
            Hii,
          </h1>

          {/* Name */}
          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              text-center
              lg:text-left
            "
          >
            I'm Arjun Negi
          </h1>

          {/* Designation */}
          <h2
            className="
              mt-2
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              bg-gradient-to-r
              from-purple-400
              to-pink-500
              bg-clip-text
              text-transparent
              text-center
              lg:text-left
            "
          >
            Software Engineer
          </h2>

          {/* Intro */}
          <p
            className="
              mt-7
              text-base
              md:text-lg
              lg:text-xl
              text-gray-300
              leading-7
              md:leading-8
              text-center
              lg:text-left
              max-w-[750px]
            "
          >
            Hello, Welcome to my profile!
          </p>

          {/* Description */}
          <p
            className="
              mt-2
              text-sm
              md:text-base
              lg:text-lg
              text-gray-300
              leading-7
              md:leading-8
              text-center
              lg:text-left
              max-w-[750px]
            "
          >
            I'm from Uttarakhand and have completed all my education there.
            Currently, I live in New Delhi. I've been working as a Software
            Engineer for the past 1.5+ years. My specialization is in backend
            development and database management.

            <br />

            Apart from my professional work, I enjoy traveling—either solo or
            with friends. I love learning new things and always try to explore
            something different. I also enjoy sharing my knowledge and
            experiences with others.
          </p>

          {/* Resume Button */}
          <div className="mt-7">

            <a
              href="https://drive.google.com/drive/folders/17y2Pa-Tb5ce8leIYUVOt1RPvppjTt0lU?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-lg
                font-semibold
                text-white
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                hover:from-purple-700
                hover:to-pink-600
                transition-all
                duration-300
                shadow-lg
                shadow-purple-500/20
                hover:shadow-purple-500/40
              "
            >
              📄 Check Resume
            </a>

          </div>

        </div>


        {/* ================= RIGHT IMAGE ================= */}

        <div
          className="
            relative
            w-full
            lg:w-[40%]
            flex
            justify-center
            items-center
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              w-[280px]
              h-[280px]
              md:w-[380px]
              md:h-[380px]
              lg:w-[470px]
              lg:h-[470px]
              rounded-full
              bg-purple-600/20
              blur-3xl
            "
          ></div>

          {/* Image Gradient Border */}
          <div
            className="
              relative
              p-[5px]
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-violet-500
              to-pink-500
              shadow-2xl
              shadow-purple-500/30
            "
          >

            <img
              src="./personal/mypic.jpg"
              alt="Arjun Negi"
              className="
                relative
                rounded-full
                object-cover
                w-[250px]
                h-[250px]
                md:w-[350px]
                md:h-[350px]
                lg:w-[430px]
                lg:h-[430px]
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;