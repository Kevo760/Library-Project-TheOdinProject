

let myLibary = [];

// Book class
function Book(title, artist, pages) {
this.title = title;
this.artist = artist;
this.pages = pages;
this.read = false;
};

// Puts read to true
Book.prototype.haveRead = function() {
    this.read = true;
};

// put read to false
Book.prototype.notRead = function() {
    this.read = false;
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

    // Handles read or not read
    const readCheckbox = document.querySelector('#haveRead');
    if(readCheckbox.checked == true) {
        book.haveRead();
    } else {
        book.notRead();
    };

    // Pushes book to library
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
    document.querySelector('#haveRead').checked = false;
}


// when a is passed on addbookstyle create a book box
function addBookStyle(a) {
    const bookBox = document.querySelector('.book-box');
    const addBookDiv = document.createElement('div');
    addBookDiv.className = `book ${a.title}`;

    addBookDiv.innerHTML = `
    <p class="top-text ${a.title}">Title: <span class="title">${a.title}</span></p>
    <p>Artist: <span class="artist">${a.artist}</span></p>
    <p>Pages: <span class="pages">${a.pages}</span></p>
    `;

    // Creates btn div section for book
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn');
    addBookDiv.appendChild(btnDiv);

    // Creates read button
    if(a.read === true) {
        // if book.read is true create button that will put it to to true
        const readStatusBtn = document.createElement('button');
        readStatusBtn.classList.add('read-status');
        readStatusBtn.innerText = 'Read';
        readStatusBtn.style.backgroundColor = 'hsl(147, 50%, 47%)';
        // Click Event that changes button to read or not read and adjust the array
        readStatusBtn.addEventListener('click', function() {
            if(a.read === true) {
                readStatusBtn.innerText = 'Not Read';
                readStatusBtn.style.backgroundColor = 'hsl(0, 0%, 85%)'; 
                a.notRead();
                console.table(myLibary);
            } else {
                readStatusBtn.innerText = 'Read';
                readStatusBtn.style.backgroundColor = 'hsl(147, 50%, 47%)';
                a.haveRead();
                console.table(myLibary);
            }
        });
        btnDiv.appendChild(readStatusBtn);
    } else {
        const readStatusBtn = document.createElement('button');
        readStatusBtn.classList.add('read-status');
        readStatusBtn.innerText = 'Not Read';
        readStatusBtn.style.backgroundColor = 'hsl(0, 0%, 85%)';
         // Click Event that changes button to read or not read and adjust the array
        readStatusBtn.addEventListener('click', function() {
            if(a.read === true) {
                readStatusBtn.innerText = 'Not Read';
                readStatusBtn.style.backgroundColor = 'hsl(0, 0%, 85%)'; 
                a.notRead();
            } else {
                readStatusBtn.innerText = 'Read';
                readStatusBtn.style.backgroundColor = 'hsl(147, 50%, 47%)';
                a.haveRead();
            }
        });
        btnDiv.appendChild(readStatusBtn);
    }



    // Creates remove button
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerHTML = "Remove";
    
    // Function that attaches the deleteBook on click
    btnDiv.appendChild(removeBtn);
    removeBtn.addEventListener('click', function(){
        deleteBook(a);
    });

    bookBox.appendChild(addBookDiv);
};

// deletes book array from myLibrary
function deleteBook() {
    let book = myLibary.findIndex(a => a.title == title);
    myLibary.splice(book,1);
};


// Deletes book design
const bookBox = document.querySelector('.book-box');
bookBox.addEventListener('click', deleteBox);
function deleteBox(e) {
    const item = e.target;
    if(item.classList[0] === 'remove') {
        item.parentElement.parentElement.remove();
    }
};










