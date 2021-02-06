// freeCodeCamp Basic Algorithm Scripting
// Lesson 1
// Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);

// Lesson 2
// Reverse a String

function reverseString(str) {
  let revStr = "";
  for (let i=str.length-1; i>=0; i--) {
    revStr += str[i];
  }
  return revStr;
}

reverseString("hello");

// Lesson 3
// Factorialize a Number

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
// Find the Longest Word in a String

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
// Return Largest Number in Arrays

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
// Confirm the Ending

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
// Repeat a String x times

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
// Truncate a String

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
// Return First Element of and Array that Returns "true"

function findElement(arr, func) {
  for (let x of arr) {
    if (func(x) === true) {
      return x;
    }
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

// Lesson 10
// Check if a Value is a Boolean primitive

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
// Return Provided String with the First Letter of Each Word Capitalized and all Others Letters Lower Case
// My first answer.  Needs work.  Will edit.

function titleCase(str) {
  let finalStr = "";
  let strArr = str.split(" ");
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

// Second Answer After Some Study

function titleCase(str) {
  let finalArr =[];
  let strArr = str.toLowerCase().split(" ");
  for (let i=0; i<strArr.length; i++) {
    let capsWord = strArr[i].replace(strArr[i][0], function (x) {
      return x.toUpperCase();
    });
    finalArr.push(capsWord);
  }
  return finalArr.join(" ");
}

titleCase("I'm a little tea pot");

// Example code that I really like

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

// Lesson 12
// Copy each element from arr1 into arr2 beginning at a given index of Arr 2.

function frankenSplice(arr1, arr2, n) {
  let finalArr = [];
  finalArr.push(...arr2);
  for (let i=0; i<arr1.length; i++, n++) {
    finalArr.splice(n, 0, ...arr1.slice(i, i+1));
  }
  return finalArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Clean up after studying

function frankenSplice(arr1, arr2, n) {
  let finalArr = arr2.slice();
  for (let i=0; i<arr1.length; i++) {
    finalArr.splice(n, 0, arr1[i]);
    n++;
  }
  return finalArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Alternate Solution from website that I like

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Lesson 13
// Remove all "falsy" values (false, null, 0, "", undefined, and NaN) from an array
// Answer using a For loop
function bouncer(arr) {
  let finalArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i]) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

bouncer([null, NaN, 1, 2, undefined]);

// Answer using suggested ".filter()" method

function bouncer(arr) {
  function removeFalsy(val) {
      return (!!val)
  }
  return arr.filter(removeFalsy);
}


bouncer([null, NaN, 1, 2, undefined]);

// Last Commit
// Lesson 14
// Return the lowest index at which a value should be inserted into an arry once the array has been sorted.

function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a-b});
  
    for (let i=0; i<arr.length; i++) {
      if (num <= arr[i]) {
        return i;
        }  
    }
    return arr.length;
  }

  // Alternative solution from FCC list of solutions.

  function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

// Lesson 15
// Return "true" if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  let i = 0;

  while (i < str2.length) {
    if (str1.indexOf(str2[i]) < 0) {
      return false;
    }
    i++;
  }
  return true;
}

mutation(["hello", "hey"]);

// Lesson 16
// Split an array into groups the length of "size" and return them as a two-dimensional array

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Completed all lessons!  :D