let myLibrary = [{book: "O", author: "Jay"},{book: "D", author: "Mark"}];
const gridContainer = document.querySelector('.main-content');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const button = document.querySelector('#btn');
const modalContainer = document.querySelector('.modal-container')

//opens modal to add book
button.addEventListener('click', element => {
    modalContainer.style.display = "block";
})

//closes modal if clicked
modalContainer.addEventListener('click', element => {
    modalContainer.style.display = "none";
})

function Book(){

}

function addBookToLibrary(){

}

//generate tr and td
function generateTable(tableG, dataG){
    for(key in dataG){
        let row = tableG.insertRow();
        let td = row.insertCell();
        let text = document.createTextNode(key.charAt(0).toUpperCase()+key.slice(1) + ":" + dataG[key]);
        td.appendChild(text);
    }
}

//create table to show books
function showBooks(){
    myLibrary.forEach(element => {
        let table = document.createElement('table');
        let card = document.createElement('div');
        card.classList.add('card');
        gridContainer.appendChild(card);
        card.appendChild(table);
        generateTable(table,element)
    });
}

showBooks();