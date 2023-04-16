/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 06 Exercise 01
 */
let firstChoices = [];
firstChoices.push('red',
    'yellow',
    'blue',
    'green',
    'violet',
    'gold',
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF");
for (let i = 0; i < firstChoices.length; i++) {
    console.log("my #" + (i + 1) + " choice is " + firstChoices[i]);
}
//correct suffixes
for (let i = 0; i < firstChoices.length; i++) {
    if ((i + 1) % 10 === 1 && (i != 10)) {
        console.log("my #" + (i + 1) + "st choice is " + firstChoices[i]);
    }
    else if ((i + 1) % 10 === 2 && (i != 11)) {
        console.log("my #" + (i + 1) + "nd choice is " + firstChoices[i]);
    }
    else if ((i + 1) % 10 === 3 && (i != 12)) {
        console.log("my #" + (i + 1) + "rd choice is " + firstChoices[i]);
    }
    else {
        console.log("my #" + (i + 1) + "th choice is " + firstChoices[i]);
    }
}