import styles from "./App.module.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
