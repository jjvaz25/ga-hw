let beerNum = 99;

while (beerNum > 0) {
    console.log(beerNum + " " + getBottle(beerNum) + " of beer on the wall");
    console.log(beerNum + " " + getBottle(beerNum) + " of beer,");
    console.log("Take one down, pass it around,");
    beerNum = beerNum - 1;
    if (beerNum > 0) {
        console.log(beerNum + " " + getBottle(beerNum) + " of beer on the wall.");
    } else {
        console.log("No more " + getBottle(beerNum) + " of beer on the wall.");
    }
}
  
function getBottle(beerNum) {
    return beerNum === 1 ? "bottle" : "bottles";
  }