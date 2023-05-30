let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        alreadyRead: false
    }, {
        title: '1984',
        author: 'George Orwell',
        alreadyRead: true
    }
];

let body = document.body;
let newh1 = document.createElement('h1');
newh1.textContent="My Book list";
body.appendChild(newh1);
let newUl=document.createElement("ul");
body.appendChild(newUl);
for (const element of books) {
    let newBook=document.createElement("li");
    newBook.textContent=element.title + ', '+ element.author;
    newUl.appendChild(newBook);
}
let liCollection= document.getElementsByTagName('li');
books[0].url='img/everyday.jpg'
books[1].url='img/human.jpg'
books[2].url='img/harry.jpg'
books[3].url='img/1984.jpg'

for (let i=0; i<liCollection.length; i++) {
    let newImg=document.createElement("img");
    newImg.src=books[i].url;
    newImg.height='200';
    newImg.width='125';
    liCollection[i].appendChild(newImg);
    if(books[i].alreadyRead==true){
    liCollection[i].style.color='red';
    }
}

