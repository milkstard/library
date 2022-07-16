let myLibrary = [];
let inputAuthor = document.querySelector("#author").value;
const gridContainer = document.querySelector('.main-content');
const button = document.querySelector('#btn');
const form = document.querySelector('.form')
const buttonSubmit = document.querySelector('input[type="submit');
const modalContainer = document.querySelector('.modal-container');
const xModal = document.querySelector('.close');

class Book{
    constructor(book, author, pages, read){
        this.book = book;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    /*
    get book(){
        return this._book;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }

    get read(){
        return this._read;
    }

    set book(x){
       this._book = x;
    }

    set author(x){
        this._author = x;
    }
    
    set pages(x){
        this._pages = x;
    }

    set read(x){
        this._read = x;
    }*/
}

function getDataForm(e){
    //e.preventDefault();
    if(form.checkValidity()){
        var formData = new FormData(form);
        addBookToLibrary(formData.get('book'),formData.get('author'),formData.get('pages'),form[3].checked ? true:false);
    }
}

//check if there are child nodes
function mainContentChildDelete(){
    let mainContent = document.querySelector('.main-content');
    if(mainContent.hasChildNodes()){
        while(mainContent.firstChild){
            mainContent.removeChild(mainContent.firstChild)
        }
    }
}

/*function Book(book, author, pages, read){
    this.book = book;
    this.author = author; 
    this.pages = pages;
    this.read = read;
}*/

function addBookToLibrary(book, author, pages, read){
    const bookList = new Book(book, author, pages, read);
    console.log(bookList);
    myLibrary.push(bookList);
    mainContentChildDelete();
    showBooks();
    clearInput();
    modalContainer.style.display = "none";
}



//input clear
function clearInput(){
    form.reset();
}
//generate tr and td
function generateTable(tableG, dataG,index){
    for(key in dataG){
        let row = tableG.insertRow();
        let td = row.insertCell();
        let text = document.createTextNode(key.charAt(0).toUpperCase()+key.slice(1) + ":" + dataG[key]);
        if(key==='read'){
            let textTemp = '';
            if(dataG[key]===true)
                textTemp = document.createTextNode("✔");
            else
                textTemp = document.createTextNode("✖");
            text = document.createTextNode(key.charAt(0).toUpperCase()+key.slice(1) + ": ");
            //inline-flex the td
            td.style.display = 'inline-flex'
            td.style.gap = '10px';
            //create 2 div to become child of td
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            //create new cell for the new created element
            let tempReadBtn = document.createElement('button');
            tempReadBtn.appendChild(textTemp);
            //check to color the textcontent
            if(dataG[key]===true)
                tempReadBtn.style.color = 'green'
            else
                tempReadBtn.style.color = 'red'
            //append divs contents
            div1.appendChild(text);
            div2.appendChild(tempReadBtn)
            tempReadBtn.classList.add('buttonEdit')
            tempReadBtn.dataset.indexN = index;
            //append divs to td
            td.appendChild(div1);
            td.appendChild(div2);
            //td.appendChild(text);
            td.dataset.read = dataG[key];
        }else{
            td.appendChild(text);
            td.dataset.read = dataG[key];
        }
    }
}

//create table to show books
function showBooks(){
    mainContentChildDelete();
    myLibrary.forEach((element,index) => {
        let table = document.createElement('table');
        let card = document.createElement('div');
        //add dataset
        card.dataset.indexNumber = index;
        let tempBtn = document.createElement('button');
        tempBtn.textContent = "x";
        //add dataset
        tempBtn.dataset.indexNumber = index;
        //add class
        tempBtn.classList.add('remove');
        card.classList.add('card');
        gridContainer.appendChild(card);
        card.appendChild(table);
        generateTable(table,element,index)
        //add a last button to remove a book from library
        let cellTemp = table.insertRow().insertCell();
        cellTemp.appendChild(tempBtn);
    });
}

//remove node/child
function removeNode(e){
    const tempCard = document.querySelectorAll('.card');
    tempCard.forEach(element => {
        if(element.dataset.indexNumber === e){
            element.remove();
            myLibrary.splice(e,1);
        }
            
    })
    //const tempDelete = document.querySelector()
}
//to get input data
document.addEventListener('DOMContentLoaded', function(){
    buttonSubmit.addEventListener('click', getDataForm, false);
}, false);

//opens modal to add book
button.addEventListener('click', element => {
    modalContainer.style.display = "block";
    showBooks();
})

//closes modal if clicked
modalContainer.addEventListener('click', element => {
    if(element.target.classList.value === "modal-container"){
        modalContainer.style.display = "none";
    }
})

//close modal pressed
xModal.addEventListener('click',()=>{
    modalContainer.style.display = "none";
})
//remove button since we cannot add a eventListener
//to non-existing element we will addListener to
//all the document
document.addEventListener('click', element =>{
    if(element.target.classList.value === 'remove')
        removeNode(element.target.dataset.indexNumber);

    
    //check if buttonEdit is pressed
    if(element.target.classList.value === 'buttonEdit'){
        const xtemp = element.target.dataset.indexN;
        // const xx = document.querySelector('[data-index-n = "' + xtemp + '"]')
        if(myLibrary[xtemp].read === true){
            myLibrary[xtemp].read = false
            console.log("yes")
        }else{
            myLibrary[xtemp].read = true
        }
        showBooks();
    }
})
