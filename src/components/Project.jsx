import React from "react";

export default function Project({ project }) {
  return (
    <>
      <h2>Projects</h2>
      <div className="flex justify-end m-10 border border-black">
        <div className="project-card flex flex-col">
          <div className="flex justify-between">
            <h3>{project.title}</h3>
            <button>Link to site</button>
            <a href={project.githubLink} target="_blank">
              Github Link
            </a>
          </div>
          <div className="flex justify-around p-5">
            <p>{project.description}</p>
            <img src={"/images/BobRossBlock.png"} alt="A picture" />
          </div>
        </div>
      </div>
    </>
  );
}
