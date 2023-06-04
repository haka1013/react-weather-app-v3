import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul>
        <li className="weather-description, text-capitalize">
          {props.data.description}
        </li>
        <li className="weather-description">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col-8">
          <img
            src={props.data.iconUrl}
            alt={props.data.icon}
            className="current-weather mt-3 mb-3 me-3 align-center"
          ></img>
          <h2 className="align-middle">
            {props.data.temperature}
            <span className="unit align-top">°C</span>
          </h2>
        </div>
        <div className="col-4">
          <ul>
            <li className="weather-data"> Wind: {props.data.wind} km/h</li>
            <li className="weather-data">Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
