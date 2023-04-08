/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 04 Exercise 03
 */

/**
 * function thaat returns a grade for the score
 * @param {number} score
 * @returns {string} grade
 */
function assignGrade(score){
    let grade;
    if (score>90){
        grade="A"
    }
    else if (score>80){
        grade="B"
    }
    else if (score>70){
        grade="C"
    }
    else if (score>60){
        grade="D"
    }
    else if (score>50){
        grade="E"
    }
    else if (score<49){
        grade="F"
    }
    return grade;
}

let grade;
grade=assignGrade(87);
console.log(grade);
grade=assignGrade(34);
console.log(grade);
grade=assignGrade(65);
console.log(grade);
grade=assignGrade(99);
console.log(grade);