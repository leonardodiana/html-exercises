/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 04
 */

/**
 * this function return a string with the first letter capitalized
 * @param {string} phrase
 * @returns the string with first letter capitalized
 */

function capital(phrase){
    let capitalizedChar= phrase.charAt(0).toUpperCase();
    let slicedPhrase= phrase.slice(1);
    let capitalized=capitalizedChar+slicedPhrase
    return capitalized;
}
/**
 * this function return a string with the first letter capitalized, it use the @function capital
 * @param {string} phrase
 * @returns the string with first letter of each word capitalized
 */

function capitalSentence(phrase){
let i;
const array=phrase.split(" ");
let capitalSentence= capital(array[0]);
for(i=1; i<array.length; i++){
    capitalSentence=capitalSentence+" "+capital(array[i]);
}
return capitalSentence;
}



let phrase = "hello world";
console.log(capital(phrase));
 phrase= "my name is leonardo"
console.log(capitalSentence(phrase));
