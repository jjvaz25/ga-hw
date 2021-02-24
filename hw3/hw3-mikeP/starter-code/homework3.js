// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {
    if (month >= 1 && month <= 3)
        return 'Quarter 1';
    if (month >= 4 && month <= 6)
        return 'Quarter 2';
    if (month >= 7 && month <= 9)
        return 'Quarter 3';    
    if (month >= 10 && month <= 12)
        return 'Quarter 4';
}

quarterOf(2)  // return 1
quarterOf(7)  // return 3
quarterOf(12) // return 4


// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    if (typeof x === 'string') 
        return 'Error';
    return x * 50 + 6;
}   

problem(2)       // return 106
problem(10)      // return 506
problem('hello') // return 'Error'


// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
    // your code here
}

console.log(
    [1, 2, 3, 4].reduce((a, b) => a + b, 0)
  )
  console.log(
    [].reduce((a, b) => a + b, 0)
  )

sum([1, 5.2, 4, 0, -1]) // return 9.2
sum([])                 // return 0
sum([-2])               // return -2


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    if (n % 2 === 0)
        return 'True';
    else 
        return 'False';
}

testEven(8)   // return true
testEven(7)   // return false
testEven(100) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    if (n % y === 0 && n % x === 0)
        return 'True';
    else 
        return 'False';
}

isDivisible(10, 2, 5)   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
   Math.max(x, y);
   console.log(Math.max(x,y));
}

maxOfTwoNumbers(3, 9); // return 9


// 2. Write a function that determines the largest of 3 numbers
maxOfThree = function(x, y, z) {
    Math.max(x, y, z);
    console.log(Math.max(x, y, z));
};

maxOfThree(5, 10, 1); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
    if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u')
        return 'True'
    else 
        return 'False'
}

isCharAVowel('b'); // return false


// 4. Write a function that gets the product of all numbers multiplied in an array
// function multiplyArray(arr) {    
// }

const multiplyArray = (a, b, c) => a * b * c;
multiplyArray(5, 10, 2);

multiplyArray([5, 10, 2]); // return 100

// 5. Write a function that determines how many arguments are passed in
const numArgs = function(...args) {

};


numArgs('test', true, 5); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {
    return (s === '') ? '' : reverseString(s.substr(1)) + s.charAt(0);
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