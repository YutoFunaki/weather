import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast?latitude=43.43&longitude=142.93&hourly=temperature_2m&current_weather=true&timezone=Asia%2FTokyo",
});

export default instance;