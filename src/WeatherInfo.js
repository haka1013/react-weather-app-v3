import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col-4 d-flex align-items-center">
          <ul>
            <li className="weather-data"> Wind: {props.data.wind} km/h</li>
            <li className="weather-data">Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
