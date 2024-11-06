import React from "react";
import InternCard from "../card/Internship/InternCard";

function Internship() {
  return (
    <section id="internship">
      <h1 className="text-center mt-10 text-orange-600 text-5xl font-bold lg:px-10">
        Internship/ WORK EXPERIENCE
      </h1>
      <p className=" font-semibold text-center mt-2 text-orange-600 text-lg ">
        My work experience as a front-end developer.
      </p>
      <div class="flex flex-wrap justify-center items-center mx-auto px-4 lg:px-4 gap-2 my-10">
        <InternCard />
      </div>
    </section>
  );
}

export default Internship;
