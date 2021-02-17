function createMadLib() {
    let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    let title = document.querySelector("#xForY");
    title.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    return;
};

var favorites = [];
function saveMadLib() {
    console.log("Save");
    let currentMadLib = document.querySelector("#xForY").innerHTML;
    favorites.push(currentMadLib);
    return;
};

function printFavs() {
    console.log("Print");

    let titleFavs = document.querySelector("#favorites");
    titleFavs.innerHTML = favorites;
    return;
};

let createBtn = document.querySelector("#create");
createBtn.addEventListener("click", createMadLib);

let saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", saveMadLib);

let printBtn = document.querySelector("#print");
printBtn.addEventListener("click", printFavs);
