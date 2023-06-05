import React, { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
    });
    console.log("Handle Response");
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f552o2btc343e2d6edd4e830ffa6cab0";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    console.log("Search");
  }

  if (weatherData.ready) {
    console.log("If");
    return (
      <div className="Weather">
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
        {/*<Forecast city={weatherData.city} />*/}
      </div>
    );
  } else {
    console.log("Else");
    search();
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
