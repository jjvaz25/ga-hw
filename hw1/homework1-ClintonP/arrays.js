/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
let imagesArray = ['image1.png', 'image2.png', 'image3.png'];

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
let q2 = imagesArray[0];

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
let q3 = imagesArray.length;

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
let q4 = imagesArray[imagesArray.length - 1];


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
let numbersArray = [1, 2, 3, 4];
for (let i = 0, len = numbersArray.length; i < len; i++) {
    numbersArray[i] += 1;
};

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */




// Your code here
let sum = 0;
for (let i = 0, len = numbersArray.length; i < len; i++) {
    sum += numbersArray[i];
};
let q6 = sum / numbersArray.length;

console.log(imagesArray, q2, q3, q4, numbersArray, q6);