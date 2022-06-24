let myLibrary = [{book: "O", author: "Jay"},{book: "D", author: "Mark"}];
let inputAuthor = document.querySelector("#author").value;
const gridContainer = document.querySelector('.main-content');
const button = document.querySelector('#btn');
const form = document.querySelector('.form')
const buttonSubmit = document.querySelector('input[type="submit');
const modalContainer = document.querySelector('.modal-container')


function getDataForm(e){
    e.preventDefault();
    var formData = new FormData(form);
    addBookToLibrary(formData.get('book'),formData.get('author'),formData.get('pages'),form[3].checked ? true:false);
}

function Book(){

}

function addBookToLibrary(book, author, pages, read){
    alert(book + author + pages + read);
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
        let tempBtn = document.createElement('button');
        tempBtn.textContent = "REMOVE";
        card.classList.add('card');
        gridContainer.appendChild(card);
        card.appendChild(table);
        generateTable(table,element)
        //add a last button to remove a book from library
        let cellTemp = table.insertRow().insertCell();
        cellTemp.appendChild(tempBtn);
    });
}
//to get input data
document.addEventListener('DOMContentLoaded', function(){
    buttonSubmit.addEventListener('click', getDataForm, false);
}, false);

//opens modal to add book
button.addEventListener('click', element => {
    modalContainer.style.display = "block";
})

//closes modal if clicked
modalContainer.addEventListener('click', element => {
    if(element.target.classList.value === "modal-container"){
        modalContainer.style.display = "none";
    }
})