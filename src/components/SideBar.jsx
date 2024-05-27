import React, { useState } from "react";

export default function SideBar() {
  const [stick, setStick] = useState(false);

  return (
    <div className={!stick ? "float-left top-0 left-0" : "fixed top-10"}>
      <aside className="flex flex-col gap-2 items-start">
        <h2>This is an aside</h2>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#deckbuilder">Deckbuikder</a>
        <button onClick={() => setStick(!stick)}>Stick</button>
      </aside>
    </div>
  );
}
