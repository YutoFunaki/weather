import React, { useEffect } from "react";
import "./App.css";
import instance from "./axios";
import {
  Button,
} from "@mui/material";

type Weather = {
  latitude: number;
  longitude: number;
  generation_time_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    wind_speed: number;
    wind_direction: number;
    weather_code: number;
    is_day: number;
    time: string;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
  };
  temperature_2m: number[];
};

function App() {
  const [weather, setWeather] = React.useState<Weather>();

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get("");
      setWeather(response.data);
      return response;
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Button>a</Button>
    </div>
  );
}

export default App;
