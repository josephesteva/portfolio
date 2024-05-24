import React, { useState } from "react";

export default function TechIcon({ icon }) {
  const [isHovered, setIsHovered] = useState(false);

  const showIconName = () => {
    setIsHovered(true);
  };

  const hideIconName = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="p-1 m-1 hover:brightness-125">
        <img
          src={`${icon.path}`}
          alt={`${icon.name}`}
          className="h-10"
          onMouseEnter={showIconName}
          onMouseLeave={hideIconName}
        />
      </div>
      {isHovered ? (
        <div className="absolute px-2 border border-black bg-sky-400 text-white font-semibold ">{icon.name}</div>
      ) : null}
    </div>
  );
}
