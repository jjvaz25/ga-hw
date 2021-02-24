// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {
    // Your code here
    if(month >=1 && month <= 3) {
        return 1;
    } else if(month >= 4 && month <= 6){
        return 2;
    } else if (month >= 7 && month <= 9) {
        return 3;
    } else {
        return 4;
    }
    
}

quarterOf(2)  // return 1
quarterOf(7)  // return 3
quarterOf(12) // return 4
console.log(quarterOf(2))  // return 1
console.log(quarterOf(5))  // return 2
console.log(quarterOf(7))  // return 3
console.log(quarterOf(12)) // return 4


// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    //your code here
    if(typeof(x) != 'number') {
        return "Error";
    }else{
        return (x*50)+6;
    }
}

problem(2)       // return 106
problem(10)      // return 506
problem('hello') // return 'Error'
console.log(problem(2))       // return 106
console.log(problem(10))      // return 506
console.log(problem('hello')) // return 'Error'


// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
    //your code here
    if(array.length == 0) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
  
console.log(sum([1, 5.2, 4, 0, -1])) // return 9.2
console.log(sum([]))                 // return 0
console.log(sum([-2]))               // return -2


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    //your code here
    return (n % 2 === 0) ? true : false;
}

testEven(8)   // return true
testEven(7)   // return false
testEven(100) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    //your code here
    return console.log((n % x === 0 && n % y === 0 ) ? true : false);
}

isDivisible(10, 2, 5)   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true

// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
    if( x > y) {
        return console.log( x);
    } else{
        return console.log( y);
    }
}

maxOfTwoNumbers(3, 9); // return 9


// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function(x, y, z) {
    let numsArray = [x,y,z];
    let max = -Infinity;
    for (num in numsArray) {
        if (numsArray[num] > max) {
            max = numsArray[num];
        }
    }
    return console.log(max);
};

maxOfThree(5, 10, 1); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
    let vowels = ['a', 'e','i','o','u'];
    return (vowels.includes(s)) ? true : false;

}

console.log(isCharAVowel('b')); // return false


// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
    let product = 1;
    for (numIndex in arr) {
        product *= arr[numIndex];
    }
    return product;
}

console.log(multiplyArray([5, 10, 2])); // return 100

// 5. Write a function that determines how many arguments are passed in
const numArgs = function(...args) {
     return arguments.length;
};

numArgs('test', true, 5); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {
    var revString = "";
    for (let i = s.length -1; i > -1 ; i--) {
        revString += s[i];
    }
    return revString;
}

console.log(reverseString('rockstar')); // return ratskcor

// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function(arr) {
    var longest = -Infinity;
    for (wordIndex in arr) {
        if ( arr[wordIndex].length > longest) {
            longest = arr[wordIndex].length;
        }
    }
    return longest;

};

console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning'])); // return 7

// 8. Write a function that takes an array and number. Return an array of strings that are longer than the provided number
function stringsLongerThan(arr, len) {
    let ret = [];
    for(wordIndex in arr) {
        if(arr[wordIndex].length > len) {
            ret.push(arr[wordIndex]);
        }
    }
    return ret;

};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // return ["hello", "morning"]