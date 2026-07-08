const container = document.getElementById("container");
const resetButton = document.getElementById("reset-btn");

let currentSize = 16;

// Create grid
function createGrid(size) {
  const total = size * size;

  for (let i = 0; i < total; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Clear grid
function clearGrid() {
  container.innerHTML = "";
}

// Reset button → clears colors only (same size grid)
resetButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
});

// Initialize grid
createGrid(currentSize);