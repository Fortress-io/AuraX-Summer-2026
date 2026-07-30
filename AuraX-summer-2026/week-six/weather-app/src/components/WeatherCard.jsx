import "./WeatherCard.css";

function WeatherCard({ weather }) {
  if (!weather) {
    return <p>No weather data</p>;
  }

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
 
  return (
    <div className="weather-card">
      <img
        src={iconUrl}
        alt={weather.weather[0].description}
        className="weather-icon"
      />

      <h2 className="city">
        <span
          className={`fi fi-${weather.sys.country.toLowerCase()}`}
          style={{ marginRight: "10px" }}
        ></span>

        {weather.name}
      </h2>

      <p className="date">{formattedDate}</p>

      <p className="description">{weather.weather[0].description}</p>

      <h1 className="temperature">{Math.round(weather.main.temp)}°C</h1>

      <div className="details">
        <p>🤚 Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>💨 Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
