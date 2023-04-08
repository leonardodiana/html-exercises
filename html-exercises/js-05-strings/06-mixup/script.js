/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 06
 */

/**
 * function that returns the concatenation of the two strings
(separated by a space) slicing out and swapping the first 2 characters of
each.
 *@param {string} first
 *@param {string} second
 @returns  a third string
 */
function mixUp(first, second){
    let first0=first.charAt(0);
    let second0=second.charAt(0);
    let mixed= first0+second.slice(1)+" "+second0+first.slice(1);
    return mixed;
}

let first= "cat";
let second= "bubble";

console.log(mixUp(first, second));