// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {
    if (month/3 > 3) {
        return 4; 
    } else if (month/3 > 2) {
        return 3; 
    } else if (month/3 > 1) {
        return 2; 
    } else {
        return 1;
    }
}

console.log(quarterOf(2))  // return 1
console.log(quarterOf(7))  // return 3
console.log(quarterOf(5)) // return 2
console.log(quarterOf(12)) // return 4
quarterOf(12)

// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    if (typeof(x) === 'string') {
        return 'Error';
    } else {
        return 50*x+6
    //your code here
    }
}

console.log(problem(2))       // return 106
console.log(problem(10))      // return 506
console.log(problem('hello')) // return 'Error'



// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
    if (array.length === 0) {
        return 0; 
    } else {
        let sum = 0
        for (i = 0; i < array.length; i++) {
            sum += array[i]; 
        }
        return sum; 
    }  //your code here
}
  
console.log(sum([1, 5.2, 4, 0, -1])) // return 9.2
console.log(sum([]))                 // return 0
console.log(sum([-2]))               // return -2


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    if (n % 2 === 0) {
        return true; 
    } else {
        return false; 
    }
}

console.log(testEven(8))   // return true
console.log(testEven(7))   // return false
console.log(testEven(100)) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    if ((n % x === 0) && (n % y === 0)) {
        return true; 
    } else {
        return false; 
    }
    
}

console.log(isDivisible(10, 2, 5), isDivisible(9, 2, 4),isDivisible(100, 20, 5))   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
   if (x > y) {
       return x; 
   } else {
       return y; 
   }
}

console.log(maxOfTwoNumbers(3, 9)); // return 9


// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function(x, y, z) {
    if (x > y && x > z) {
        return x; 
    } else if (y > x && y > z) {
        return y; 
    } else {
        return z; 
    }
 }
console.log(maxOfThree(5, 10, 1)); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
    if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
        return true;
    }
    return false; 
}

console.log(isCharAVowel('b')); // return false


// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
    answer = 1; 
    for (i = 0; i < arr.length; i++) {
        answer *= arr[i];
    }
    return answer; 
}

console.log(multiplyArray([5, 10, 2])); // return 100

// 5. Write a function that determines how many arguments are passed in
const numArgs = function(...args) {

};

numArgs('test', true, 5); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {

}

reverseString('rockstar'); // return ratskcor

// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function(arr) {

};

longestStringInArray(['say', 'hello', 'in', 'the', 'morning']); // return 7

// 8. Write a function that takes an array and number. Return an array of strings that are longer than the provided number
function stringsLongerThan(arr, len) {

};

stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); // return ["hello", "morning"]