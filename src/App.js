import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [weather, setWeather] = useState([]);
  const [nyWeather, setNyWeather] = useState([]);

  const renderFl = async () => {
    const response = await Axios.get(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=miami&country=us&state=fl&days=16&units=I&key=a63cb2a120bd4fcabe9d268227762261"
    );
    console.log(response.data.data);
    setWeather(response.data.data);
  };

  const renderNy = async () => {
    const res = await Axios.get(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=New%20York%20City&country=us&state=Ny&units=I&key=a63cb2a120bd4fcabe9d268227762261"
    );
    setNyWeather(res.data.data);
  };

  const renderWeather = () => {
    renderFl();
  };

  const newYorkWeather = () => {
    renderNy();
  };

  return (
    <div className="App">
      <h1>16 day Weather Forecast</h1>
      <button onClick={renderWeather}>Florida</button>
      <button onClick={newYorkWeather}>New York</button>
      {weather.map((checkWeather) => {
        return (
          <ul>
            <li>{checkWeather.datetime}</li>
            <li>Weather Description: {checkWeather.weather.description}</li>
            <li>High of: {checkWeather.app_max_temp} °F</li>
            <li>Low of: {checkWeather.app_min_temp} °F</li>
          </ul>
        );
      })}
      {nyWeather.map((checkWeth) => {
        return (
          <ul>
            <li>{checkWeth.datetime}</li>
            <li>Weather Description: {checkWeth.weather.description}</li>
            <li>High of: {checkWeth.app_max_temp} °F</li>
            <li>Low of: {checkWeth.app_min_temp} °F</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
