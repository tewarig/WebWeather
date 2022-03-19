import React, { useState, useEffect } from "react";
import { featherWeatherDetails } from "../../utils/api";


const WeatherCard = ({ city }) => {
  useEffect(() => {
    featherWeatherDetails("Haldwani")
      .then((data) => {
        console.log("Data mil gaya bhai");
        console.log(data.main.temp);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  }, [city]);
  return <div>{city} </div>;
};

export default WeatherCard;
