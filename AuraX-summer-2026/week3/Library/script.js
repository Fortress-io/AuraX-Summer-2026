'use strict';

/* ===========================================================
   DATA: myLibrary array + Book constructor
=========================================================== */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype method: toggles the read status of a book instance
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Takes params, creates a Book, stores it in myLibrary. Not part of the constructor.
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book;
}

function removeBookFromLibrary(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) myLibrary.splice(index, 1);
}

function findBook(id) {
  return myLibrary.find((book) => book.id === id);
}

/* ===========================================================
   DISPLAY: renders myLibrary to the DOM.
   Kept separate from the data layer above.
=========================================================== */
function render() {
  const libraryEl = document.getElementById('library');
  const emptyMessageEl = document.getElementById('empty-message');

  libraryEl.innerHTML = '';

  if (myLibrary.length === 0) {
    emptyMessageEl.classList.remove('hidden');
    return;
  }
  emptyMessageEl.classList.add('hidden');

  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id = book.id;

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.classList.add('author');
    author.textContent = `by ${book.author}`;

    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = `${book.pages} pages`;

    const buttonRow = document.createElement('div');
    buttonRow.classList.add('card-buttons');

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-toggle-btn');
    if (book.read) readBtn.classList.add('read');
    readBtn.textContent = book.read ? 'Read' : 'Not read';
    readBtn.dataset.action = 'toggle-read';

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.dataset.action = 'remove';

    buttonRow.append(readBtn, removeBtn);
    card.append(title, author, pages, buttonRow);
    libraryEl.appendChild(card);
  });
}

/* ===========================================================
   EVENTS
=========================================================== */
function handleLibraryClick(e) {
  const card = e.target.closest('.book-card');
  if (!card) return;

  const id = card.dataset.id;
  const action = e.target.dataset.action;

  if (action === 'remove') {
    removeBookFromLibrary(id);
    render();
  } else if (action === 'toggle-read') {
    const book = findBook(id);
    if (book) {
      book.toggleRead();
      render();
    }
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const pages = Number(document.getElementById('pages').value);
  const read = document.getElementById('read').checked;

  if (!title || !author || !pages) return;

  addBookToLibrary(title, author, pages, read);
  render();

  e.target.reset();
  document.getElementById('book-dialog').close();
}

function initEvents() {
  const dialog = document.getElementById('book-dialog');
  const newBookBtn = document.getElementById('new-book-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const form = document.getElementById('book-form');
  const libraryEl = document.getElementById('library');

  newBookBtn.addEventListener('click', () => dialog.showModal());
  cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
  });
  form.addEventListener('submit', handleFormSubmit);
  libraryEl.addEventListener('click', handleLibraryClick);
}

/* ===========================================================
   INIT: seed a couple of books so the display isn't empty,
   then render + wire up events.
=========================================================== */
function init() {
  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
  addBookToLibrary('Dune', 'Frank Herbert', 412, false);

  render();
  initEvents();
}

document.addEventListener('DOMContentLoaded', init);
