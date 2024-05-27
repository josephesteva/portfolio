import React, { useState } from "react";
import { projectData } from "../projectData";

export default function SideBar() {
  const [stick, setStick] = useState(false);

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
            // "Hello";
          })}
        </div>
        <button onClick={() => setStick(!stick)}>Stick</button>
      </aside>
    </div>
  );
}
