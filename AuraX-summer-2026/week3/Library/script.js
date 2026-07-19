const libraryContainer = document.querySelector("#library-container");
const newBookBtn = document.querySelector("#new-book-btn");

const dialog = document.querySelector("#book-dialog");

const closeDialogBtn = document.querySelector("#close-dialog");

const bookForm = document.querySelector("#book-form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

const myLibrary = [];
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);

console.log(myLibrary);

function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? "Read" : "Not Read"}</p>
        `;

    libraryContainer.appendChild(card);
  });
}
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  addBookToLibrary(title, author, pages, read);
function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");
  card.dataset.id = book.id;

  card.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read ? "Read" : "Not Read"}</p>
        <button class="toggle-btn">
    ${book.read ? "Mark Unread" : "Mark Read"}
</button>
        <button class="delete-btn" data-id="${book.id}">Delete</button>
    `;
  const deleteButton = card.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    const index = myLibrary.findIndex((item) => item.id === book.id);

    myLibrary.splice(index, 1);
    displayBooks();

  });

  const toggleButton = card.querySelector(".toggle-btn");
  toggleButton.addEventListener("click", () => {
    book.toggleRead();

    displayBooks();
  });
  
  return card;
}
  function displayBooks() {
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book) => {
      const card = createBookCard(book);

      libraryContainer.appendChild(card);
    });
  }
  displayBooks();

  bookForm.reset();

  dialog.close();
});

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
});