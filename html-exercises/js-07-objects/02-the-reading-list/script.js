/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 07 Exercise 02
 */

let firstBook={
    title: "Guerra e pace",
    author: "Lev Tolstoj",
    alreadyread: true
}
let secondBook={
    title: "Il processo",
    author: "Franz Kafka",
    alreadyread: false
}
let thirdBook={
    title: "Il barone rampante",
    author: "Italo Calvino",
    alreadyread: false
}
let fourthBook={
    title: "Moby Dick",
    author: "Hermann Melville",
    alreadyread: true
}
let books = [];
books.push(firstBook,secondBook,thirdBook,fourthBook)
books.forEach(element => console.log(element.title+ " by "+ element.author))


books.forEach(function read(element){
    if(element.alreadyread===true){
        console.log("You have already read " + element.title+ " by " + element.author)
    }
    else{
        console.log("You still need to read " + element.title+ " by " + element.author)
    }
})


