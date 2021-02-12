// 1. Print out the phrase "C'mon hit me" with the following array
let joker = ['Cmon', 'hit', 'me'];

////////  1. Answer  ////////////////
console.log(joker.join());
/////////////////////////////////////

// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
// Try it with a loop
// Try it with an array method
let remove = ['take', 'this', 'stuff', 'out'];
let fill = [];

////////  2.1 Answer:  ////////

// Need to hold the initial array value, otherwise it will dynamically change while we loop through it.
let arrayLength = remove.length;
for (let i = 0; i < arrayLength; i++) {
    fill.push(remove.pop());
}

console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']
////////////////////////////////

////////  2.2 Answer:  ////////
remove = ['take', 'this', 'stuff', 'out'];
fill = [];

fill = [].concat.apply([], remove.splice(0));

console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']
////////////////////////////////



// 3. Fill an array with 5 numbers
let emptyArr = [];

////////  3. Answer:  ////////

emptyArr.push(1, 2, 3, 4, 5);

//////////////////////////////

console.log(emptyArr);


// 4. Using a for loop, get the total of numbers 1 to 100
let sum = 0;

////////  4. Answer:  ////////

for (let i = 0; i <= 100; i++) {
    sum += i;
};

//////////////////////////////

console.log(sum); // 5050


// 5. Get the average of an array rounded DOWN
let array = [1000, 2, 30, 1, 10]; // answer should be 208
// other examples to check your answer, comment and uncomment the other array variables to check them
// let array = [1, 2, 3, 4]; // 2
// let array = [3, 9]; // 6

////////  5. Answer:  ////////

let avgSum = 0;
for (let i = 0; i < array.length; i++) {
    avgSum += array[i];
};

let avg = Math.floor(avgSum / array.length);

//////////////////////////////

console.log(avg);