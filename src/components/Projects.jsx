import React from "react";
import Project from "./Project";
import { projectData } from "../projectData";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col justify-end items-end mt-10 mb-2 scroll-m-9">
      <h2 className="project-card text-3xl">Projects</h2>
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
