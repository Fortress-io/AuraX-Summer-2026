import { useState } from "react";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { getWeather } from "./services/weatherAPI";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

async function handleSearch(cityName) {
  setCity(cityName);

  setLoading(true);
  setError(null);

  try {
    const data = await getWeather(cityName);

    setWeather(data);
  } catch (err) {
    setError(err.message);
    setWeather(null);
  } finally {
    setLoading(false);
  }
}

  return (
    <div>
      <h1>Weather App 🌦️</h1>

      <Search onSearch={handleSearch} />

      <p>Searching for: {city}</p>

      <WeatherCard weather={weather} />

      <Loading loading={loading} />

      <ErrorMessage error={error} />
    </div>
  );
}

export default App;
