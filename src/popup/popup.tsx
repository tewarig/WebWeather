import React, { useEffect , useState } from "react";
import ReactDOM from "react-dom";
import WeatherCard  from "./weatherCard/weatherCard";
import "./popup.css";


const App: React.FC<{}> = () => {
  

  return (
    <div>
      <WeatherCard city="Haldwani"/>
     
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
