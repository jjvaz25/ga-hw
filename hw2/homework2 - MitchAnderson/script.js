// #### Homework 2

// **Assignment 1: 99 Bottles of Beer**
// - Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html). Do not worry about spelling out the numbers, use actual numbers (100, 99, 98...).
// - Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").


for (let i = 100; i > 0; i--){
    if (i === 1) {
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer, take it down pass it around, no more bottles of beer on the wall`);
    } else {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, take one down pass it around, ${i - 1} bottles of beer on the wall`)
    }
}




// **Assignment 2: Random Address Generator**
// - Write a script that can generate random addresses
// - As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// - Your script should randomly select one item from each of these arrays and then use them to construct a random address
// - Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// - `node random-address.js`
// - `=> 34578 Dolphin Street, Wonka NY, 44506`

var streetNum = Math.floor(Math.random()*1000);
var streetName = ["Old south head road", "New south head road", "Spencer street", "Military road", "Carlisle street", "Birrell street", "Bronte road"];
var suburb = ["Rose bay", "Bronte", "Bondi junction", "Bondi beach", "Waverley", "Vaucluse", "Tamarama"];
var state = ["NSW", "VIC", "TAS", "SA", "NT", "QLD", "WA", "ACT"];
var postCode = ["2029", "2030", "2024", "2026", "2000", "2020", "2031"];


var randomGenerator = Math.floor(Math.random());

var randomAddress = `${streetNum} ${streetName[randomGenerator]} ${suburb[randomGenerator]} ${state[randomGenerator]} ${postCode[randomGenerator]}`

console.log(randomAddress);

// This hasn't quite worked, it works once but then doesn't change after that.