

let myLibary = [];

// book class
function Book(title, artist, pages) {
this.title = title;
this.artist = artist;
this.pages = pages;
};




//// closes Modal 
const modalBg = document.querySelector('.bg-modal');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    modalBg.style.display = 'none';
 
})


/// Add book button displays form
const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', function() {
    modalBg.style.display = 'flex';
})


// Add a book from form
document.querySelector('#formBook').addEventListener('submit', (e)=> {
    // Prevent submit
    e.preventDefault();


    // Get Values from form
    const title = document.querySelector('#title').value;
    const artist = document.querySelector('#artist').value;
    const pages = document.querySelector('#pages').value;

    // Add them to library
    const book = new Book(title, artist, pages);
    myLibary.push(book);
    addBookStyle(book);
    modalBg.style.display = 'none';  
    clearFields();
});

// Clear Form Fields
function clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#artist').value = '';
    document.querySelector('#pages').value = '';
}


// when a is passed on addbookstyle create a book box
function addBookStyle(a) {
    const bookBox = document.querySelector('.book-box');
    const addBookDiv = document.createElement('div');
    addBookDiv.className = 'book';

    addBookDiv.innerHTML = `
    <p class="top-text">Title: <span class="title">${a.title}</span></p>
    <p>Artist: <span class="artist">${a.artist}</span></p>
    <p>Pages: <span class="pages">${a.pages}</span></p>
    <div class="btn">
        <button class="read-status">Read</button>
        <button class="remove" onclick="deleteBook('${a.title}')">Remove</button>
    </div>
    `;
    bookBox.appendChild(addBookDiv);
};

// deletes books from myLibrary
function deleteBook() {
    let book = myLibary.findIndex(e => e.title == title);
    myLibary.splice(book,1);
};



// read button

function checkIfRead() {
    const readStatus = document.querySelector('.read-status');
    readStatus.addEventListener('click', function(){
        if(read == 'false')
    })
}

