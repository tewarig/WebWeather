import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { featherWeatherDetails, OpenWeatherApiData } from "../../utils/api";

const WeatherCard = ({ city, onDelete }) => {
  const [WeatherData, SetWeatherData] = useState<OpenWeatherApiData | null>(
    null
  );
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    featherWeatherDetails(city)
      .then((data) => {
        console.log("Data mil gaya bhai");
        console.log(data.main.temp);
        SetWeatherData(data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        setError(true);
      });
  }, [city]);
  if (!WeatherData) {
    return <>Loading....</>;
  }
  if (error) {
    return (
      <Box mx={"4px"} my={"16px"}>
        <Card>
          {" "}
          <CardContent>
            {" "}
            <Typography variant="body1"> Error in getting Data</Typography>{" "}
          </CardContent>{" "}
          <CardActions>
              <Button color="secondary" onClick={onDelete}>Delete</Button>
          </CardActions>
        </Card>{" "}
      </Box>
    );
  }

  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>
          <Typography variant="h5">{WeatherData.name} </Typography>
          <Typography variant="body1">
            {" "}
            {Math.round(WeatherData.main.temp)}'C
          </Typography>
          <Typography variant="body1">
            Feels Like: {Math.round(WeatherData.main.feels_like)}`C
          </Typography>
        </CardContent>
        <CardActions>
              <Button color="secondary"  onClick={onDelete}>Delete</Button>
          </CardActions>
      </Card>
    </Box>
  );
};

export default WeatherCard;
