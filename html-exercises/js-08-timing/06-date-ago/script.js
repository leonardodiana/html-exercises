/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 08 Exercise 06
 */

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

  let date = new Date(2015, 0, 2);

  console.log(getDateAgo(date, 3));