/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 04 Exercise 01
 */

/**
 * function that returns the greater number
 * @param {number}num1
 * @param {number}num2
 */
function greaterNum(num1, num2) {
    let max=num1; 
    if (num2>num1){
        max=num2;
    }
    console.log("The greater number of "+ num1 +" and " + num2 +" is " + max);
}

greaterNum(4,5);
greaterNum(116534,78463);