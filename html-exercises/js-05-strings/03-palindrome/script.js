/**
 * @file: script.js
 * @author: Leonardo Diana
 *  Unit 05 Exercise 03
 */

/**
 * Returns a reverse string
 * @param {string} word first string
 * @return {string} string reverse
 */
function reverse(word) {
  
    let reverse = word.charAt(word.length);
    for (let i = word.length; i >= 0; i--) {
      reverse = reverse + word.charAt(i);
    }
  
    return reverse;
  }

  /**
   * function that returns true if the string is palindrome and false if it's not, this function use @function reverse
   * @param {string} word
   * @return {boolean}
   */

  function isPalindrome(word){
    let reverseString=reverse(word);

    if (reverseString===word){
        return true;
    }
    else{
        return false;
    }
  }
  /**
   * function that returns true if the string is palindrome and false if it's not, 
   * @param {string} word
   * @return {boolean}
   */

function isPalindrome2(word){
    let i;
    let j;
    for (i = word.length, j=0; i >= 0; i--, j++) {
      
      if (word.charAt(i)===word.charAt(j)){
        return true;
      }
      else{
        return false;
      }
    }

}


  /**
   * MAIN */

  let word="madam";
  let palindrome=isPalindrome(word);
  console.log(palindrome);

  word="madame";
  palindrome=isPalindrome(word);
  console.log(palindrome);

  word="madam";
  palindrome=isPalindrome2(word);
  console.log(palindrome);

  word="madame";
  palindrome=isPalindrome2(word);
  console.log(palindrome);





  