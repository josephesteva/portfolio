import React from "react";

function About() {
  return (
    <>
      <div className="flex justify-center">
        <img src="/images/PortfolioPic2.png" className="rounded-full w-1/4" />
      </div>
      <h1 className="text-6xl text-blue-700 font-bold text-center mt-5 ">JOE ESTEVA</h1>
      <h2 className="text-3xl text-sky-400 italic text-center mt-2">Software Engineer</h2>
      <div id="about" className="flex justify-center mt-10">
        <div className="w-1/2">
          <h3 className="text-2xl font-bold">About</h3>
          <p>
            I'm a fullstack web developer based in the Washington DC area. I am passionate about finding efficient
            solutions to meaningful problems. I enjoy collaborating with a team to bring exciting applications to life.
            I love to spend time outdoors in my free time and am a fan of skiing, rock climbing, and mountain biking!
          </p>
          <div>
            <div className="flex items-center gap-3 mt-5">
              <p className="">You can also find an interactive retro-2d version of my portfolio:</p>
              <a href="https://josephesteva.github.io/2d-game-portfolio/" target="_blank">
                <img className="w-9 h-9" src="/images/pixel-door.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
