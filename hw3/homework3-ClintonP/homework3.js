// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {

    // Because each quarter of the year has 3 months, we can use multiples of 3 to determine which quarter a month is in.
    return Math.ceil(month / 3);
}

quarterOf(2)  // return 1
quarterOf(7)  // return 3
quarterOf(12) // return 4


// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    // Check if argument is a string. If so, return "Error".
    if(typeof x === 'string')
        return "Error";
    else // Return the value multiplied by 50 and increased by 6 
        return (x * 50) + 6;

    }

problem(2)       // return 106
problem(10)      // return 506
problem('hello') // return 'Error'


// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
    // Declare sum variable
    let sum = 0;

    // Loop through array
    for(let i = 0, len = array.length; i < len; i++) {
        // Check if the current array value is a number. If so, add it to the total.
        if(typeof array[i] === 'number') 
            sum += array[i];
    }
    // Return the sum
    return sum;
}
  
sum([1, 5.2, 4, 0, -1]) // return 9.2
sum([])                 // return 0
sum([-2])               // return -2


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    // If a number divided by 2 has a remainder of 0, it is even.
    return n % 2 === 0;
}

testEven(8)   // return true
testEven(7)   // return false
testEven(100) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    // In order for a number to be divisible by two numbers, it should have a remainder of 0 when both are divided into it.
    return (n % x === 0 && n % y === 0);
}

isDivisible(10, 2, 5)   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
    // Use comparison operator to determine larger value. If neither is larger, they're equal.
    return x > y ? x : (x < y ? y : 'Equal');
}

maxOfTwoNumbers(3, 9); // return 9


// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function(x, y, z) {
    // Check if x is potentially greater than y.
    if(x >= y) {
        // If z is greater than x, then it is also greater than y.
        if(z > x) {
            return z;
        }
        // If z is not greater than y, then x is either the largest or tied for the largest, so we can return x
        else {
            return x;
        }
    } else {
        // Check if y is greater than z. If so, it's the largest. If not, z is either the largest or tied for it.
        if (y > z) {
            return y;
        } else {
            return z;
        }
    }
};

maxOfThree(5, 10, 1); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
    return ['a','e','i','o','u'].includes(s);
}

isCharAVowel('b'); // return false


// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
    let product;
    for(let i = 0, len = arr.length; i < len; i++){
        //If product has not been initialized, then let product equal the current array value. Else, multiply it by the current array value.
        if(typeof arr[i] === 'number') {
            if(!product) 
                product = arr[i];
            else
                product *= arr[i];
        }
        else // If we hit a non-numeric value, then we cannot multiply
            return "ERROR: Cannot multiply non-numeric values.";
    }
    // If we have a truth-y product, then the multiplication was successful. If not, return an error statement.
    return product || "ERROR: No values given.";
}

multiplyArray([5, 10, 2]); // return 100

// 5. Write a function that determines how many arguments are passed in
const numArgs = function(...args) {
    // args is an array, so we can just return the length.
    return args.length;
};

numArgs('test', true, 5); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {
    let reversedString ;
    // Work backwards...
    for(let i = s.length; i >=0; i--) {
        // If our new string isn't initialized, then start it with the current value
        if(!reversedString)
            reversedString = s[i];
        else // Else, add the current value to our new string.
            reversedString += s[i];
    }
    // If we have a reversed string, return it. If not, then the input was empty.
    return reversedString || "ERROR: Empty string.";
}

reverseString('rockstar'); // return ratskcor

// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function(arr) {
    let longest = '';
    // Loop through values and assign longest string to value, then return its length.
    for(let i = 0, len = arr.length; i < len; i++) {
        if(typeof arr[i] === 'string') {
            if(arr[i].length > longest.length)
                longest = arr[i];
        }
    }

    return longest.length || "No strings given";
};

longestStringInArray(['say', 'hello', 'in', 'the', 'morning']); // return 7

// 8. Write a function that takes an array and number. Return an array of strings that are longer than the provided number
function stringsLongerThan(arr, len) {
    let longerStrings = [];
    // Push strings longer than the given argument into an array, then return it.
    for(let i = 0, arrLen = arr.length; i < arrLen; i++) {
        if(typeof arr[i] === 'string') {
            if(arr[i].length > len)
                longerStrings.push(arr[i]);
        }
    }

    return longerStrings;
};

stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); // return ["hello", "morning"]

