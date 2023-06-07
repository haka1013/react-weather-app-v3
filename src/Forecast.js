import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data.daily[0]);
    setForecast({
      loaded: true,
      data: response.data.daily[0],
    });
  }

  if (forecast.loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col"></div>
          <ForecastInfo data={forecast.data} />
        </div>
      </div>
    );
  } else {
    const apiKey = "f552o2btc343e2d6edd4e830ffa6cab0";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
