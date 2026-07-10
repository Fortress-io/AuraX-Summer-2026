# My Library

A vanilla JavaScript app for tracking books you own or want to read. Built as part of The Odin Project curriculum.

## Play with it

Open `index.html` in a browser. No build step, no dependencies.

## Features

- Add books via a modal `<dialog>` form (title, author, pages, read status)
- Each book gets a stable, unique `id` via `crypto.randomUUID()`
- Toggle a book's read status with one click (uses a `Book.prototype` method)
- Remove a book from the library
- Data and display are kept as separate concerns — the `myLibrary` array is the single source of truth, and the DOM is just a rendering of it

## Project structure

```
library/
├── index.html   # markup: header, book grid, dialog form
├── style.css    # styling for cards and modal
├── script.js    # data layer + display layer
└── README.md
```

## Code architecture

**Data layer**
- `Book(title, author, pages, read)` — constructor, assigns a `crypto.randomUUID()` id
- `Book.prototype.toggleRead()` — flips a book instance's `read` flag
- `myLibrary` — the array holding all `Book` instances
- `addBookToLibrary(...)` / `removeBookFromLibrary(id)` / `findBook(id)` — free functions that operate on `myLibrary`, kept separate from the constructor

**Display layer**
- `render()` — clears and rebuilds the book grid from `myLibrary` on every change; the DOM never gets out of sync with the data because it's always fully re-derived from it
- Each card carries a `data-id` attribute matching the book's `id`, and each button carries a `data-action` (`remove` or `toggle-read`) so a single delegated click handler on the container can route clicks to the right book/action

**Events**
- `New Book` button opens the `<dialog>` via `showModal()`
- The form's submit handler calls `event.preventDefault()` so nothing gets sent to a server, then reads the field values, calls `addBookToLibrary`, and re-renders
- Cancel button resets the form and closes the dialog without adding anything

No persistent storage — per the assignment, the library resets on page reload. Two sample books are seeded on load just so the grid isn't empty.

## Possible improvements

- Persist the library with `localStorage`
- Edit an existing book's details instead of only add/remove
- Sort or filter (by read status, author, etc.)
## Developed by Dejen Mezgebe (Fortress-io)
