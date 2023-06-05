import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "f552o2btc343e2d6edd4e830ffa6cab0";
  let unit = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(handleResponse);

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
