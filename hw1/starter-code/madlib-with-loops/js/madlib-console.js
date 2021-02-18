let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// let random1 = Math.floor((Math.random() * startupX.length));
// let random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let crtBtn = document.getElementById('create');
let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));
let newStartUp = `A startup that is ${startupX[random1]} and ${startupY[random2]}`;

crtBtn.addEventListener('click', function() {    
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    let newStartUp = `A startup that is ${startupX[random1]} and ${startupY[random2]}`;
    document.getElementById('xForY').innerHTML = newStartUp;
    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}) 

// Stretch goals

let svBtn = document.getElementById('save');
let saveList = []

svBtn.addEventListener('click', function() {
    saveList.push(newStartUp);
    console.log(saveList);
})  

let prtFav = document.getElementById('print');
prtFav.addEventListener('click', function() {
    document.getElementById('favorites').innerHTML = startupX + startupY
})

