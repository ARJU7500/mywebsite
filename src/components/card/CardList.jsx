import React from "react";
function CardList({ id, name, icon }) {
  return (
    <>
      <div className="flex gap-2 justify-items-center shadow-md bg-slate-50 rounded-md w-24 p-1">
        <img src={icon} />
        <p className="text-orange-600">{name}</p>
      </div>
    </>
  );
}

export default CardList;
