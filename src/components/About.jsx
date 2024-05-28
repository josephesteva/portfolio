import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function About() {
  return (
    <>
      {/* <p className="text-center">About test</p> */}
      <div id="about" className="flex justify-center mt-10 mx-24 scroll-m-12 dark:text-slate-400">
        <div className="w-2/3">
          {/* <h2 className="mb-5 text-3xl">About</h2> */}
          <p className="text-lg mb-10 ">
            I'm a fullstack web developer based in the Washington DC area. I am passionate about finding efficient
            solutions to meaningful problems. I enjoy collaborating with a team to bring exciting applications to life.
            I love to spend time outdoors in my free time and am a fan of skiing, rock climbing, and mountain biking!
          </p>
          <div className="flex justify-center gap-8 items-center">
            <a href="https://github.com/josephesteva" target="_blank">
              <GitHubIcon style={{ fontSize: 54 }} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/joseph-esteva" target="_blank">
              <LinkedInIcon style={{ fontSize: 64 }} className="icon" />
            </a>
            <a href="" className="hover:underline">
              <button className="p-2 border-4 text-lg border-sky-600 rounded text-black hover:bg-sky-600 hover:border-sky-900 hover:text-white">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
