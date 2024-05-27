import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SideBar />
      <About />
      <Projects />
    </>
  );
}

export default App;
