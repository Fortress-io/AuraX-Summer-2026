import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { getWeather } from "./services/weatherAPI";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const weatherType = weather?.weather[0].main.toLowerCase() || "";

  async function handleSearch(cityName) {
    setError("");

    try {
      setLoading(true);

      const data = await getWeather(cityName);

      setWeather(data);
    } catch (error) {
      setWeather(null); // Remove old weather too

      setError(
        error.message === "city not found"
          ? "We couldn't find that city."
          : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="dashboard-content">
      <main className={`dashboard ${weatherType}`}>
        <section className="search-panel">
          <h1>🌦Weather Pro</h1>

          <Search onSearch={handleSearch} loading={loading} />
        </section>

        <section className="weather-panel">
          {loading && <Loading />}

          {!loading && error && <ErrorMessage message={error} />}

          {!loading && weather && (
            <WeatherCard
              key={`${weather.id}-${weather.dt}`}
              weather={weather}
            />
          )}
        </section>
      </main>
      <footer className="footer">
        <p>
          Built with React & OpenWeather API • © 2026 Dejen M.{" "}
          <a
            href="https://github.com/Fortress-io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fortress-io
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
