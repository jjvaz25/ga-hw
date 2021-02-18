for (i = 100; i >= 1; i--) {

    let wallBeer = i;
    let handBeer = i - 1;

    if (wallBeer === 2 && handBeer === 1) {
        console.log(`${wallBeer} bottles of beer on the wall, ${wallBeer} bottles of beer! Take one down, pass it around, ${handBeer} bottle of beer on the wall...`);
    } else if (wallBeer === 1) {
        console.log(`${wallBeer} bottle of beer on the wall, ${wallBeer} bottle of beer! Take it down, pass it around, ${handBeer} bottles of beer on the wall.`);
    } else {
        console.log(`${wallBeer} bottles of beer on the wall, ${wallBeer} bottles of beer! Take one down, pass it around, ${handBeer} bottles of beer on the wall...`)
    };
};
