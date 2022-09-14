import css from "./Forecast.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const Forecast = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  let longitude = data.lon;
  let latitude = data.lat;

  useEffect(() => {
    setLoaded(false);
  }, [data]);

  const KEY = `5f472b7acba333cd8a035ea85a0d4d4c`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`;

  function handleResp(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <ul>
        {forecast.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <li key={index}>
                <img
                  src={`http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`}
                  alt="icon"
                  width="100"
                />
                <div className={css.wrapper}>
                  <p>{Math.round(dailyForecast.temp.min)}°</p>-
                  <p>{Math.round(dailyForecast.temp.max)}°</p>
                </div>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    axios.get(apiUrl).then(handleResp);
    return null;
  }
};
