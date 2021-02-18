// 1. Print out the phrase "C'mon hit me" with the following array
let joker = ['C\'mon', 'hit', 'me'];

console.log(joker[0], joker[1], joker [2]);

// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
// Try it with a loop
// Try it with an array method
let remove = ['take', 'this', 'stuff', 'out'];
let fill = [];

let length = remove.length; 
for (let i = 0; i < length; i++) {
    fill.push(remove.shift());   
}


console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']


// 3. Fill an array with 5 numbers
let emptyArr = [];
for (let i=0; i<5; i++) {
    emptyArr[i] = i;
}

console.log(emptyArr);


// 4. Using a for loop, get the total of numbers 1 to 100
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i; 
}
console.log(sum); // 5050


// 5. Get the average of an array rounded DOWN
let array = [1000, 2, 30, 1, 10]; // answer should be 208
// other examples to check your answer, comment and uncomment the other array variables to check them
// let array = [1, 2, 3, 4]; // 2
// let array = [3, 9]; // 6

let sum5 = 0; 
array.forEach(function(i) {
    sum5 += i; 
})

console.log(Math.floor(sum5/array.length));