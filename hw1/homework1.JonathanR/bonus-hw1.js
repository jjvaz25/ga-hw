// // 1. Print out the phrase "C'mon hit me" with the following array
// let joker = ['C\'mon', 'hit', 'me'];
// for (let i = 0; i < joker.length; i++) {
//     console.log(joker[i])
// }

// console.log(joker[0], joker[1], joker[2]);

// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
// Try it with a loop
// Try it with an array method
// let remove = ['take', 'this', 'stuff', 'out'];
// let fill = remove.splice(0, 5);
// console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']


// 3. Fill an array with 5 numbers
// let emptyArr = [1, 2, 3, 4, 5];
// console.log(emptyArr);

// let empty = new Array(5).fill(1);
// console.log(empty);

// let empty = []
// for (let i = 1; i < 6; i++) {
//     empty.push(i)
// }
// console.log(empty);

// 4. Using a for loop, get the total of numbers 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     // sum = sum + i 
//     sum += i
// }
// console.log(sum); // 5050


// 5. Get the average of an array rounded DOWN
let array = [1000, 2, 30, 1, 10]; // answer should be 208
// other examples to check your answer, comment and uncomment the other array variables to check them
// let array = [1, 2, 3, 4]; // 2
// let array = [3, 9]; // 6

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i]
}
let avg = Math.floor(sum/array.length);
console.log(avg);