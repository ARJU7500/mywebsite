import React from "react";

function ProjectCardList({
  image,
  name,
  link,
  year,
  tech,
  about,
}) {
  return (
    <article
      className="
        group
        h-full
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
          h-full
          flex
          flex-col
          overflow-hidden
          rounded-2xl
          bg-[#080F2A]
        "
      >

        {/* ================= IMAGE ================= */}

        <div
          className="
            relative
            overflow-hidden
            h-[220px]
            bg-[#050B24]
          "
        >

          <img
            src={image}
            alt={name}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Image Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#080F2A]
              via-transparent
              to-transparent
              opacity-80
            "
          ></div>

          {/* Year */}
          {year && (
            <span
              className="
                absolute
                top-4
                right-4
                px-3
                py-1
                rounded-full
                bg-[#050B24]/80
                backdrop-blur-md
                border
                border-purple-500/30
                text-purple-300
                text-xs
                font-semibold
              "
            >
              {year}
            </span>
          )}

        </div>


        {/* ================= CONTENT ================= */}

        <div
          className="
            flex
            flex-col
            flex-1
            p-6
          "
        >

          {/* Project Name */}

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
            {name}
          </h2>


          {/* Description */}

          {about && (
            <p
              className="
                mt-3
                text-gray-400
                text-sm
                leading-6
                line-clamp-3
              "
            >
              {about}
            </p>
          )}


          {/* Technology */}

          <div className="mt-5">

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
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">

              {tech &&
                tech.split(",").map((technology, index) => (
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
                    {technology.trim()}
                  </span>
                ))}

            </div>

          </div>


          {/* Bottom */}

          <div
            className="
              mt-auto
              pt-6
              flex
              items-center
              justify-between
              border-t
              border-purple-500/10
            "
          >

            {/* Project Number */}

            <span
              className="
                text-sm
                text-gray-600
                font-mono
              "
            >
              PROJECT
            </span>


            {/* Code Link */}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  text-white
                  text-sm
                  font-semibold
                  hover:from-purple-700
                  hover:to-pink-600
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-500/10
                "
              >
                View Code

                <span className="text-base">
                  →
                </span>
              </a>
            )}

          </div>

        </div>

      </div>
    </article>
  );
}

export default ProjectCardList;