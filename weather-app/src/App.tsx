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

  console.log(weather);

  return (
    <div className="App">
      <h2>天気</h2>


      <table>
        <thead>
          <tr>
            <th>Tokyo</th>
            <th>00:00</th>
            <th>01:00</th>
            <th>02:00</th>
            <th>03:00</th>
            <th>04:00</th>
            <th>05:00</th>
            <th>06:00</th>
            <th>07:00</th>
            <th>08:00</th>
            <th>09:00</th>
            <th>10:00</th>
            <th>11:00</th>
            <th>12:00</th>
            <th>13:00</th>
            <th>14:00</th>
            <th>15:00</th>
            <th>16:00</th>
            <th>17:00</th>
            <th>18:00</th>
            <th>19:00</th>
            <th>20:00</th>
            <th>21:00</th>
            <th>22:00</th>
            <th>23:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
          </tr>
          <tr>
            <td>2</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
            <td>B</td>
          </tr>
          <tr>
            <td>3</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
          </tr>
          <tr>
            <td>4</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
            <td>D</td>
          </tr>
          <tr>
            <td>5</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
            <td>E</td>
          </tr>
          <tr>
            <td>6</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
            <td>F</td>
          </tr>
          <tr>
            <td>7</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
            <td>G</td>
          </tr>
        </tbody>
      </table>

      <Button>reload</Button>
    </div>
  );
}

export default App;
