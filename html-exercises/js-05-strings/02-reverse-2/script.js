/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 02
 */

/**
 * Returns a reverse string
 * @param {string} word first string
 * @return {string} string reverse
 */

function reverse(word) {
  
    let reverse = word.charAt(word.length);
    for (let i = word.length; i >= 0; i--) {
      reverse = reverse + word.charAt(i);
    }
  
    return reverse;
  }
  let word="pollo";
  let reverse2=reverse(word);
  console.log(reverse2);
  