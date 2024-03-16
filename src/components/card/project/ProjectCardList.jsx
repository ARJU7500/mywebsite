import React from "react";
import { Link } from "react-router-dom";

function ProjectCardList({ id, image, name, link, year, tech, about }) {
  return (
    <>
      <div className="p-5">
        <img src={image} alt="game" className="rounded-t-lg" />
        <h1 className="text-orange-600 text-3xl font-bold">{name}</h1>
        <h3 className="text-orange-600 text-basic font-bold">
          {" "}
          Tools/Technology: {tech}.
        </h3>
        <h2 className="text-orange-600 text-basic font-bold">
          Year: {year} completed
        </h2>
        <p className="text-orange-600 text-basic mb-5">{about}</p>
        <Link
          to={link}
          className="text-orange-600 text-basic border-solid border-2 p-2 rounded-lg border-orange-600 hover:bg-orange-600 hover:text-white"
        >
          code Link
        </Link>
      </div>
    </>
  );
}

export default ProjectCardList;
