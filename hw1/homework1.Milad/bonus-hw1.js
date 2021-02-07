 // 1. Print out the phrase "C'mon hit me" with the following array
console.log("C'mon hit me");

// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
let remove = ['take', 'this', 'stuff', 'out'];
let fill = [];
//old way
fill = remove.slice();
// ES6 way
//fill = [...remove];
remove= [];
console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']


// 3. Fill an array with 5 numbers
let emptyArr = [45, 4, 9, 16, 25];
console.log('emptyArr: ' + emptyArr);


// 4. Using a for loop, get the total of numbers 1 to 100
let sum = 0;
for (let i = 1; i<=100; i++){
    sum+=i;
}
console.log('sum: '+ sum); // 5050


// 5. Get the average of an array rounded DOWN
let array = [1000, 2, 30, 1, 10]; // answer should be 208
// other examples to check your answer, comment and uncomment the other array variables to check them
// let array = [1, 2, 3, 4]; // 2
// let array = [3, 9]; // 6
let total = 0;
for ( let i = 0; i< array.length; i++){
    total += array[i];
}
let ave = total/ array.length;
console.log('average: ' + Math.floor(ave));