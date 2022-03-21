import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { InputBase, IconButton, Paper, Grid, Box } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import WeatherCard from "./weatherCard/weatherCard";
import { getStorageCities, setStorageCities } from "../utils/storage";
import "./popup.css";

const App: React.FC<{}> = () => {
  const [Cities, setCities] = useState<String[]>([]);
  const [citiesInput, setCitiesInput] = useState<String>("");
  const handleCitiesInput = () => {
    if (citiesInput === "") {
      return;
    }
    const updatedCities = [...Cities, citiesInput];
    setStorageCities(updatedCities).then(() => {
      setCities(updatedCities);
      setCitiesInput("");
    });
  };
  const handleCityButtonDelete = (index: number) => {
    Cities.splice(index, 1);
    const updatedCities = [...Cities];
    setStorageCities(updatedCities).then(() => {
      setCities(updatedCities);
    });
  };
  useEffect(() => {
    getStorageCities()
      .then((cities) => {
        setCities(cities);
      })
      .catch((error) => {});
  }, []);

  return (
    <Box mx="8px" my="16px">
      <Grid container>
        <Grid item>
          <Paper>
            <Box px="15px" py="5px">
              {" "}
              <InputBase
                placeholder="Add City Name"
                value={citiesInput}
                onChange={(event) => setCitiesInput(event.target.value)}
              />
              <IconButton onClick={handleCitiesInput}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
          {Cities.map((cityName, index) => (
            <WeatherCard
              city={cityName}
              key={index}
              onDelete={handleCityButtonDelete}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
