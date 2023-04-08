/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 01
 */

/**
 * Returns a reverse string
 * @param word first string
 */

function printReverse(word) {
  
  let reverse = word.charAt(word.length);
  for (let i = word.length; i >= 0; i--) {
    reverse = reverse + word.charAt(i);
  }

  console.log(reverse);
}

let word = "napoli";
printReverse(word);

