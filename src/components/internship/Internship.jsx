import React from "react";
import InternCard from "../card/Internship/InternCard";

function Internship() {
  return (
    <section
      id="internship"
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
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          -left-40
          top-20
          w-96
          h-96
          rounded-full
          bg-purple-600/10
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          -right-40
          bottom-0
          w-96
          h-96
          rounded-full
          bg-pink-600/10
          blur-3xl
        "
      ></div>

      {/* Decorative Dots */}
      <div
        className="
          absolute
          right-10
          top-20
          hidden
          lg:grid
          grid-cols-5
          gap-4
          opacity-30
        "
      >
        {[...Array(25)].map((_, index) => (
          <span
            key={index}
            className="w-1 h-1 rounded-full bg-purple-400"
          ></span>
        ))}
      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p
            className="
              text-purple-400
              font-semibold
              uppercase
              tracking-[0.3em]
              text-sm
              mb-4
            "
          >
            My Career
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
            "
          >
            Work{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-violet-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Experience
            </span>
          </h1>

          {/* Gradient Line */}

          <div
            className="
              w-24
              h-1
              mx-auto
              mt-6
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-pink-500
            "
          ></div>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-gray-400
              text-base
              md:text-lg
              leading-7
            "
          >
            My professional experience, responsibilities, and
            technologies I have worked with throughout my career.
          </p>

        </div>


        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Timeline Line */}

          <div
            className="
              absolute
              left-5
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-purple-500
              via-violet-500
              to-pink-500
              md:left-1/2
              md:-translate-x-1/2
            "
          ></div>

          <InternCard />

        </div>

      </div>

    </section>
  );
}

export default Internship;