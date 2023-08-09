const body = document.querySelector("#main");

let books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925,
        isFiction: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960,
        isFiction: true
    },
    {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949,
        isFiction: true
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        publicationYear: 1932,
        isFiction: true
    },
    {
        title: "Sapiens: A Brief History of HumanKind",
        author: "Yuval Noah Harari",
        publicationYear: 2011,
        isFiction: false
    },
    {
        title: "The Power of Habit",
        author: "Charles Duhigg",
        publicationYear: 2012,
        isFiction: false
    }
]


const title = books.filter((books) => books.title);
let bookTitle = ``
title.map((tit) => {
    bookTitle += `<li>${tit.title}</li>`;
})

// task 2
const fiction = books.filter((books) => { return books.isFiction});
let nonFiction = books.filter((books) => { return !books.isFiction});
let fictionList = ``
let nonFictionList = ``

    fiction.map((novel) =>{
        fictionList += `<li>${novel.title}</li>`;
    });
    nonFiction.map((novel) =>{
        nonFictionList += `<li>${novel.title}</li>`;
    });
    


// task 3
 let bookInfo = `` 
 for (let i = 0; i < books.length; i++){
    bookInfo += `<li><p>${books[i].title} was written by ${books[i].author} in the year ${books[i].publicationYear} and it is</p></li>`
 };

//  task 4



body.innerHTML = `
<h1>Libary Management</h1>
<h3>Task 1: Display Book Titles</h3>
<ol>${bookTitle}</ol>

<h3>Task 2: categorize Books</h3>
<strong>Fiction Books : </strong>
<ul>${fictionList}</ul>

<strong>Non-Fiction Books : </strong>
<ul>${nonFictionList}</ul>


<h3>Task 3: Display Book Information</h3>
<ul>${bookInfo}</ul>


`;