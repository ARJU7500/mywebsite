import React from "react";
import projects from "../../../json/Projects.json";
import ProjectCardList from "./ProjectCardList";

function ProjectCard() {
  return (
    <>
      {projects.map((items) => (
        <ProjectCardList
          key={items.id}
          image={items.image}
          tech={items.technology}
          name={items.name}
          year={items.year}
          link={items.link}
          about={items.about}
        />
      ))}
    </>
  );
}

export default ProjectCard;