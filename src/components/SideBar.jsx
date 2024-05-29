import React, { useEffect, useState } from "react";
import { projectData } from "../projectData";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function SideBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);

    // if (localStorage.theme === "dark") {
    //   window.localStorage.setItem("theme", "light");
    //   document.html.classList.remove("dark");
    // } else {
    //   window.localStorage.setItem("theme", "dark");
    //   document.html.classList.add("dark");
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const headerPositionBottom = document.querySelector("header").offsetHeight;
      console.log(window.scrollY);
      if (window.scrollY >= headerPositionBottom - 56) {
        // asideToggle.classList.add('fixed');
        // aside.classList.add('fixed');
        setIsSticky(true);
      } else {
        // asideToggle.classList.remove('fixed');
        // aside.classList.remove('fixed');
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <div className={!isSticky ? "absolute mt-10 mx-5" : "fixed top-24 mx-5"}>
      <aside className="sidebar flex flex-col gap-2 text-xl items-start [&>a:hover]:bg-sky-500 dark:bg-slate-700">
        <h2>Nav</h2>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <div className="mt-1 flex gap-3 flex-col items-start">
          {projectData.map((project) => {
            return (
              <a key={project.id} href={`#${project.id}`} className="text-left text-wrap px-2 hover:bg-sky-500">
                {project.title}
              </a>
            );
          })}
        </div>
        <button
          onClick={toggleMode}
          className={
            isDarkMode ? "transition duration-1000 hover:rotate-180" : "transition duration-1000 hover:rotate-[360deg]"
          }
        >
          {!isDarkMode ? <DarkModeIcon fontSize="large" /> : <LightModeIcon fontSize="large" />}
        </button>
      </aside>
    </div>
  );
}
