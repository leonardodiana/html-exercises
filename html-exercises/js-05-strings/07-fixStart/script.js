/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 07
 */

/**
 * function that returns al the occurrencies of the first letter replaced by a *
 * @param {string} word
 * @returns a new string
 */

function fixStart(word){
    let first=word.charAt(0);
    let sliced=word.slice(1);
    let fixed=first.concat(sliced.replaceAll(first, "*"));
    return fixed;
}

let word="bubble"
console.log(fixStart(word));
word="ramarro";
console.log(fixStart(word));