import React from "react";
import { Link } from "react-router-dom";

function ProjectCardList({ id, image, name, link, year, tech, about }) {
  return (
    <>
      <div className="p-2 flex flex-col justify-center items-center">
        <img src={image} alt="game" className="rounded-t-lg w-full h-[200px]" />
        <h1 className="text-orange-600 text-xl text-center py-2 font-bold md:text-3xl">
          {name}
        </h1>
        <p className="text-orange-600 text-center text-basic md:text-xl md:px-1">
          Tools/Technology: {tech}.
        </p>
        {/* <h2 className="text-orange-600 text-basic">Year: {year} completed</h2>
        <p className="text-orange-600 mt-2 text-center text-basic mb-5">
          {about}
        </p> */}
        <Link
          to={link}
          className="text-orange-600 w-[150px] p-2 flex justify-center items-center my-4 border-solid border-2 rounded-md border-orange-600 hover:bg-orange-600 hover:text-white md:text-2xl lg:text-xl"
        >
          <p className="block">Code Link</p>
        </Link>
      </div>
    </>
  );
}

export default ProjectCardList;
