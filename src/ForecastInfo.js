import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = weekdays[date.getDay()];
    return day;
  }

  return (
    <div className="ForecastInfo">
      <div className="icon">
        <WeatherIcon code={props.data.condition.icon} size={36} />
      </div>{" "}
      <span className="max-temp">{maxTemp()}</span>{" "}
      <span className="min-temp">{minTemp()}</span>
      <div className="day">{day()}</div>
    </div>
  );
}
