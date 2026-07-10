# Tic Tac Toe

A vanilla JavaScript Tic Tac Toe game built with the **module pattern** and **factory functions**, keeping global scope as clean as possible. Built as part of The Odin Project curriculum.

## Play it

Just open `index.html` in a browser. No build step, no dependencies.

## Features

- Enter custom names for Player 1 (X) and Player 2 (O)
- Click a cell to place your mark — taken cells can't be overwritten
- Automatic detection of all 8 winning combinations (rows, columns, diagonals) and ties
- Live status display showing whose turn it is, or the game result
- Restart button to start a new round without reloading the page

## Project structure

```
tic-tac-toe/
├── index.html   # markup: player form, gameboard, result display
├── style.css    # styling and grid layout
├── script.js    # all game logic
└── README.md
```

## Code architecture

The logic is split into four pieces, each with a single responsibility:

| Module | Pattern | Responsibility |
|---|---|---|
| `Gameboard` | IIFE (single instance) | Owns the board state as a flat array of 9 cells and exposes `getBoard`, `placeMark`, `reset` |
| `createPlayer` | Factory function | Creates a `{ name, mark }` object — used twice, once per player |
| `GameController` | IIFE (single instance) | Manages turn order, win/tie detection, and drives a round via `playRound(index)` |
| `DisplayController` | IIFE (single instance) | The only module that touches the DOM — renders the board, wires up click/form/restart events |

Only the module names themselves live in global scope; everything else is tucked inside closures. The `DisplayController` calls into `GameController`/`Gameboard` but never manipulates game state directly, and the game logic never touches the DOM — so the board and rules were fully testable from the console before any HTML/CSS was wired up.

## Development notes

The core logic (`Gameboard` + `GameController`) was written and manually verified in the console first — playing out full games and checking win/tie detection — before the `DisplayController` and any DOM code was added, per the "console-first" build approach.

## Possible improvements

- Highlight the winning three cells
- Add a scoreboard across multiple rounds
- Add an unbeatable AI opponent (minimax)

## Developed by Dejen Mezgebe (Fortress-io)