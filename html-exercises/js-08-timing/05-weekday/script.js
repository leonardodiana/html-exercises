/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 08 Exercise 05
 */

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  function getWeekGiorno(date) {
    let days = ['Do', 'LU', 'MA', 'ME', 'GIO', 'VEN', 'SA'];
  
    return days[date.getDay()];
  }

  function getDayLan(date, lan){
    if (lan==en){
       console.log(getWeekDay(date))
    }
    if (lan==it){
        console.log(getWeekGiorno(date))
    }
  }
