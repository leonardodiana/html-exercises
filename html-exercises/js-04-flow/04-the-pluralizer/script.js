/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 04 Exercise 04
 */

/**
 * function that returns a number and a pluralized form
 * @param {string} noun
 * @param {number} number
 * @return {string} plural
 */
function pluralizer(noun, number){
    if(noun=="goose"){
        plural=number+" geese";
    }
    else{
    plural=number+" "+noun+"s";
    }
    return plural;
}

let plural;
plural=pluralizer("cat",3);
console.log(plural);
plural=pluralizer("goose",3);
console.log(plural);