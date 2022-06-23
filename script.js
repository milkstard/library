let myLibrary = [{book: "O", author: "Jay"},{book: "D", author: "Mark"}];
const gridContainer = document.querySelector('.main-content');
const book = document.querySelector('#book');
const author = document.querySelector('#author');

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