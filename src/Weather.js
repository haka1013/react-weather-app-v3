import React, { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      date: new Date(response.data.time * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
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
        <h1>
          {weatherData.city}, {weatherData.country}
        </h1>
        <ul>
          <li className="weather-description, text-capitalize">
            {weatherData.description}
          </li>
          <li className="weather-description">
            <FormattedDate date={weatherData.date} />
          </li>
        </ul>
        <div className="row">
          <div className="col-8">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.icon}
              className="current-weather mt-3 mb-3 me-3 align-center"
            ></img>
            <h2 className="align-middle">
              {weatherData.temperature}
              <span className="unit align-top">°C</span>
            </h2>
          </div>
          <div className="col-4">
            <ul>
              <li className="weather-data"> Wind: {weatherData.wind} km/h</li>
              <li className="weather-data">
                Humidity: {weatherData.humidity} %
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f552o2btc343e2d6edd4e830ffa6cab0";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="text-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#0DCAF0"
        />
      </div>
    );
  }
}
