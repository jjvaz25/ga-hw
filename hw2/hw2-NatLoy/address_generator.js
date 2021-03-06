// **Assignment 2: Random Address Generator**
// - Write a script that can generate random addresses
// - As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// - Your script should randomly select one item from each of these arrays and then use them to construct a random address
// - Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// - `node random-address.js`
// - `=> 34578 Dolphin Street, Wonka NY, 44506`


var street_num = Math.floor(Math.random()*200);
var street_name = ["Pear", "Apple", "Banana", "Kiwi", "Orange", "Watermelon", "Mango" ];
var city = ["Carrot", "Tomato", "Beans", "Spinach", "Capsicum", "Mushroom", "Potato"];
var state = ["NSW", "QLD", "SA", "WA", "NT", "TAS","NEW"];
var zip_code = [2074, 2073, 2075, 2076, 1000, 2000, 3456];

let rand = Math.floor(Math.random()*7) 
console.log(`${street_num} ${street_name[rand]} ${city[rand]} ${state[rand]} ${zip_code[rand]}`);