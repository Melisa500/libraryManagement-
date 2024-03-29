class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

let book = [];

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        let newBook = new Book(title, author, isbn);
        book.push(newBook);
        showBooks();
        cleanForm();
    } else {
        alert('Please complete all fields');
    }
}

function showBooks() {
    let booksList = document.getElementById('books-list');
    booksList.innerHTML = '';

    book.forEach(book => {
        booksList.innerHTML += `<div><strong>Title:</strong> ${book.title}, <strong>Author:</strong> ${book.author}, <strong>ISBN:</strong> ${book.isbn}</div>`;
    });
}


function cleanForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
