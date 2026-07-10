"use strict";

/* ===========================================================
   GAMEBOARD
   Single instance -> wrapped in an IIFE (module pattern).
   Stores the board as a flat array of 9 cells: '' | 'X' | 'O'
=========================================================== */
const Gameboard = (function () {
  const size = 9;
  let board = Array(size).fill("");

  const getBoard = () => board;

  const placeMark = (index, mark) => {
    if (index < 0 || index > 8) return false;
    if (board[index] !== "") return false; // spot already taken
    board[index] = mark;
    return true;
  };

  const reset = () => {
    board = Array(size).fill("");
  };

  return { getBoard, placeMark, reset };
})();

/* ===========================================================
   PLAYER
   Multiple instances needed -> plain factory function.
=========================================================== */
const createPlayer = (name, mark) => {
  return { name, mark };
};

/* ===========================================================
   GAME CONTROLLER
   Single instance -> IIFE. Owns turn order and win/tie logic.
=========================================================== */
const GameController = (function () {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  let players = [];
  let activePlayerIndex = 0;
  let gameOver = false;

  const start = (name1, name2) => {
    players = [
      createPlayer(name1 || "Player 1", "X"),
      createPlayer(name2 || "Player 2", "O"),
    ];
    activePlayerIndex = 0;
    gameOver = false;
    Gameboard.reset();
  };

  const getActivePlayer = () => players[activePlayerIndex];

  const switchTurn = () => {
    activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
  };

  const checkWin = (board) => {
    return winningCombos.some((combo) => {
      const [a, b, c] = combo;
      return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
    });
  };

  const checkTie = (board) => board.every((cell) => cell !== "");

  // Returns a result object each call:
  // { status: 'continue' | 'win' | 'tie', player? }
  const playRound = (index) => {
    if (gameOver) return { status: "over" };

    const placed = Gameboard.placeMark(index, getActivePlayer().mark);
    if (!placed) return { status: "invalid" };

    const board = Gameboard.getBoard();

    if (checkWin(board)) {
      gameOver = true;
      return { status: "win", player: getActivePlayer() };
    }

    if (checkTie(board)) {
      gameOver = true;
      return { status: "tie" };
    }

    switchTurn();
    return { status: "continue", player: getActivePlayer() };
  };

  const isGameOver = () => gameOver;

  return { start, playRound, getActivePlayer, isGameOver };
})();

/* ===========================================================
   Quick console test (comment out once you trust it):

   GameController.start('Alice', 'Bob');
   console.log(GameController.playRound(0)); // Alice X
   console.log(GameController.playRound(3)); // Bob O
   console.log(GameController.playRound(1));
   console.log(GameController.playRound(4));
   console.log(GameController.playRound(2)); // Alice wins top row
   console.log(Gameboard.getBoard());
=========================================================== */

/* ===========================================================
   DISPLAY CONTROLLER
   Single instance -> IIFE. Only piece that touches the DOM.
=========================================================== */
const DisplayController = (function () {
  const boardEl = document.getElementById("gameboard");
  const resultEl = document.getElementById("result-display");
  const formEl = document.getElementById("player-form");
  const restartBtn = document.getElementById("restart-btn");
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");

  const renderBoard = () => {
    boardEl.innerHTML = "";
    Gameboard.getBoard().forEach((mark, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (mark) cell.classList.add("taken");
      cell.dataset.index = index;
      cell.textContent = mark;
      boardEl.appendChild(cell);
    });
  };

  const setResultMessage = (msg) => {
    resultEl.textContent = msg;
  };

  const handleCellClick = (e) => {
    const cell = e.target.closest(".cell");
    if (!cell) return;
    if (GameController.isGameOver()) return;

    const index = Number(cell.dataset.index);
    const result = GameController.playRound(index);

    if (result.status === "invalid") return; // spot already taken, do nothing

    renderBoard();

    if (result.status === "win") {
      setResultMessage(`${result.player.name} wins!`);
      restartBtn.classList.remove("hidden");
    } else if (result.status === "tie") {
      setResultMessage("It's a tie!");
      restartBtn.classList.remove("hidden");
    } else {
      setResultMessage(`${result.player.name}'s turn (${result.player.mark})`);
    }
  };

  const startGame = (e) => {
    e.preventDefault();
    const name1 = player1Input.value.trim();
    const name2 = player2Input.value.trim();

    GameController.start(name1, name2);
    renderBoard();
    setResultMessage(`${GameController.getActivePlayer().name}'s turn (X)`);
    restartBtn.classList.remove("hidden");
  };

  const restartGame = () => {
    GameController.start(player1Input.value.trim(), player2Input.value.trim());
    renderBoard();
    setResultMessage(`${GameController.getActivePlayer().name}'s turn (X)`);
  };

  const bindEvents = () => {
    boardEl.addEventListener("click", handleCellClick);
    formEl.addEventListener("submit", startGame);
    restartBtn.addEventListener("click", restartGame);
  };

  bindEvents();

  return { renderBoard };
})();
