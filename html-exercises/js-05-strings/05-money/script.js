/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 05
 */

/**
 * function that return the amount of dollard
 * @param {number} amount
 * @return dollars
*/

function Money(amount){
let dollars;
if (amount >1){
    dollars=amount+" dollars";
}
else if(amount==1){
    dollars=amount+" dollar";
}
else if(amount==0){
    dollars="YOU DON'T HAVE MONEY!!";
}
return dollars;
}

let amount=35;
console.log(Money(amount));
amount=0;
console.log(Money(amount));
amount=1;
console.log(Money(amount));