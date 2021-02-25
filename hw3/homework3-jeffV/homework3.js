// 1. Given a month as an integer from 1 to 12, return to which quarter of the year 
// it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

function quarterOf(month) {
  // Your code here
  if (month > 0 && month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else if (month > 9 && month <= 12) {
    return 4
  } else {
    return 'Please enter a valid number for the month (1 - 12)';
  }
}

console.log(quarterOf(2))  // return 1
console.log(quarterOf(7))  // return 3
console.log(quarterOf(12)) // return 4
console.log(quarterOf('string')) 


// 2. Make a function that returns the value multiplied by 50 and increased by 6. If 
// the value entered is a string it should return "Error".
function problem(x){
  return typeof(x) !== 'number' ? 'Error' : x * 50 + 6;
}

console.log(problem(2))       // return 106
console.log(problem(10))      // return 506
console.log(problem('hello')) // return 'Error'


// 3. Write a function that takes an array of numbers and returns the sum of the 
// numbers. The numbers can be negative or non-integer. If the array does not 
// contain any numbers then you should return 0.
function sum(array) {
  if (array === undefined || array.length < 1) {
    return 0;
  } else if (array.some(isNaN)) {
    return 'your array contains non-numeric values and cannot be summed';
  } else {
    let sum = array.reduce((accum, value) => {
      return accum + value; 
    }, 0);
    return sum;
  };
};
  
console.log(sum([1, 5.2, 4, 0, -1])) // return 9.2
console.log(sum([]))                 // return 0
console.log(sum([-2]))               // return -2
console.log(sum([1,2,3,4,'string']));


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
  return n % 2 === 0 ? true : false
}

console.log(testEven(8))   // return true
console.log(testEven(7))   // return false
console.log(testEven(100)) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x 
// AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
  let argsArray = Array.from(arguments);
  if (argsArray.some(isNaN)) {
    return 'Your arguments contain non-numeric values and cannot be evaluated'
  } else {
    return n % x === 0 && n % y === 0 ? true : false;
  };
};

console.log(isDivisible(5, 'string', 7))
console.log(isDivisible(10, 2, 5))   // return true
console.log(isDivisible(9, 2, 4))    // return false
console.log(isDivisible(100, 20, 5)) // return true

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
  let argsArray = Array.from(arguments);
  if (argsArray.some(isNaN)) {
    return 'your arguments contain non-numeric values and cannot be evaluated';
  } else {
    return x >= y ? x : y;
  }
}

console.log(maxOfTwoNumbers('string', 8));
console.log(maxOfTwoNumbers(3, 9)); // return 9


// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function(x, y, z) {
  let argsArray = Array.from(arguments);
  if (argsArray.some(isNaN)) {
    return 'your arguments contain non-numeric values and cannot be evaluated';
  } 
  return Math.max(x, y, z);
};

console.log(maxOfThree(5, 10, 'string'));
console.log(maxOfThree(5, 10, 1)); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
  if (s.length !== 1) {
    return 'please provide a single character';
  }
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let letter = s.toLowerCase();
  return vowels.includes(letter) ? true : false
}

console.log(isCharAVowel('string'));
console.log(isCharAVowel('b')); // return false
console.log(isCharAVowel('A'));

// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
  if (arr.some(isNaN)) {
    return 'your array contains non-numeric values and cannot be evaluated';
  }; 
  let product = arr.reduce((accum, value) => {
    return accum * value
  }, 1);
  return product;
};

console.log(multiplyArray([5, 10, 2])); // return 100
console.log(multiplyArray([5, 10, 'string']));

// 5. Write a function that determines how many arguments are passed in
const numArgs = function(...args) {
  return args.length;
};

console.log(numArgs('test', true, 5)); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {
  if (typeof(s) !== 'string') {
    return 'please insert a string value'
  }
  return s.split('').reverse().join('')
}

console.log(reverseString('rockstar')); // return ratskcor
console.log(reverseString(5));

// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function(arr) {
  if (arr.every(elm => typeof(elm) === 'string')) {
    let longestStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > arr[i-1].length) {
        longestStr = arr[i];
      };
    };
    return longestStr.length;
  }
  return 'your array must only contain string values';
};

console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning'])); // return 7
console.log(longestStringInArray([100, 'hello', 'in', 'the', 'morning'])); 

// 8. Write a function that takes an array and number. Return an array of strings 
// that are longer than the provided number
function stringsLongerThan(arr, len) {
  let longerThanLen = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      longerThanLen.push(arr[i]);
    };
  };
  return longerThanLen;
};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // return ["hello", "morning"]