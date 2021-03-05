
window.onload = function() {

let unorderedList = document.getElementById("lyrics");

    let firstBottle;
    let secondBottle;

    for (let i = 100; i > 0; i--) {
        if(i > 1) {
            firstBottle = `${i} bottles`;
        } else {
            firstBottle = `${i} bottle`;
        }
        if(i - 1 > 1) {
            secondBottle = `${i - 1} bottles`;
        } else if(i - 1 < 9) {
            secondBottle = `${i} bottle`;
        }
        if(i - 1 === 0) {
            secondBottle = 'No more bottles';
        }
        // console.log(`${firstBottle} of beer on the wall. ${firstBottle} of beer! Take one down, Pass it around, ${secondBottle} of beer on the wall!`);
       
        let listItem = document.createElement("li");
        let listText = document.createTextNode(`${firstBottle} of beer on the wall. ${firstBottle} of beer! Take one down, Pass it around, ${secondBottle} of beer on the wall!`);
        listItem.appendChild(listText);
        unorderedList.appendChild(listItem);
    }
}

