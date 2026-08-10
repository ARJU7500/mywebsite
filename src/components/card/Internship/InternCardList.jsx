import React from "react";

function InternCardList({
  image,
  name,
  work,
  date,
  title,
  description,
  skills,
}) {
  return (
    <article
      className="
        group
        relative
        rounded-2xl
        p-[1px]
        bg-gradient-to-br
        from-purple-500/60
        via-violet-500/40
        to-pink-500/60
        shadow-xl
        shadow-purple-500/10
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-purple-500/20
      "
    >

      <div
        className="
          rounded-2xl
          bg-[#080F2A]
          p-6
          md:p-7
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-5
          "
        >

          {/* Company Image */}

          <div
            className="
              flex
              items-center
              justify-center
              w-16
              h-16
              rounded-xl
              bg-[#050B24]
              border
              border-purple-500/20
              overflow-hidden
              shrink-0
            "
          >

            <img
              src={image}
              alt={name}
              className="
                w-full
                h-full
                object-contain
                p-2
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

          </div>


          {/* Company Information */}

          <div className="flex-1">

            <p
              className="
                text-purple-400
                text-xs
                uppercase
                tracking-wider
                font-semibold
                mb-1
              "
            >
              {work || "Professional Experience"}
            </p>

            <h2
              className="
                text-xl
                md:text-2xl
                font-bold
                text-white
                group-hover:text-purple-300
                transition-colors
                duration-300
              "
            >
              {title}
            </h2>

            <p className="text-gray-400 mt-1 text-sm md:text-base">
              {name}
            </p>

          </div>


          {/* Date */}

          <div
            className="
              self-start
              sm:self-center
              px-3
              py-1.5
              rounded-full
              bg-purple-500/10
              border
              border-purple-500/20
              text-purple-300
              text-xs
              md:text-sm
              font-medium
              whitespace-nowrap
            "
          >
            {date}
          </div>

        </div>


        {/* Divider */}

        <div
          className="
            h-px
            my-6
            bg-gradient-to-r
            from-purple-500/30
            via-purple-500/10
            to-transparent
          "
        ></div>


        {/* ================= DESCRIPTION ================= */}

        <div>

          <p
            className="
              text-gray-400
              text-sm
              md:text-base
              leading-7
            "
          >
            {description}
          </p>

        </div>


        {/* ================= SKILLS ================= */}

        {skills && (
          <div className="mt-6">

            <p
              className="
                text-xs
                uppercase
                tracking-wider
                text-purple-400
                font-semibold
                mb-3
              "
            >
              Technologies & Skills
            </p>


            <div className="flex flex-wrap gap-2">

              {typeof skills === "string"
                ? skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-[#050B24]
                        border
                        border-purple-500/20
                        text-gray-300
                        text-xs
                        hover:border-purple-500/60
                        hover:text-purple-300
                        transition-all
                        duration-300
                      "
                    >
                      {skill.trim()}
                    </span>
                  ))
                : Array.isArray(skills)
                ? skills.map((skill, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-[#050B24]
                        border
                        border-purple-500/20
                        text-gray-300
                        text-xs
                        hover:border-purple-500/60
                        hover:text-purple-300
                        transition-all
                        duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))
                : (
                    <span
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-[#050B24]
                        border
                        border-purple-500/20
                        text-gray-300
                        text-xs
                      "
                    >
                      {skills}
                    </span>
                  )}

            </div>

          </div>
        )}

      </div>

    </article>
  );
}

export default InternCardList;