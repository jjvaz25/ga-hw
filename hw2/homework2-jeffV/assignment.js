/*Assignment 1: 99 Bottles of Beer

Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the 
terminal. If you're unfamiliar with the song, you can find the lyrics here. Do not 
worry about spelling out the numbers, use actual numbers (100, 99, 98...).
Make sure your program can handle both singular and plural cases 
(i.e. both "100 bottles of beer" and "1 bottle of beer").*/

/* my solution */
let i = 100;
while (i >= 1) {
  if (i === 1) {
    console.log(`${i} bottle of beer on the wall,`);
    console.log(`${i} bottle of beer!`);
    console.log(`Take one down, pass it around,`);
    console.log(`no more bottles of beer on the wall!`);
    console.log('');
  } else if ( i === 2) {
    console.log(`${i} bottles of beer on the wall,`);
    console.log(`${i} bottles of beer!`);
    console.log(`Take one down, pass it around,`);
    console.log(`${i-1} bottle of beer on the wall.`);
    console.log('');
  } else {
    console.log(`${i} bottles of beer on the wall,`);
    console.log(`${i} bottles of beer!`);
    console.log(`Take one down, pass it around,`);
    console.log(`${i-1} bottles of beer on the wall.`);
    console.log('');
  };
  i--;
};


/*below is not my solution!!! */
let i = 100;
while (i >= 1) {
  let bottle = i === 1 ? 'bottle' : 'bottles';
  console.log(`${i} ${bottle} of beer on the wall,`)
  console.log(`${i} ${bottle} of beer!`);
  i--;
  bottle = i === 1 ? 'bottle' : 'bottles';
  console.log(`Take one down, pass it around,`);
  console.log(`${i} ${bottle} of beer on the wall.`);
  console.log('');
};

/* Assignment 2: Random Address Generator

Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: 
street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then 
use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. 
For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506 */

let streetNums = [2134, 98762, 6924, 42858, 544];
let streetNames = ['Lyceum Ave', 'Ocean Ave', 'Washington Blvd', 'Venice Blvd', 'Marcasel Ave'];
let cities = ['Los Angeles', 'Houston', 'Arlington', 'Boston', 'Manhattan Beach'];
let states = ['CA', 'MA', 'NY', 'TX', 'OR'];
let zipcodes = ['90066', '90035', '18091', '11211', '42819'];

const addressGenerator = () => {
  let streetNum = streetNums[Math.floor(Math.random() * streetNums.length)];
  let streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
  let city = cities[Math.floor(Math.random() * cities.length)];
  let state = states[Math.floor(Math.random() * states.length)];
  let zipcode = zipcodes[Math.floor(Math.random() * zipcodes.length)];
  console.log(`${streetNum} ${streetName}, ${city}, ${state} ${zipcode}`);
};

addressGenerator();