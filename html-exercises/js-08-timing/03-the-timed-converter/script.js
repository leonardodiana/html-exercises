/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 08 Exercise 03
 */
function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
    
}

let temp;

for (temp=0; temp<100; temp++){
    setTimeout(cToF, 1000, temp);
}
