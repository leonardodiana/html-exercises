/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 043Exercise 04
 */
function calculateSupply(age, dailyAmount){
    const maxAge= 90;
    numberCoffee= (maxAge - age)*365*dailyAmount,
    console.log("You will need " + numberCoffee + " cups of coffe until the ripe old age of " +maxAge);
}

calculateSupply(28,3);
calculateSupply(29,4);
calculateSupply(32,3);

