import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              autoFocus="on"
              className="form-control mb-3"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100 text-white"
            />
          </div>
        </div>
      </form>
      <h1>Bournemouth, Bournemouth, England, United Kingdom</h1>
      <ul>
        <li className="weather-description">Sonnig</li>
        <li className="weather-description">Montag, 16:40</li>
        <li className="weather-description">
          05:03{" "}
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vasXASdmljtoBvFafLSiDwHaHa&pid=Api"
            alt="Sunrise & Sunset"
            className="sunrise-sunset"
          ></img>{" "}
          21:08
        </li>
      </ul>
      <div className="row">
        <div className="col-8">
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_7130.png"
            alt="Weather icon sunny"
            className="current-weather mt-3 mb-3 me-3 align-center"
          ></img>
          <h2 className="align-middle">
            19<span className="unit align-top">°C</span>
          </h2>
        </div>
        <div className="col-4">
          <ul>
            <li className="weather-data">Niederschlag: 0%</li>
            <li className="weather-data"> Wind: 20 km/h</li>
            <li className="weather-data">Luftfeuchtigkeit: 40%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
