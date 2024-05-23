import React, { useState } from "react";
import { projectData } from "../projectData";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const showDropdown = () => {
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <>
      <div className="flex justify-between text-2xl fixed top-0 w-full h-9 bg-sky-700 text-center">
        <div>Box</div>
        <div className="flex gap-4">
          <span>
            <a href="#about">About</a>
          </span>
          <span onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className="bg-sky-700">
            <a href="#projects">Projects</a>
            {isDropdownVisible ? (
              <div className="mt-1 rounded-b-md flex gap-3 flex-col items-start bg-sky-700 fixed w-48">
                {projectData.map((project) => {
                  return (
                    <a key={project.id} href={`#${project.id}`} className="text-left px-2 w-full hover:bg-sky-500">
                      {project.title}
                    </a>
                  );
                  // "Hello";
                })}
              </div>
            ) : null}
          </span>
          <span className="flex gap-1">
            <span>Retro 2D Porfolio:</span>
            <a href="https://josephesteva.github.io/2d-game-portfolio/" target="_blank">
              <img className="w-9 h-full" src="/images/pixel-door.png" alt="" />
            </a>
          </span>
        </div>
      </div>
      <div className="mb-10"></div>
    </>
  );
}
