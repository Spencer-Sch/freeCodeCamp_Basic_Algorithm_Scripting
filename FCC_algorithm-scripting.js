// freeCodeCamp Basic Algorithm Scripting
// Lesson 1

function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);

// Lesson 2

function reverseString(str) {
  let revStr = "";
  for (let i=str.length-1; i>=0; i--) {
    revStr += str[i];
  }
  return revStr;
}

reverseString("hello");

// Lesson 3

function factorialize(num) {
  if(num > 1) {
    return num * factorialize(num - 1);
  } else {
    return 1;
  }
}

factorialize(5);