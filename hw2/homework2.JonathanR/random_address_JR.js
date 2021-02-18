
/*
**Assignment 2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506
*/

let streetNumber = ['34578', '12345', '98764', '89072', '75643'];
let streetName = ['First Street', 'Second Street', 'Third Street', 'Fourth Street', 'Fifth Street'];
let cityName = ['Miami', 'Austin', 'San Francisco', 'New York', 'Portland'];
let stateName = ['FL', 'TX', 'CA', 'NY', 'OR',];
let zipCode = ['33028', '73301', '94102', '10001', '42801'];

let streetNumberRandom = Math.floor(Math.random() * streetNumber.length);
let streetNameRandom = Math.floor(Math.random() * streetName.length);
let stateNameRandom = Math.floor(Math.random() * stateName.length)
let cityNameRandom = Math.floor(Math.random() * cityName.length);
let zipCodeRandom = Math.floor(Math.random() * zipCode.length);

console.log(`${streetNumber[streetNumberRandom]} ${streetName[streetNameRandom]}, ${cityName[cityNameRandom]} ${stateName[stateNameRandom]}, ${zipCode[zipCodeRandom]}`);

