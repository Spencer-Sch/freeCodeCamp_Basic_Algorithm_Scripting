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