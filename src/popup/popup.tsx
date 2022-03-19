import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { InputBase, IconButton, Paper, Grid, Box } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import WeatherCard from "./weatherCard/weatherCard";
import "./popup.css";

const App: React.FC<{}> = () => {
  const [Cities, setCities] = useState<String[]>([
    "Haldwani",
    "Dehradun",
    "New York",
  ]);
  const [citiesInput, setCitiesInput] = useState<String>("");
  console.log(citiesInput);

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
              <IconButton>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
          {Cities.map((cityName, index) => (
            <WeatherCard city={cityName} key={index} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
