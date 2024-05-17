import React, { useState } from "react";

export default function Project({ project }) {
  const [images, setImages] = useState(project.images);
  const [currentImage, setCurrentImage] = useState(0);

  const handelLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  const handleRight = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

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
            <div className="w-3/5">
              <div className="mb-5">
                <h3 className="text-2xl underline">Description</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <h3 className="text-2xl underline">Tech</h3>
                <p>{project.tech}</p>
              </div>
            </div>
            <div className="w-2/5 ml-5">
              <h3>Screenshots</h3>
              <div className="project-pics">
                {project.images.map((image, index) => (
                  <img
                    key={image}
                    className={
                      index === currentImage
                        ? "my-1 border-4 border-blue-300 w-full h-52 visible"
                        : "my-1 border-4 border-blue-300 hidden"
                    }
                    src={image}
                    alt={project.title}
                  />
                ))}
                <div className="w-full flex justify-around">
                  <button className="px-4 py-1 border-1 bg-white rounded-md" onClick={handelLeft}>
                    Left
                  </button>
                  <button className="px-4 py-1 border-1 bg-white rounded-md" onClick={handleRight}>
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
