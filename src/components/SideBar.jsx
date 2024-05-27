import React, { useEffect, useState } from "react";
import { projectData } from "../projectData";

export default function SideBar() {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const headerPositionBottom = document.querySelector("header").offsetHeight;
      if (window.scrollY >= headerPositionBottom) {
        // asideToggle.classList.add('fixed');
        // aside.classList.add('fixed');
        setStick(true);
      } else {
        // asideToggle.classList.remove('fixed');
        // aside.classList.remove('fixed');
        setStick(false);
      }
    });
  }, []);

  return (
    <div className={!stick ? "absolute mt-10" : "fixed top-10"}>
      <aside className="flex flex-col gap-2 items-start [&>a:hover]:bg-sky-500">
        <h2>Nav</h2>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <div className="mt-1 flex gap-3 flex-col items-start">
          {projectData.map((project) => {
            return (
              <a key={project.id} href={`#${project.id}`} className="text-left px-2 hover:bg-sky-500">
                {project.title}
              </a>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
