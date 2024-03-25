import React from "react";
import CardList from "../card/CardList";
import Items from "../../json/Item.json";
function Card({ title }) {
  return (
    <div className="border-solid border-2 border-orange-500 rounded-lg shadow-md p-5">
      <h1 className="text-center pt-2 pb-2 text-orange-600 font-semibold text-xl">
        {title}
      </h1>
      <div className="flex gap-5 flex-wrap justify-between items-center md:flex md:flex-wrap md:gap-5 md:w-[600px] md:mt-5 lg:w-[400px]">
        {Items.map((item, index) => (
          <CardList key={item.id} icon={item.icon} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Card;
