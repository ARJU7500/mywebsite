import React from "react";

function CardList({ name, icon }) {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-2
        min-h-[100px]
        p-3
        rounded-xl
        bg-[#050B24]
        border
        border-purple-500/20
        hover:border-purple-500/60
        hover:bg-purple-500/10
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          items-center
          justify-center
          w-10
          h-10
        "
      >
        <img
          src={icon}
          alt={name}
          className="
            max-w-full
            max-h-full
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Skill Name */}
      <p
        className="
          text-center
          text-sm
          font-medium
          text-gray-300
          group-hover:text-purple-300
          transition-colors
          duration-300
        "
      >
        {name}
      </p>
    </div>
  );
}

export default CardList;