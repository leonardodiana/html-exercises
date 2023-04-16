/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 06 Exercise 02
 */

let word = [];
let letters = [];
let i;
let guesses=6;
word.push("m", "o", "t", "o", "r", "e");

for (i = 0; i < word.length; i++) {
    letters.push("_");
}
console.log(letters.join(" "));
console.log("Ti rimangono " + guesses + " tentativi");

/**
 * function that check if the letter is in the Array and show the the current guessed letter
 * @param {string} letter
 */

function guessedLetter(letter) {

    

    let i, contUguali;
    for (i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            letters[i] = letter;
        }

    }
    guesses-- 
    console.log(letters.join(" "));
    console.log("Ti rimangono " + guesses + " tentativi");

    for (i = 0, contUguali=0; i < word.length; i++) {
        if (letters[i]=== word[i]) {
            contUguali++
        }
    }

    if(contUguali===word.length){
        console.log("Hai vinto");
    }
    if(contUguali!==word.length && guesses===0){
        console.log("Hai perso");
    }
    
}
guessedLetter("o");
guessedLetter("a");
guessedLetter("m");
guessedLetter("t");
guessedLetter("e");
guessedLetter("r");

