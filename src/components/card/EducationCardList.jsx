import React from "react";
function EducationCardList({ id, image, collegeName, curseName, batch, para }) {
  return (
    <>
      <div className=" para w-1/2 pl-10 text-orange-600 font-bold text-2xl">
        <h1>{batch}</h1>
      </div>
      <div className="w-1/2 border-solid border-2 shadow-lg rounded-md p-2">
        <div className="flex bg-gray-300 rounded-md">
          <div className="1/4">
            <img src={image} className="w-28" />
          </div>
          <div className="3/4">
            <h4 className="text-orange-600 text-2xl font-bold">
              {collegeName}
            </h4>
            <h2 className="text-orange-600 font-bold">{curseName}</h2>
            <p className="text-orange-600 font-bold">{batch}</p>
          </div>
        </div>
        <div>
          <p className="text-orange-600 font-semibold ">{para}</p>
        </div>
      </div>
    </>
  );
}

export default EducationCardList;
