// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {
    // Your code here
    if (month >= 1 && month <= 3) return 1
    else if (month >= 4 && month <= 6) return 2
    else if (month >= 7 && month <= 9) return 3
    else if (month >= 10 && month <= 12) return 4
    else return 'Enter a month number between 1 & 12'
}

quarterOf(2)  // return 1
quarterOf(7)  // return 3
quarterOf(12) // return 4


// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
    //your code here
}

problem(2)       // return 106
problem(10)      // return 506
problem('hello') // return 'Error'


// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
    //your code here
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

sum([1, 5.2, 4, 0, -1]) // return 9.2
sum([])                 // return 0
sum([-2])               // return -2


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    //your code here
    if (n % 2 === 0)
        return true
    else
        return false
}

testEven(8)   // return true
testEven(7)   // return false
testEven(100) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    //your code here
    if (n, x, y > 0 && typeof (n) === "number" &&
        typeof (x) === "number" && typeof (y) === "number"
        && (n % x === 0) && (n % y == 0)) return true
    else return false
}

isDivisible(10, 2, 5)   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
    if (x > y) return x
    else return y
}

maxOfTwoNumbers(3, 9); // return 9


// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function (x, y, z) {
    if (x > y && x > z) return x
    else if (y > x && y > z) return y
    else if (z > x && z > y) return z
    else return "All are equal"
};

maxOfThree(5, 10, 1); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
    if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') return true
    else return false
}

isCharAVowel('b'); // return false


// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
    let total = 1
    for (let i = 0; i < arr.length; i++) {
        total = total * arr[i]
    }
    return total
}

multiplyArray([5, 10, 2]); // return 100

// 5. Write a function that determines how many arguments are passed in
const numArgs = function (...args) {
    return num = args.length

};

numArgs('test', true, 5); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {
    let str = []
    str = s.split('')
    reverseStr = str.reverse().join('')
    return reverseStr
}

reverseString('rockstar'); // return ratskcor

// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function (arr) {
    let str = arr[0]
    let num = arr[0].length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            num = arr[i].length
            str = arr[i]
        }
    }
    return str + " " + num
};

longestStringInArray(['say', 'hello', 'in', 'the', 'morning']); // return 7

// 8. Write a function that takes an array and number. Return an array of strings that are longer than the provided number
function stringsLongerThan(arr, len) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            newArr.push(arr[i])
        }
    }
    return newArr
};

stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); // return ["hello", "morning"]