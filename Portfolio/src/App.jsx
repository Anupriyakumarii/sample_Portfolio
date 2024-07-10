import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar></Navbar>
      </div>
    </>
  );
}

export default App;
