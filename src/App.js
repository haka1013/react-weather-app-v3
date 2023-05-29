import "bootstrap/dist/css/bootstrap.css";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App, container">
      <h1>Weather App</h1>
      <h2>This is a weather app</h2>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <footer>
        This page was coded by Kat Haas 🐰 and is{" "}
        <a
          href="https://github.com/haka1013/react-weather-app-v3"
          target="blank"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
