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
  
  let reverseInt = int => parseInt(int.toString().split('').reverse().join('')) * Math.sign(int)
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

  let capitalizeLetters = (str) => {   
       let strArr = str.toLowerCase().split(' ')
       for(let i = 0; i < strArr.length; i++) {
           strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1) 
       }
       return strArr.join(' ')
  }

  let capitalizeLetters2 = (str) => {
      return str.toLowerCase()
      .split(' ')
      .map( word => word[0].toUpperCase() + word.substring(1))
      .join(' ')  
  }

  let capitalizeLetters3 = (str) => {
      return str.replace(/\b[a-z]/gi, function(char){return char.toUpperCase()})
  }

//   First letter of first word sentence is uppercase.... NOT WHAT WAS ASKED!
  let capitalizeLetters2 = (str) => {
      str = str.trim()
      const firstLetter = str.charAt(0)
      return str.replace(firstLetter, firstLetter.toUpperCase() )
  }

 
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
      let strObj = {}
      let maxNum = 0;
      let maxChar = '';
      str.split('').forEach((char)=>{
          if(strObj[char]){
            strObj[char]++
          } else {
              strObj[char] = 1;
          }
      })

      for(let char in strObj) {
          if(strObj[char] > maxNum) {
              maxNum = strObj[char]
              maxChar = char
            }
      }

      return maxChar

  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  let fizzBuzz = () => {
    for(i=0;i<101;i++){
        if(i%3 == 0 ){
            if(i%5 == 0){console.log('FizzBuzz')}
            else {console.log('Fizz')}
        }
        else if(i%5 == 0 && i%3 !== 0){console.log('Buzz')}
        else {console.log(i)}
  }
}
  
  // Call Function
  const output = reverseString('hello');
  
  console.log(output);