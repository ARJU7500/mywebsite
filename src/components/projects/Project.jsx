import React from "react";
import ProjectCard from "../card/project/ProjectCard";
function Project() {
  return (
    <>
      <section className="px-4 lg:px-10" id="projects">
        <h1 className="text-center mt-10 text-orange-600 text-[30px] font-bold md:text-5xl">
          Projects
        </h1>
        <p className=" font-semibold text-center mt-2 text-orange-600 text-sm md:text-3xl">
          I have worked on a web apps. Here are some of my projects.
        </p>
        <div class="flex flex-wrap justify-center items-center mx-auto px-4 lg:mx-4 gap-2 my-10 md:gap-10 lg:flex">
          <ProjectCard />
        </div>
      </section>
    </>
  );
}

export default Project;
