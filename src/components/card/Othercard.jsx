import React from "react";
import CardList from "../card/CardList";
import Items from "../../json/OtherCard.json";

function OtherCard({ title }) {
  return (
    <div
      className="
        h-full
        rounded-2xl
        p-[1px]
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        shadow-xl
        shadow-purple-500/10
      "
    >
      <div
        className="
          h-full
          rounded-2xl
          bg-[#080F2A]
          p-6
        "
      >
        {/* Title */}
        <h2
          className="
            text-center
            text-xl
            md:text-2xl
            font-bold
            bg-gradient-to-r
            from-purple-400
            to-pink-500
            bg-clip-text
            text-transparent
            mb-6
          "
        >
          {title}
        </h2>

        {/* Skills */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-3
          "
        >
          {Items.map((item) => (
            <CardList
              key={item.id}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherCard;