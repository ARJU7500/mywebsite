import React from "react";
import Card from "../card/Card";
import ProgCard from "../card/Progcard";
import OtherCard from "../card/Othercard";
function Skill() {
  return (
    <section className="bg-gray-300 p-10">
      <h1 className="text-center text-orange-600 text-5xl font-bold ">
        My Skills
      </h1>
      <p className="text-center mt-2 text-orange-600 text-mid font-semibold ">
        Here are some of my skills on which I have been working on for the past
        3 years.
      </p>
      <div className="flex gap-3 justify-between items-center mx-auto max-w-screen-xl my-10">
        <Card title="Web Technology" />
        <ProgCard title="Programming Language" />
        <OtherCard title="Other " />
      </div>
    </section>
  );
}

export default Skill;
