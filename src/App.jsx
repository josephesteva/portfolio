import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import { projectData } from "./projectData";

function App() {
  return (
    <>
      <Header />
      <About />
      {projectData.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
}

export default App;
