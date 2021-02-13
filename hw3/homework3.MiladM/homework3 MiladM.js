// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
console.log('/////////////////////// 1');

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {
    // Your code here
    if (month > 0 && month <= 3) {
        return 1;
    } else if (month > 3 && month <= 6) {
        return 2;
    } else if (month > 6 && month <= 9) {
        return 3;
    } else if (month > 9 && month <= 12) {
        return 4;
    }

}

//console.log(quarterOf(2));  // return 1
quarterOf(2)
quarterOf(7)  // return 3
quarterOf(12) // return 4

console.log('/////////////////////// 2');
// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
    //your code here
    if (Number.isInteger(x)) {
        return x * 50 + 6;
    } else {
        return 'Error';
    }
}

problem(2)       // return 106
problem(10)      // return 506
problem('hello') // return 'Error'
console.log('/////////////////////// 3');


// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
    //your code here
    let sum1 = 0;
    if (array.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            sum1 += array[i];
        }
        return sum1;

    } else {
        return 0;
    }
}

sum([1, 5.2, 4, 0, -1]) // return 9.2
sum([])                 // return 0
sum([-2])               // return -2

console.log('/////////////////////// 4');

// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    //your code here
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

testEven(8)   // return true
testEven(7)   // return false
testEven(100) // return true

console.log('/////////////////////// 5');

// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    //your code here
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

isDivisible(10, 2, 5)   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true

console.log('/////////////////////// BONUS Started');
console.log('/////////////////////// BONUS 1');

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
    let Largest = (x > y) ? x : y;
    return Largest;
}

maxOfTwoNumbers(3, 9); // return 9

console.log('/////////////////////// BONUS 2');
// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function (x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }

};

maxOfThree(5, 10, 1); // return 10
maxOfThree(5, 10, 12);// 12
maxOfThree(15, 10, 1);//15
console.log('/////////////////////// BONUS 3');
// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
    let value = s.toLowerCase();
    return (value === "a" || value === "e" || value === "i" || value === "o" || value === "u");

} //console.log(isCharAVowel('b'));

isCharAVowel('a'); // return true



console.log('/////////////////////// BONUS 4');
// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
    let sum1 = 1;
    for (let i = 0; i < arr.length; i++) {
        return sum1 *= arr[i];
    }
    //console.log(sum1);
}

multiplyArray([5, 10, 2]); // return 100
multiplyArray([5, 5, 3]); // return 75

console.log('/////////////////////// BONUS 5');
// 5. Write a function that determines how many arguments are passed in
const numArgs = function (...args) {
    // easy waty
    //console.log(arguments.length);

    // normal way
    let na = 0;
    for (let i = 0; i < arguments.length; i++) {
        na += i;
    }
    return na;

};

numArgs('test', true, 5); // return 3

console.log('/////////////////////// BONUS 6');
// 6. Write a function that reverses a string
function reverseString(s) {
    let reverse = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse;
}

reverseString('rockstar'); // return ratskcor

console.log('/////////////////////// BONUS 7');
// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function (arr) {
    let lg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (lg < arr[i].length) {
            lg = arr[i].length;
        }
    }
    return lg;
};

longestStringInArray(['say', 'hello', 'in', 'the', 'morning']); // return 7
console.log('/////////////////////// BONUS 8');
// 8. Write a function that takes an array and number. Return an array of strings that are longer than the provided number
function stringsLongerThan(arr, len) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

};

stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); // return ["hello", "morning"]