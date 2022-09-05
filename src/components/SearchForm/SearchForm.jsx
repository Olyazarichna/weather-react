import css from "./SearchForm.module.css";
// import axios from "axios";
import { useState } from "react";

export const SearchForm = ({ searchWeather }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchWeather(value);

    setValue("");
  };
  return (
    <>
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
    </>
  );
};
