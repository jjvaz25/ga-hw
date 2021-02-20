/*
**Assignment 2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, 
  state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506`
*/

// Code

let stNumber = ['123', '234', '345', '456', '567'];
let stName = ['Picadilly Lane', 'Lincoln Street', 'Apple Park', 'Maple Lane', 'Cobble Street'];
let city = ['Burbank', 'Glendale', 'Los Angeles', 'Monterey', 'Valencia'];
let state = ['CA', 'NY', 'AZ', 'OR', 'GA'];
let zip = ['92234', '22355', '25341', '90991', '95521'];

let address;

function randomAddress() {
    let randomNumber = Math.floor((Math.random() * stNumber.length));
    let randomName = Math.floor((Math.random() * stName.length));
    let randomCity = Math.floor((Math.random() * city.length));
    let randomState = Math.floor((Math.random() * state.length));
    let randomZip = Math.floor((Math.random() * zip.length));

    address = stNumber[randomNumber] + " " + stName[randomName] + ", " + city[randomCity] + " " + state[randomState] + ", " + zip[randomZip];
};
randomAddress();
console.log(address);