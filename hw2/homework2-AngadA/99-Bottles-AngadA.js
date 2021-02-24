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


//**Assignment 1: 99 Bottles of Beer**

let word = 'bottles';
let count = 99;
while (count > 0) {
    console.log(count + ' ' + word + ' of beer on the wall');
    console.log(count + ' ' + word + ' of beer,');
    console.log('Take one down, pass it around,');
    count = count - 1;
    if (count > 1) {
        console.log(count + ' ' + count + ' of beer on the wall.');
    } else if(count == 1) {
        console.log(count + ' bottle of beer on the wall.'); 
    } else {
        console.log('No more ' + word + ' of beer on the wall.');
    }
}


//**Assignment 2: Random Address Generator**


