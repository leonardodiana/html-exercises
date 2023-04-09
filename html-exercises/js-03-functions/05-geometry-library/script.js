/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 03 Exercise 05
 */
function calculateCircumference(radius){
    const pi = 3.14;
    circumference=2*pi*radius;
    console.log("Circumference is "+ circumference);
}
function calculateArea(radius){
    const pi = 3.14;
    area=pi*radius*radius;
    console.log("Circumference is "+ area);
}

calculateArea(7);
calculateCircumference(7);