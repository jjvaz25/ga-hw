// 1. Print out the phrase "C'mon hit me" with the following array
let joker = ['C\'mon', 'hit', 'me'];
console.log(joker.join(' '));



// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
// Try it with a loop
// Try it with an array method
let remove = ['take', 'this', 'stuff', 'out'];
let fill = [];
for(let i=0; i<remove.length; i++){
    fill[i]=remove[i];
}
//problem 2 with an array method:
let newArray=remove.map(function(el){
    return el;
})
console.log(newArray);



// 3. Fill an array with 5 numbers
let emptyArr = [];
emptyArr.push(1,2,3,4,5);
console.log(emptyArr);



// 4. Using a for loop, get the total of numbers 1 to 100
let sum = 0;
for(let i=1; i<101; i++){
    sum+=i;
}
console.log(sum); // 5050



// 5. Get the average of an array rounded DOWN
// answer should be 208 ==>I did not understand where this number comes from, or maybe the provide array is removed from this file
// other examples to check your answer, comment and uncomment the other array variables to check them
let array = [111, 222, 333, 444]; // 2
let sum2=0;
let avg=0;
for(let i=0; i<array.length; i++){
    sum2+=array[i];
}
avg=sum2/array.length
console.log(Math.floor(avg));