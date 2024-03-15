import React from "react";
import EducationCard from "../card/EducationCard";

function Education() {
  return (
    <section>
      <h1 className="text-center mt-10 text-orange-600 text-5xl font-bold ">
        Education
      </h1>
      <p className=" font-semibold text-center mt-2 text-orange-600 text-lg ">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-10">
        <EducationCard />
      </div>
    </section>
  );
}

export default Education;
