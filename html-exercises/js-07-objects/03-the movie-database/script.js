/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 07 Exercise 03
 */

let stars=[];

let firstmovie={
    title: "Il cavaliere oscuro",
    duration: 120,
    stars:5
}
let secondmovie={
    title: "Matrix",
    duration: 120,
    stars:4
}
let thirdmovie={
    title: "Shrek",
    duration: 120,
    stars:3
}
let fourthmovie={
    title: "Mulan",
    duration: 120,
    stars: 5
}
let database=[];
database.push(firstmovie, secondmovie, thirdmovie, fourthmovie);

/**
 * function that print the content of an a element of the array
 * @param {object} movie
 */
function printMovie(movie){
    console.log(movie.title + " lasts for "+ movie.duration + " miniutes. Stars: "+ movie.stars);
}

database.forEach(element => printMovie(element))




