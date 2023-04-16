import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'YOUR_API_KEY';
        const city = 'Tokyo';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const city = weatherData.name;
  const weather = weatherData.weather[0].description;
  const temp = weatherData.main.temp;

  return (
    <div>
      <h2>現在の天気</h2>
      <p>都市: {city}</p>
      <p>天気: {weather}</p>
      <p>気温: {temp} ℃</p>
    </div>
  );
}

export default App;
