let myLibrary = [{name: "O", author: "Jay"},{name: "D", author: "Mark"}];
const gridContainer = document.querySelector('.grid-container');
const book = document.querySelector('#book');
const author = document.querySelector('#author');

function Book(){

}

function addBookToLibrary(){

}

function generateTable(tableG, dataG){
    let row = tableG.insertRow();
    for(key in dataG){
        let td = row.insertCell();
        let text = document.createTextNode(dataG[key]);
        td.appendChild(text);
    }
}

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