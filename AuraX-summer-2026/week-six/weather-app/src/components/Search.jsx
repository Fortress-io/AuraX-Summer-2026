import { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");
  
function handleSubmit() {
  const city = input.trim();

  if (!city) return;

  onSearch(city);
}

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default Search;
