import React from "react";

function Skill() {
  const backendSkills = [
    "C#",
    "VB.NET",
    "ASP.NET",
    "ASP.NET Core",
    "ASP.NET Core MVC",
    "Web API",
    "ADO.NET",
    "Entity Framework",
  ];

  const databaseSkills = [
    "SQL Server",
    "Oracle",
    "PostgreSQL",
    "Stored Procedures",
    "SQL Queries",
    "Database Management",
  ];

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Tailwind CSS",
    "Angular",
    "Blazor"
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "Visual Studio",
    "VS Code",
    "Postman",
    "Docker",
    "Swagger"
  ];

  return (
    <section
      id="skills"
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

      {/* ================= BACKGROUND ================= */}

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
      />

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
      />

      {/* Decorative dots */}
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
          />
        ))}
      </div>


      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p
            className="
              text-purple-400
              uppercase
              tracking-[0.3em]
              text-sm
              font-semibold
              mb-4
            "
          >
            What I Work With
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
            "
          >
            Technical{" "}
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
              Skills
            </span>
          </h1>

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
          />

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
            Technologies and tools I use to build scalable,
            efficient and maintainable applications.
          </p>

        </div>


        {/* ================= SKILLS GRID ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">


          {/* ================= BACKEND ================= */}

          <div
            className="
              lg:col-span-2
              group
              relative
              rounded-2xl
              p-[1px]
              bg-gradient-to-br
              from-purple-500
              via-violet-500
              to-pink-500
              shadow-2xl
              shadow-purple-500/10
            "
          >

            <div
              className="
                h-full
                rounded-2xl
                bg-[#080F2A]
                p-7
                md:p-9
              "
            >

              {/* Card Header */}

              <div className="flex items-center justify-between mb-8">

                <div>

                  <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                    Primary Expertise
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    Backend Development
                  </h2>

                </div>

                <div
                  className="
                    hidden
                    sm:flex
                    w-14
                    h-14
                    rounded-xl
                    items-center
                    justify-center
                    bg-purple-500/10
                    border
                    border-purple-500/20
                    text-2xl
                  "
                >
                  &lt;/&gt;
                </div>

              </div>


              {/* Description */}

              <p className="text-gray-400 leading-7 mb-8">
                Experienced in developing backend applications,
                REST APIs and business logic using the .NET
                ecosystem with a strong focus on database-driven
                applications.
              </p>


              {/* Backend Skills */}

              <div className="flex flex-wrap gap-3">

                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-[#050B24]
                      border
                      border-purple-500/20
                      text-gray-300
                      text-sm
                      font-medium
                      hover:border-purple-500
                      hover:text-purple-300
                      hover:bg-purple-500/10
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>


              {/* Progress */}

              <div className="mt-10">

                <div className="flex justify-between mb-2">

                  <span className="text-sm text-gray-400">
                    Backend Development
                  </span>

                  <span className="text-sm text-purple-400">
                    90%
                  </span>

                </div>

                <div className="h-2 bg-[#050B24] rounded-full overflow-hidden">

                  <div
                    className="
                      h-full
                      w-[90%]
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                    "
                  />

                </div>

              </div>

            </div>

          </div>


          {/* ================= DATABASE ================= */}

          <SkillCard
            title="Database"
            subtitle="Data Management"
            icon="DB"
            skills={databaseSkills}
            percentage="85%"
          />


          {/* ================= FRONTEND ================= */}

          <SkillCard
            title="Frontend"
            subtitle="Web Development"
            icon="UI"
            skills={frontendSkills}
            percentage="75%"
          />


          {/* ================= TOOLS ================= */}

          <div
            className="
              lg:col-span-2
              rounded-2xl
              p-[1px]
              bg-gradient-to-r
              from-purple-500/60
              to-pink-500/60
            "
          >

            <div
              className="
                h-full
                rounded-2xl
                bg-[#080F2A]
                p-7
              "
            >

              <div className="flex items-center gap-4 mb-6">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-purple-500/10
                    border
                    border-purple-500/20
                    flex
                    items-center
                    justify-center
                    text-purple-400
                    font-bold
                  "
                >
                  DEV
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    Tools & Technologies
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Development tools I use
                  </p>

                </div>

              </div>


              <div className="flex flex-wrap gap-3">

                {toolsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-5
                      py-2.5
                      rounded-full
                      bg-[#050B24]
                      border
                      border-purple-500/20
                      text-gray-300
                      text-sm
                      hover:text-white
                      hover:border-pink-500/60
                      hover:bg-purple-500/10
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM STATS ================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mt-10
          "
        >

          <SkillStat
            number="1.6+"
            title="Years Experience"
          />

          <SkillStat
            number="10+"
            title="Technologies"
          />

          <SkillStat
            number="5+"
            title="Projects"
          />

          <SkillStat
            number="3+"
            title="Databases & Tools"
          />

        </div>

      </div>

    </section>
  );
}


/* ================================================= */
/* SKILL CARD */
/* ================================================= */

function SkillCard({
  title,
  subtitle,
  icon,
  skills,
  percentage,
}) {
  return (
    <div
      className="
        rounded-2xl
        p-[1px]
        bg-gradient-to-br
        from-purple-500/60
        to-pink-500/60
      "
    >

      <div
        className="
          h-full
          rounded-2xl
          bg-[#080F2A]
          p-7
        "
      >

        <div className="flex items-center gap-4 mb-6">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-purple-500/10
              border
              border-purple-500/20
              flex
              items-center
              justify-center
              text-purple-400
              font-bold
              text-sm
            "
          >
            {icon}
          </div>

          <div>

            <h2 className="text-xl font-bold">
              {title}
            </h2>

            <p className="text-gray-500 text-sm">
              {subtitle}
            </p>

          </div>

        </div>


        <div className="flex flex-wrap gap-2">

          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-3
                py-2
                rounded-lg
                bg-[#050B24]
                border
                border-purple-500/10
                text-gray-400
                text-xs
                hover:text-purple-300
                hover:border-purple-500/50
                transition-all
              "
            >
              {skill}
            </span>
          ))}

        </div>


        <div className="mt-7">

          <div className="flex justify-between mb-2">

            <span className="text-xs text-gray-500">
              Proficiency
            </span>

            <span className="text-xs text-purple-400">
              {percentage}
            </span>

          </div>

          <div className="h-1.5 bg-[#050B24] rounded-full">

            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-purple-500
                to-pink-500
              "
              style={{ width: percentage }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}


/* ================================================= */
/* STAT */
/* ================================================= */

function SkillStat({ number, title }) {
  return (
    <div
      className="
        text-center
        p-5
        rounded-xl
        bg-[#080F2A]
        border
        border-purple-500/10
        hover:border-purple-500/40
        transition-all
      "
    >

      <h3
        className="
          text-2xl
          md:text-3xl
          font-bold
          bg-gradient-to-r
          from-purple-400
          to-pink-500
          bg-clip-text
          text-transparent
        "
      >
        {number}
      </h3>

      <p className="text-xs md:text-sm text-gray-500 mt-1">
        {title}
      </p>

    </div>
  );
}

export default Skill;