import React from "react";

export default function Project({ project }) {
  return (
    <>
      <div id={project.id} className="flex m-10 justify-center bg-slate-200">
        <div className="project-card flex flex-col border-2 border-blue-500 p-5 rounded-md shadow-md shadow-sky-300 hover:shadow-lg hover:shadow-sky-500">
          <div className="flex justify-between pb-3 border-b-2 border-blue-300">
            <h3 className="text-3xl font-semibold">{project.title}</h3>
            <div className="link-buttons">
              <a href={project.siteLink} target="_blank">
                Check it Out
              </a>
              <a href={project.githubLink} target="_blank">
                Github Link
              </a>
            </div>
          </div>
          <div className="flex justify-between p-5">
            <div className="w-2/3">
              <div className="mb-5">
                <h3 className="text-2xl underline">Description</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <h3 className="text-2xl underline">Tech</h3>
                <p>{project.tech}</p>
              </div>
            </div>
            <div>
              <h3>Screenshots</h3>
              <img src={"/images/BobRossBlock.png"} alt="A picture" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
