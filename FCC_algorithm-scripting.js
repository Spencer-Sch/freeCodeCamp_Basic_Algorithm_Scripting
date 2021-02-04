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

// Last Commit
// Lesson 4

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWordLen = 0;
    for (let i=0; i<strArr.length; i++) {
      if (strArr[i].length > longestWordLen) {
        longestWordLen = strArr[i].length;
      }
    }
  
  return longestWordLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Alternate using For...of loop

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWordLen = 0;
  let x;
    for (x of strArr) {
       if (x.length > longestWordLen) {
        longestWordLen = x.length;
      }
    }
  return longestWordLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Alternate using chained methods

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Lesson 5

function largestOfFour(arr) {
  let largestArr = [];
  let x;
  for (x of arr) {
    largestArr.push(Math.max(...x));
  }

  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Alternate using For...of loops

function largestOfFour(arr) {
  let largestArr =[];
  let subArr;
  let elm;
  for (subArr of arr) {
    let currentLargest = subArr[0];
    for (elm of subArr) {
      if (elm > currentLargest) {
        currentLargest = elm;
      }
    }
    largestArr.push(currentLargest);
  }
  return largestArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

// Last Commit
// Lesson 6

// My initial answer
function confirmEnding(str, target) {
  let endOfString = str.slice(-target.length);
  if (endOfString === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");

// My answer edited down
function confirmEnding(str, target) {
  if (str.slice(-target.length) === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");

// My answer edited further
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
  
}

confirmEnding("Bastian", "n");

// Lesson 7

// My answer
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    return str.concat(repeatStringNumTimes(str, num-1));
  }
}

repeatStringNumTimes("abc", 3);

// Alternate recursive solution
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);

// Lesson 8

// My initial answer
function truncateString(str, num) {
  
  if (num >= str.length) {
    return str;
  }
  return str.slice(0, num).concat("...");
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// My answer edited to include ( ? : )

function truncateString(str, num) {
  return num >= str.length ? str : str.slice(0, num).concat("...");
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Lesson 9

function findElement(arr, func) {
  for (let x of arr) {
    if (func(x) === true) {
      return x;
    }
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

// Lesson 10

// First answer
function booWho(bool) {
  if (bool === true) {
    return true;
  } else if (bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);

// Second answer
function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

booWho(null);

// Edited second anser
function booWho(bool) {
  return bool === true || bool === false;
}

booWho(null);

// Lesson 11
// My first answer.  Needs work.  Will edit.
function titleCase(str) {
  let finalStr = "";
  let strArr = str.split(" ");
  console.log(strArr);
  for (let i=0; i<strArr.length; i++) {
    if (i>0) {
      finalStr += " ";
    }
    for (let j=0; j<strArr[i].length; j++) {
      if (j === 0) {
        let capLetter = strArr[i][j].toUpperCase();
        finalStr += capLetter;
      } else {
        let nonCapLetter = strArr[i][j].toLowerCase();
        finalStr += nonCapLetter;
      }
    }
    
  }
  return finalStr;
}

titleCase("I'm a little tea pot");