/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 08 Exercise 0
 */

/**
 * function that does something useful
 * @param {string} nome
 */
function useful(nome){
    console.log("Ecco qualcosa di utile, " + nome);
}

/**
 * MAIN
 */
 
setTimeout(useful,10000,"Leonardo");
let timerId=setTimeout(useful,10000,"Leonardo");
clearTimeout(timerId);
