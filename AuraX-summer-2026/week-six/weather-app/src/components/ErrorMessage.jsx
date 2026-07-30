import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-card">
      <h3>Oops!</h3>
      <p>{message}</p>
      <small>Please check the city name and try again.</small>
    </div>
  );
}

export default ErrorMessage;
