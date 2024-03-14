import React from "react";
import CardList from "../card/CardList";
import Items from "../../json/Item.json";
function Card({ title }) {
  return (
    <div className="border-solid border-2 border-orange-500 rounded-lg shadow-md w-1/3 p-5">
      <h1 className="text-center pt-2 pb-2">{title}</h1>
      <div className="flex flex-wrap justify-between items-center">
        {Items.map((item, index) => (
          <CardList key={item.id} icon={item.icon} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Card;
