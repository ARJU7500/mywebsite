import React from "react";

function InternCardList({
  id,
  image,
  name,
  work,
  date,
  title,
  description,
  skills,
}) {
  return (
    <>
      <div className=" p-2">
        <div className="bg-gray-300 p-2 md:flex md:gap-2 rounded-t-md">
          <div className=" flex justify-center items-center">
            <img src={image} alt="game" className=" w-[100px]  rounded-full" />
          </div>
          <div className=" ">
            <p className="text-orange-600 text-xl font-bold md:text-3xl">
              {title}
            </p>
            <p className="text-orange-600 md:text-2xl">{name}</p>
            <p className="text-orange-600 md:text-2xl">{date}</p>
          </div>
        </div>
        <div className="pt-5 md:px-2">
          <h2 className="text-orange-600 text-[17px] md:text-xl ">
            {description}
          </h2>
          <p className="text-orange-600 text-basic pt-2 md:text-xl">
            Skills:{skills}
          </p>
        </div>
      </div>
    </>
  );
}

export default InternCardList;
