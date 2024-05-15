import React, { useState } from "react";

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
          <span>
            <a href="#projects">Projects</a>
          </span>
          <span onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className="bg-sky-700">
            Projects
            {isDropdownVisible ? (
              <div className="bg-sky-700 fixed">
                <a className="">Project 2</a>
                <a className="">Project 1</a>
                <a className="">Project 3</a>
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
