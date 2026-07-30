import { useState } from "react";

function Search({ onSearch, loading }) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    const city = input.trim();

    if (!city) return;

    onSearch(city);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Location..."
        value={input}
        autoFocus
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

export default Search;
