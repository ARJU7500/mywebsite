import React from "react";
import Intern from "../../../json/Internship.json";
import InternCardList from "./InternCardList";

function InternCard() {
  return (
    <div className="space-y-12">

      {Intern.map((items, index) => (
        <div
          key={items.Id || index}
          className="
            relative
            md:flex
            md:items-center
            md:justify-between
          "
        >

          {/* Timeline Dot */}

          <div
            className="
              absolute
              left-5
              -translate-x-1/2
              top-8
              z-20
              w-4
              h-4
              rounded-full
              bg-purple-500
              border-4
              border-[#050B24]
              shadow-lg
              shadow-purple-500/50
              md:left-1/2
              md:-translate-x-1/2
            "
          ></div>


          {/* Experience Card */}

          <div
            className={`
              ml-12
              w-[calc(100%-3rem)]
              md:ml-0
              md:w-[46%]
              ${
                index % 2 === 0
                  ? "md:mr-auto"
                  : "md:ml-auto"
              }
            `}
          >

            <InternCardList
              image={items.image}
              name={items.name}
              work={items.work}
              date={items.date}
              title={items.title}
              description={items.description}
              skills={items.skills}
            />

          </div>

        </div>
      ))}

    </div>
  );
}

export default InternCard;