function WeatherCard({ weather }) {
  return (
    <div>{weather ? <h2>{weather.city}</h2> : <p>No weather data</p>}</div>
  );
}

export default WeatherCard;
