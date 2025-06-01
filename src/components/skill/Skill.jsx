import React from "react";
import Card from "../card/Card";
import ProgCard from "../card/Progcard";
import OtherCard from "../card/Othercard";
function Skill() {
  return (
    <section className="bg-gray-300 px-4 py-5 lg:px-10" id="skills">
      <h1 className="text-center text-orange-600 text-2xl font-bold md:text-4xl">
        My Skills
      </h1>
      <p className="text-center mt-2 text-orange-600 text-md md:text-2xl">
      Here are some of the skills I have been working with over the past 9 months, including some that I use on a daily basis.</p>
      <div className="flex flex-col gap-5 justify-between items-center mx-auto my-10 md:flex md:flex-col md:gap-5 md:px-2 lg:flex-row lg:justify-between">
        <Card title="Back-End Technology" />
        <ProgCard title="DataBase Technology" />
        <OtherCard title="Other Technology " />
      </div>
    </section>
  );
}

export default Skill;
