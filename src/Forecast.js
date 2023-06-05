import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="icon">
            <WeatherIcon code="clear-sky-day" size={36} />
          </div>{" "}
          <span className="max-temp">19°</span>{" "}
          <span className="min-temp">10°</span>
          <div className="day">Thursday</div>
        </div>
      </div>
    </div>
  );
}
