/*
**Assignment 1: 99 Bottles of Beer**
- Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, 
you can [find the lyrics here](https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html). 
Do not worry about spelling out the numbers, use actual numbers (100, 99, 98...).

- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
*/

// Code



// for loop
function beer() {
    let bottles;
    let bottlesRemaining;

    for (i = 99; i >= 1; i--) {
        if (i === 1) {
            bottles = "bottle";
            bottlesRemaining = "No more bottles of beer on the wall."
        } else if (i === 2) {
            bottlesRemaining = "1 bottle of beer on the wall."
            
        }else {
            bottles = "bottles";
            bottlesRemaining = i -1 + " bottles of beer on the wall.";
        }
            console.log(i + " " + bottles + " of beer on the wall,");
            console.log(i + " " + bottles + " of beer,");
            console.log("Take one down, pass it around,");
            console.log(bottlesRemaining);
    };
};   
beer();

 // while loop
 function beer() {
    let beersCount = 99;
    let bottles;
    let bottlesRemaining;

    while (beersCount > 0) {
        if (beersCount === 1) {
            bottles = "bottle";
            bottlesRemaining = "No more bottles of beer on the wall.";
            
        } else if (beersCount === 2) {
            bottlesRemaining = "1 bottle of beer on the wall."
            
        } else {
            bottles = "bottles";
            bottlesRemaining = beersCount - 1 + " bottles of beer on the wall.";
        }
            console.log(beersCount + " " + bottles + " of beer on the wall,");
            console.log(beersCount + " " + bottles + " of beer,");
            console.log("Take one down, pass it around,");
            console.log(bottlesRemaining);

            beersCount = beersCount - 1;
    };
};   
beer();