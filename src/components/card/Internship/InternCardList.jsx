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
      <div className=" p-3">
        <div className="flex flex-wrap gap-2 bg-gray-300 rounded-md ">
          <div className="w-20%">
            <img src={image} alt="game" className="w-10 rounded-t-lg" />
          </div>
          <div className=" w-[80%]">
            <p className="text-orange-600 text-xl font-bold">{title}</p>
            <p className="text-orange-600 font-semibold">{name}</p>
            <p className="text-orange-600 font-semibold">{date}</p>
          </div>
        </div>
        <div className="pt-5">
          <h2 className="text-orange-600 text-[17px]">{description}</h2>
          <p className="text-orange-600 text-basic font-semibold pt-2">
            Skills:{skills}
          </p>
        </div>
      </div>
    </>
  );
}

export default InternCardList;
