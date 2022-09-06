import css from './FormatedDate.module.css';

export const FormatedDate = () => {

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[new Date().getDay()];
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  if (hours < 10 || minutes < 10) {
    hours = `0${hours}`;
    minutes = `0${minutes}`;
  }
  return (
    <>
      
        <div className={css.text}>
          {day} {hours}:{minutes}
        </div>
   
    </>
  );
};
