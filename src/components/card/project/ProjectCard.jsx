import React from "react";
import projects from "../../../json/Projects.json";
import ProjectCardList from "./ProjectCardList";

function ProjectCard() {
  return (
    <>
      {projects.map((items, index) => (
        <div className="border-solid border-2 border-orange-600 justify-between items-center w-96 shadow-lg rounded-lg md:w-[600px] lg:w-[400px]">
          <ProjectCardList
            key={items.id}
            image={items.image}
            tech={items.technology}
            name={items.name}
            year={items.year}
            link={items.link}
            about={items.about}
          />
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
