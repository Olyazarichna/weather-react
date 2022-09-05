import "./App.css";
import { Weather } from "./components/Weather/Weather.jsx";

function App() {
  return (
    <div className="App">
    
      <Weather />
      <p className="text">
        Open-source code, by{" "}
        <a
          href="https://github.com/Olyazarichna"
          target="_blank"
          rel="noreferrer noopener"
        >
          Olha Zarichna
        </a>{" "}
        from{" "}
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          SheCodes
        </a>
      </p>
    </div>
  );
}

export default App;
