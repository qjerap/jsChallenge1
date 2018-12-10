// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

let reverseString = (str) => str.split('').reverse().join('');

let reverseString2 = (str) => {
    let revStr = [];
    for(i=0;i<str.length; i++){
        revStr.unshift(str[i])
    }
    return revStr.join('')
}

let reverseString3 = (str) => {
    let revStr = '';
    for(char of str){ revStr = char + revStr }
    return revStr
}

let reverseString4 = (str) => {
    let revStr = ''
    str.split('').forEach( char => revStr = char + revStr)
    return revStr
}

let reverseString5 = (str) => {

    return str.split('').reduce((revString, char)=> char + revString , '')
}

  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  let isPalindrome = (str) => {
    const revString = str.split('').reverse().join('')
    return revString === str
  }
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {}
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {}
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {}
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {}
  
  
  
  // Call Function
  const output = reverseString('hello');
  
  console.log(output);