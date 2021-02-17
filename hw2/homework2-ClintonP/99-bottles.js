// Set variables to help with bottle plurality
let currentBottle;
let nextBottle;

for (let i = 100; i > 0; i--) {

    // Determine whether we have multiple bottles, a single bottle, or no bottles left in the song.
    currentBottle = i > 1 ? `${i} bottles` : `${i} bottle`;
    nextBottle = i - 1 > 1 ? `${i - 1} bottles` : (i - 1 === 0 ? 'No more bottles' : `${i - 1} bottle`);

    // Log song lyrics to console.
    console.log(`${currentBottle} of beer on the wall,\n${currentBottle} of beer!\nTake one down,\nPass it around,\n${nextBottle} of beer on the wall!\n`);
};

