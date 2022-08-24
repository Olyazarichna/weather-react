import { useState } from "react";
import axios from "axios";
import css from "./Weather.module.css";

export const Weather = () => {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [loader, setLoader] = useState(false);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");
  const KEY = `a98d70d03d8de2cdd126f4062901ce92`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${KEY}&units=metric`;

  function showInfo(response) {
    console.log(response);
    setCity(response.data.name);
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(url).then(showInfo);
    setLoader(true);
    setValue("");
  };

  return (
    <section className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          id="outlined-basic"
          label="Enter a city"
          variant="outlined"
          placeholder="Enter a city"
          value={value}
          onChange={handleChange}
          className={css.formInput}
        />
        <button
          variant="contained"
          color="success"
          type="submit"
          className={css.formBtn}
        >
          Search
        </button>
      </form>
      {loader && (
        <>
          <h2 className={css.title}>Current weather in {city}</h2>

          <div className={css.infoContainer}>
            <div className={css.info}>
              <p className={css.text}>Temperature: {temp} °C </p>
              <p className={css.text}>Description: {desc}</p>
              <p className={css.text}>Humidity: {humidity} %</p>
              <p className={css.text}>Wind: {wind} km/h</p>
            </div>
            <div className={css.img}>
              <img src={icon} alt={desc} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Weather;
