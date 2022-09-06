import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import axios from "axios";
import css from "./Weather.module.css";
import { FormatedDate } from "../FormatedDate/FormatedDate";
import { WeatherTemp } from "../WeatherTemp/WeatherTemp";


export const Weather = () => {
  const [city, setCity] = useState("");
  const [loader, setLoader] = useState(false);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");
  // const [weatherData, setWeatherData] = useState("");
  const KEY = `a98d70d03d8de2cdd126f4062901ce92`;

  const onFormSubmit = (value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${KEY}&units=metric`;
    axios.get(url).then(showInfo);
    setLoader(true);
  };
  function showInfo(response) {
  
    setCity(response.data.name);
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

  }

  return (
    <section className={css.wrapper}>
      <SearchForm searchWeather={onFormSubmit} />

      {loader && (
        <>
          <h2 className={css.title}>{city}</h2>
          <p className={css.title}>{}</p>

          <FormatedDate/>

          <p className={css.text}> {desc}</p>
          <div className={css.description}>
            <div className={css.infoContainer}>
              <img src={icon} alt={desc} />
<WeatherTemp celsius={temp}/>
              {/* <p className={css.text}>{temp} °C |°F</p> */}
            
            </div>
            <div className={css.info}>
              <p className={css.text}>Humidity: {humidity} %</p>
              <p className={css.text}>Wind: {wind} km/h</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Weather;
