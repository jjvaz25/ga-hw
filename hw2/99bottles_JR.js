/*
**Assignment 1: 99 Bottles of Beer**
- Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html). Do not worry about spelling out the numbers, use actual numbers (100, 99, 98...).
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
*/

// set variables

let firstBottle;
let secondBottle;

// Create a for loop starting at 100 and ending at zero, decreasing by 1 after each 

for (let i = 100, i >= 0; i--) {
    firstBottle = (i > 1) ? `${i} bottles` : `${i} bottle`;
    secondBottle = (i - 1 > 1) ? `${i - 1} bottles` : i - 1 === 0 ? 'No more bottles' : i - 1 < 9 `${i} bottle`;
    console.log(`${firstBottle} of beer on the wall. ${firstBottle} of beer! Take one down, Pass it around, ${secondBottle} of beer on the wall!`);
}

// Saw an example from a student and I tried to do it myself. I was unable to make it work.