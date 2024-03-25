import React from "react";
import Intern from "../../../json/Internship.json";
import InternCardList from "./InternCardList";

function InternCard() {
  return (
    <>
      {Intern.map((items, index) => (
        <div className="border-solid border-2 border-orange-600 justify-between items-center w-96 shadow-lg rounded-lg md:w-[600px]">
          <InternCardList
            key={items.Id}
            image={items.image}
            name={items.name}
            work={items.work}
            date={items.date}
            title={items.title}
            description={items.description}
            skills={items.skills}
          />
        </div>
      ))}
    </>
  );
}

export default InternCard;
