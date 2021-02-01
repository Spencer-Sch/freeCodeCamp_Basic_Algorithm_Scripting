// freeCodeCamp Basic Algorithm Scripting
// Lesson 1

function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);

// Lesson 2

function reverseString(str) {
  //convert given string into an array of the individual characters
  let arrStr = [];
  arrStr.push(...str);

  //loop through array and reverse the order of the characters
  let revStr = "";
  for (let i=str.length-1; i>=0; i--) {
    revStr += arrStr[i];
  }
  return revStr;
}

reverseString("hello");