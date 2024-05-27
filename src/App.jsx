import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div class="background-image">
        <NavBar />
        <Header />
        <SideBar />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
