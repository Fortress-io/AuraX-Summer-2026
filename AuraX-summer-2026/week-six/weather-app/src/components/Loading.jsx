import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Fetching weather...</p>
    </div>
  );
}

export default Loading;
