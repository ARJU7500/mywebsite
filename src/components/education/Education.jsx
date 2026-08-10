import React from "react";

function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology, Computer Science & Engineering",
      institute:
        "Institute of Technology Gopeshwar, Chamoli",
      duration: "Oct 2021 - June 2025",
      description:
        "I completed my Bachelor's degree in Computer Science & Engineering from Veer Madho Singh Bhandari Campus Institute of Technology Gopeshwar, Chamoli, Uttarakhand, India.",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Diploma, Information Technology",
      institute:
        "Government Polytechnic Dwarahat, Almora",
      duration: "Aug 2018 - Oct 2021",
      description:
        "I completed my Diploma in Information Technology from Government Polytechnic Dwarahat, Almora, Uttarakhand, India.",
      icon: "💻",
    },
    {
      id: 3,
      degree: "Intermediate, Science Stream",
      institute:
        "Government Inter College Jalali, Almora",
      duration: "April 2017 - May 2018",
      description:
        "I completed my Intermediate in the Science stream from Government Inter College Jalali, Almora, Uttarakhand, India.",
      icon: "📚",
    },
    {
      id: 4,
      degree: "High School, General",
      institute:
        "Government Inter College Jalali, Almora",
      duration: "April 2015 - May 2016",
      description:
        "I completed my High School from Government Inter College Jalali, Almora, Uttarakhand, India.",
      icon: "🏫",
    },
  ];

  return (
    <section
      id="education"
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

      {/* Decorative dots */}
      <div className="absolute right-10 top-20 hidden lg:grid grid-cols-4 gap-4 opacity-40">
        {[...Array(16)].map((_, index) => (
          <span
            key={index}
            className="w-1 h-1 rounded-full bg-purple-500"
          ></span>
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Heading */}
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
            My Journey
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Education
          </h2>

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
              max-w-2xl
              mx-auto
              mt-6
              text-gray-300
              text-base
              md:text-lg
              leading-7
            "
          >
            My education has been a journey of self-discovery and growth.
            My educational details are as follows.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-purple-500
              via-pink-500
              to-purple-500
              md:-translate-x-1/2
            "
          ></div>


          {/* Education Items */}
          <div className="space-y-12">

            {educationData.map((education, index) => (
              <div
                key={education.id}
                className={`
                  relative
                  flex
                  items-start
                  md:items-center
                  ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }
                `}
              >

                {/* Timeline Icon */}
                <div
                  className="
                    absolute
                    left-5
                    md:left-1/2
                    -translate-x-1/2
                    z-20
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-[#080F2A]
                    border-2
                    border-purple-500
                    shadow-lg
                    shadow-purple-500/30
                    text-lg
                  "
                >
                  {education.icon}
                </div>


                {/* Card */}
                <div
                  className={`
                    w-full
                    md:w-[46%]
                    ml-14
                    md:ml-0
                    ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }
                  `}
                >

                  <div
                    className="
                      group
                      relative
                      p-6
                      rounded-2xl
                      bg-[#080F2A]/90
                      border
                      border-purple-500/20
                      hover:border-purple-500/60
                      shadow-lg
                      shadow-black/20
                      hover:shadow-purple-500/10
                      transition-all
                      duration-300
                    "
                  >

                    {/* Top Gradient Line */}
                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        w-full
                        h-[3px]
                        rounded-t-2xl
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                      "
                    ></div>


                    {/* Duration */}
                    <span
                      className="
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        text-purple-300
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        mb-4
                      "
                    >
                      {education.duration}
                    </span>


                    {/* Degree */}
                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-white
                        mb-2
                      "
                    >
                      {education.degree}
                    </h3>


                    {/* Institute */}
                    <h4
                      className="
                        text-base
                        md:text-lg
                        font-semibold
                        bg-gradient-to-r
                        from-purple-400
                        to-pink-400
                        bg-clip-text
                        text-transparent
                        mb-4
                      "
                    >
                      {education.institute}
                    </h4>


                    {/* Description */}
                    <p
                      className="
                        text-gray-400
                        text-sm
                        md:text-base
                        leading-7
                      "
                    >
                      {education.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;