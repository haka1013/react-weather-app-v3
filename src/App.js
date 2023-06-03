import "bootstrap/dist/css/bootstrap.css";
import React from "react";

import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Bournemouth" />
      <footer>
        This page was coded by Kat Haas 🐰 and is{" "}
        <a
          href="https://github.com/haka1013/react-weather-app-v3"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
