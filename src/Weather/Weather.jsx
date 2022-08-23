import { useState } from "react";
import axios from "axios";

import Container from "@mui/material/Container";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Weather = () => {
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");
  const KEY = `a98d70d03d8de2cdd126f4062901ce92`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${KEY}&units=metric`;

  function showInfo(response) {
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
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter a city"
          variant="outlined"
          placeholder="Enter a city"
          value={value}
          onChange={handleChange}
        />
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
      </form>
      {loader && (
        <>
          <p>Temperature: {temp} °C </p>
          <p>Description: {desc}</p>
          <p>Humidity: {humidity} %</p>
          <p>Wind: {wind} km/h</p>
          <img src={icon} alt={desc} />.
        </>
      )}
    </Container>
  );
};

export default Weather;
