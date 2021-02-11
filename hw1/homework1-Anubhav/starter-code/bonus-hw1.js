// 1. Print out the phrase "C'mon hit me" with the following array
let joker = ["C'mon", 'hit', 'me'];
console.log(joker.join(' '))

// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
// Try it with a loop
// Try it with an array method
let remove = ['take', 'this', 'stuff', 'out'];
let fill = [];
for (let i = 0; i < remove.length; i++) {
    fill.push(remove[i])
    remove.shift()
    i--
}

console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']


// 3. Fill an array with 5 numbers
let emptyArr = [];
emptyArr = new Array(5)
console.log(emptyArr);
for (let i = 0; i < emptyArr.length; i++) {
    emptyArr[i] = (Math.floor(Math.random() * 100))
}

console.log(emptyArr);


// 4. Using a for loop, get the total of numbers 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i
}

console.log(sum); // 5050


// 5. Get the average of an array rounded DOWN
let array = [1000, 2, 30, 1, 10]; // answer should be 208
// other examples to check your answer, comment and uncomment the other array variables to check them
// let array = [1, 2, 3, 4]; // 2
// let array = [3, 9]; // 6
let average = 0
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
}
average = Math.floor(sum / array.length)
console.log(average);