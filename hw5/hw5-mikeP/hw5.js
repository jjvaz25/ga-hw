/************PRACTICE PLEASE DISREGARD************

window.onload = function() {
    let helloElm = document.getElementById("hello");
    helloElm.style.color = "black";

    let campusesContainer = document.getElementById("gaCampuses");
    console.log(campusesContainer);
    
    
    for (let i = 0; i < gaCampuses.length; i++) {
        gaCampuses[i].style.backgroundColor = "red";
    };
};

**************************************************/

const addListBtn = document.getElementById("addListBtn");

addListBtn.addEventListener('click', function(){
    let bottle = 100; 
    while (bottle > 2) {
        const newLI = document.createElement('LI');
        newLI.innerHTML = `${bottle} bottles of beer on the wall, ${bottle} bottles of beer! Take one down, Pass it around, ${bottle - 1} bottles of beer on the wall!`;
        let campusesContainer = document.getElementById("songLyrics");
        campusesContainer.appendChild(newLI);
        bottle--;
};

let createLastTwoLines = function(lyric){
    const newLI = document.createElement('LI');
    newLI.innerHTML = lyric;
    let campusesContainer = document.getElementById("songLyrics");
    campusesContainer.appendChild(newLI);
};

createLastTwoLines(`2 bottles of beer on the wall, 2 bottles of beer! Take one down, Pass it around, 1 bottle of beer on the wall!`);
createLastTwoLines(`1 bottle of beer on the wall, 1 bottle of beer! Take one down, Pass it around, no more bottles of beer on the wall!`);

});