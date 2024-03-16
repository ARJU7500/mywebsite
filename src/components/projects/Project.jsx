import React from "react";
import ProjectCard from "../card/project/ProjectCard";
function Project() {
  return (
    <>
      <section>
        <h1
          className="text-center mt-10 text-orange-600 text-5xl font-bold "
          id="projects"
        >
          Projects
        </h1>
        <p className=" font-semibold text-center mt-2 text-orange-600 text-lg ">
          I have worked on a web apps. Here are some of my projects.
        </p>
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-2 my-10">
          <ProjectCard />
        </div>
      </section>
    </>
  );
}

export default Project;
