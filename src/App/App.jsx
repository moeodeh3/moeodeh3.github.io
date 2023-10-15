import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Works from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Skills />
    </>
  );
}

export default App;
