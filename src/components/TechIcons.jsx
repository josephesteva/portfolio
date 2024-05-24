import React from "react";
import TechIcon from "./TechIcon";

export default function TechIcons({ techIcons }) {
  return (
    <div className="flex">
      {techIcons.map((icon) => (
        <TechIcon icon={icon} />
        // <img src={`${icon.path}`} alt={`${icon.name}`} className="h-10 m-2" />
      ))}
    </div>
  );
}
