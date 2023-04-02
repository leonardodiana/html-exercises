/*Write a function named calculateSupply that:
○ takes 2 arguments: age, amount per day.
○ calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN cups of coffee to
last you until the ripe old age of X"
● Call that function three times, passing in different values each time
● Bonus:
○ Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)
○ Round the result to a round number*/

function calculateSupply(age, dailyAmount){
    const maxAge= 90;
    numberCoffee= (maxAge - age)*365*dailyAmount,
    console.log("You will need " + numberCoffee + " cups of coffe until the ripe old age of " +maxAge);
}

calculateSupply(28,3);
calculateSupply(29,4);
calculateSupply(32,3);

