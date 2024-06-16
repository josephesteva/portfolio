import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center">
        <img src="/portfolio/images/PortfolioPicSmall.png" className="rounded-full w-1/4 mt-10" />
      </div>
      <h1 className="text-6xl text-sky-700 font-bold text-center mt-5 ">JOE ESTEVA</h1>
      <h2 className="text-3xl text-sky-700 italic text-center mt-2">Software Engineer</h2>
      <aside className="float-left absolute">
        {/* <div className="w-48 h-48 bg-blue-800">This is aside number 2</div> */}
      </aside>
    </header>
  );
}
