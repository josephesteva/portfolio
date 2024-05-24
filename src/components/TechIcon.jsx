import React from "react";

export default function TechIcon({ techIcons }) {
  return (
    <div className="flex">
      {techIcons.map((icon) => (
        <img src={`${icon.path}`} alt={`${icon.name}`} className="h-10 m-2" />
      ))}
    </div>
  );
}
