
class Book {
    constructor(id, author, title, pages, isRead) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
    }
}


function addBookToLibrary() {
    let form = document.querySelector('form');
    let author = document.getElementById("authorInput").value;
    let title = document.getElementById("titleInput").value;
    let pages = document.getElementById("pagesInput").value;
    let isRead = document.getElementById("readInput");
    let id  = Math.floor(Math.random() * 100);
    if (isRead.checked) {
        isRead = true;
    } else {
        isRead = false;
    }
    let book = new Book(id, author, title, pages, isRead);

    firebase.firestore().collection(`${firebase.auth().currentUser.uid}`).add({
        id, author, title, pages, isRead,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => { loadCards() }).catch(function(error) {
        console.error('Error writing new book to database', error);
    })

    form.reset();
}

function removeBook(id) {
    let book = document.getElementById(id);
    if(book) {
        book.parentNode.removeChild(book);
    }

    let query = firebase.firestore().collection(`${firebase.auth().currentUser.uid}`).where('id', '==', id);
    query.get().then(function(snapshot) {
        snapshot.forEach(function(doc) {
            doc.ref.delete();
        });
    }).then(() => {
        loadCards();
    })
}

function changeStatus(id) {
    let query = firebase.firestore().collection(`${firebase.auth().currentUser.uid}`).where('id', '==', id);
    query.get().then(function(snapshot) {
        snapshot.forEach(function(doc) {
            if(doc.data().isRead) {
                doc.ref.update({isRead: false}).then(() => { loadCards() })
            } else {
                doc.ref.update({isRead: true}).then(() => { loadCards() })
            }
        });
    });
}

function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function signOut() {
    firebase.auth().signOut();
}
//Initiate Firebase Auth
function initFirebaseAuth() {
    //Listen to auth state changes
    firebase.auth().onAuthStateChanged(authStateObserver);
}

function authStateObserver(user) {
    if(user) {
        signInElement.textContent = "Sign out"
        loadCards();
    } else {
        signInElement.textContent="Sign in"
        document.querySelector('#container').innerHTML = '';
    }
}


//GUI
//generate cards...
const container = document.querySelector('#container');

function loadCards() {
    container.innerHTML = '';

    const query = firebase.firestore()
                    .collection(`${firebase.auth().currentUser.uid}`)
                    .orderBy('timestamp', 'desc');

    query.get().then(function(snapshot) {
        snapshot.forEach(function(doc) {
                const book = doc.data();
                const card = document.createElement('div');
                const title = document.createElement('p');
                const author = document.createElement('p');
                const pages = document.createElement('p');
                const isRead = document.createElement('p');
                const removeBookButton = document.createElement('button');

                isRead.onclick = () => {
                    changeStatus(book.id);
                };

                title.setAttribute("class", "titles");
                author.setAttribute("class", "authors");
                pages.setAttribute("class", "pages");
                isRead.setAttribute("class", "read");
                removeBookButton.setAttribute("class", "removeBookButton");

                card.setAttribute("class", "cards");
                card.setAttribute("id", `${book.id}`)
            
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
        })
    })
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


//Initialize...
const signInElement = document.getElementById("sign-in");
signInElement.addEventListener("click", () => {
    if (signInElement.textContent === "Sign in") {
        signIn()
    } else {
        signOut();
    }
})
initFirebaseAuth();

