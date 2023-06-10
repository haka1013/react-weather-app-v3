import React, { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const codeMapping = {
    "clear-sky-day": { url: "url(/img/clear-sky-day.png)", color: "black" },
    "clear-sky-night": { url: "url(/img/clear-sky-night.png)", color: "black" },
    "few-clouds-day": { url: "url(/img/clear-sky-day.png)", color: "black" },
    "few-clouds-night": {
      url: "url(/img/clear-sky-night.png)",
      color: "black",
    },
    "scattered-clouds-day": { url: "url(/img/clouds-day.png)", color: "black" },
    "scattered-clouds-night": {
      url: "url(/img/clouds-night.png)",
      color: "black",
    },
    "broken-clouds-day": { url: "url(/img/clouds-day.png)", color: "black" },
    "broken-clouds-night": {
      url: "url(/img/clouds-night.png)",
      color: "black",
    },
    "shower-rain-day": { url: "url(/img/rain-day.png)", color: "black" },
    "shower-rain-night": { url: "url(/img/rain-night.png)", color: "black" },
    "rain-day": { url: "url(/img/rain-day.png)", color: "black" },
    "rain-night": { url: "url(/img/rain-night.png)", color: "black" },
    "thunderstorm-day": { url: "url(/img/rain-day.png)", color: "black" },
    "thunderstorm-night": { url: "url(/img/rain-night.png)", color: "black" },
    "snow-day": { url: "url(/img/rain-day.png)", color: "black" },
    "snow-night": { url: "url(/img/rain-night.png)", color: "black" },
    "mist-day": { url: "url(/img/rain-day.png)", color: "black" },
    "mist-night": { url: "url(/img/rain-night.png)", color: "black" },
  };

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
      icon: response.data.condition.icon,
      background: {
        backgroundImage: codeMapping[response.data.condition.icon].url,
        color: codeMapping[response.data.condition.icon].color,
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(city) {
    const apiKey = "f552o2btc343e2d6edd4e830ffa6cab0";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather" style={weatherData.background}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoComplete="off"
                autoFocus="on"
                className="form-control mb-3"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search(city);
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
