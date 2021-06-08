
function Book(id, author, title, pages, isRead) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.readToggle = function() {
    if (this.isRead) {
        this.isRead = false;
    } else {
        this.isRead = true;
    }
}

function addBookToLibrary() {
    let author = document.getElementById("authorInput").value;
    let title = document.getElementById("titleInput").value;
    let pages = document.getElementById("pagesInput").value;
    let isRead = document.getElementById("readInput");
    let id  = Math.floor(Math.random() * 100);
    //do stuff here
    if (isRead.checked) {
        isRead = true;
    } else {
        isRead = false;
    }
    console.log(`ID: ${id}; ${title} written by ${author} has ${pages} and is ${isRead}`);
    let book = new Book(id, author, title, pages, isRead);
    myLibrary.push(book);
    storage.setItem('library', JSON.stringify(myLibrary));
    loadCards();
}

function removeBook(id) {
    let index = myLibrary.findIndex(book => book.id === id);
    console.log(index);
    myLibrary.splice(index, 1);
    storage.setItem('library', JSON.stringify(myLibrary));
    loadCards();
}

function changeStatus(book) {
    book.readToggle();
    storage.setItem('library', JSON.stringify(myLibrary));
    loadCards();
    console.log(book);
}


//GUI
//generate cards...
const container = document.querySelector('#container');

function loadCards() {
    container.innerHTML = '';
    for(let index in myLibrary) {
        const book = myLibrary[index];

        const card = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const isRead = document.createElement('p');
        const removeBookButton = document.createElement('button');

        isRead.onclick = () => {
            changeStatus(book);
        };

        title.setAttribute("class", "titles");
        author.setAttribute("class", "authors");
        pages.setAttribute("class", "pages");
        isRead.setAttribute("class", "read");
        removeBookButton.setAttribute("class", "removeBookButton");

        card.setAttribute("class", "cards");
        card.setAttribute("id", `${index}thCard`); 
    
        title.textContent = book.title;
        author.textContent = `by ${book.author}`;
        pages.textContent = `${book.pages} pages`;
        isRead.textContent = book.isRead ? 'Read' : 'Not read yet';
        removeBookButton.textContent = 'Remove book';

        removeBookButton.addEventListener('click', () => {
            removeBook(book.id);
        })

        card.appendChild(removeBookButton);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(isRead);
        container.appendChild(card);
    }
}

let addBook =  document.getElementById("addBook");
addBook.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    modal.style.display = "none";
});

//present modal...
let modal = document.getElementById("modalFormContainer");
let add = document.getElementById("add");
let close = document.getElementById("close");

add.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}


//local storage
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '___storage test___'
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }

    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

let storage = window['localStorage'];
let myLibrary = [];

if (storageAvailable('localStorage')) {
    if (!storage.getItem('library')) {
        myLibrary = [];
        console.log('here');
    } else {
        myLibrary = JSON.parse(storage.getItem('library'));
        loadCards();
    }
} else {
    myLibrary = [];
}