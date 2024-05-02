import React from "react";
import Project from "./Project";
import { projectData } from "../projectData";

export default function Projects() {
  return (
    <div className="flex flex-col items-center mt-10 mb-2">
      <h2 className="project-card text-3xl">Projects</h2>
      {projectData.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}
