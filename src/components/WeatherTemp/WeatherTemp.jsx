import { useState } from "react";
import css from './WeatherTemp.module.css';
export const WeatherTemp = (props) => {
  const [unit, setUnit] = useState("celsius");
 
  let tempC = Math.round(props.celsius);
  let tempF = Math.round((props.celsius * 9) / 5 + 32);

  const showF = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
  };
  const showC = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };
  if (unit === "celsius") {
    return (
      <p className={css.text}> 
        {tempC}
        <a href="#" onClick={showC}>
           °C
        </a>
        |
        <a href="#" onClick={showF}>
           °F
        </a>
      </p>
    );
  } else {
    return (
      <p className={css.text}> 
        {tempF}
        <a href="#" onClick={showC}>
          °C
        </a>
        |
        <a href="#" onClick={showF}>
          °F
        </a>
      </p>
    );
  }

};
