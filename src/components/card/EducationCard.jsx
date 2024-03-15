import React from "react";
import List from "../../json/Education.json";
import EducationCardList from "./EducationCardList";
function EducationCard() {
  return (
    <>
      {List.map((items, index) => (
        <EducationCardList
          key={items.id}
          batch={items.batch}
          collegeName={items.collegeName}
          courseName={items.courseName}
          image={items.image}
          para={items.para}
        />
      ))}
    </>
  );
}

export default EducationCard;
