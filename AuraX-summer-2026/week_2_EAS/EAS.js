const container = document.getElementById("container");

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

createGrid(16);

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
});
