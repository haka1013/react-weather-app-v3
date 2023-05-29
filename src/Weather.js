import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Bournemouth</h1>
      <h2>19 °C</h2>
      <div className="row">
        <div className="col-8">
          <ul>
            <li className="weather-description">Sonnig</li>
            <li>Bournemouth, Bournemouth, England, United Kingdom</li>
            <li>Montag, 16:40</li>
            <li>Niederschlag: 0% | Wind: 20 km/h | Luftfeuchtigkeit: 40%</li>
            <li>
              05:03{" "}
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.vasXASdmljtoBvFafLSiDwHaHa&pid=Api"
                alt="Sunrise & Sunset"
                className="sunrise-sunset"
              ></img>{" "}
              21:08
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_7130.png"
            alt="Weather icon sunny"
            className="current-weather"
          ></img>
        </div>
      </div>
    </div>
  );
}
