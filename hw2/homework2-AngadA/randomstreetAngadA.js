// #### Homework 2

/**Assignment 1: 99 Bottles of Beer**
- Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html). Do not worry about spelling out the numbers, use actual numbers (100, 99, 98...).
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

**Assignment 2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506` */


//**Assignment 2: Random Address Generator**

let streetNum = [14,25,39,45,53,67,77,86,94,135,335,750];
let streetName = ['marian', 'hanover', 'burchwood', 'hazelwood', 'robbins',];
let cityName = ['jericho', 'great-neck', 'montauk', 'bayville', 'oysterbay'];
let stateName = ['NY', 'IL', 'MA','CA', 'AZ', 'NV'];
let zipCode = [11753,92231,10001,11573,22465];

let randomNum = Math.floor((Math.random() * streetNum.length));
let randomStreet = Math.floor((Math.random() * streetName.length));
let randomCity = Math.floor((Math.random() * cityName.length));
let randomState = Math.floor((Math.random() * stateName.length));
let randomZipCode = Math.floor((Math.random() * zipCode.length));

console.log(streetNumber * (randomNumber), streetName * (randomStreet) + ' lane,', cityName * (randomCity) + ',', stateName * (randomState) + ',', zipCode * (randomZipCode));



