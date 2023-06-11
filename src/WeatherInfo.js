import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <span className="align-middle">
            <WeatherIcon code={props.data.icon} size={52} />
          </span>
          <span className="temperature align-middle">
            {props.data.temperature}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-4 d-flex align-items-center weather-data">
          <ul>
            <li> Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
