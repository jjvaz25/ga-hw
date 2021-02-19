let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let crtBtn = document.getElementById('create');

//Minimum Requirements
//global variable is bad practice 
let newStartUp = '';

crtBtn.addEventListener('click', function() {    
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    newStartUp = `A startup that is ${startupX[random1]} and ${startupY[random2]}`;    
    document.getElementById('xForY').innerHTML = newStartUp;
})

//Stretch Goals

let svBtn = document.getElementById('save');
let saveList = []

svBtn.addEventListener('click', function() {
    
    document.getElementById('xForY').innerHTML = 'Saved to console.'
    // why does this work when the "saved to console" code goes before the push code?
    saveList.push(newStartUp);
    
})


let prtBtn = document.getElementById('print');
prtBtn.addEventListener('click', function() {
    document.getElementById('favorites').innerHTML = saveList.join(', '); 
})

/*
let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

//Minimum Requirements

let crtBtn = document.getElementById('create');
let newStartUp = `A startup that is ${startupX[random1]} and ${startupY[random2]}`

crtBtn.addEventListener('click', function() {    
    document.getElementById('xForY').innerHTML = newStartUp
})

//Stretch Goals

let svBtn = document.getElementById('save');
let saveList = []

svBtn.addEventListener('click', function() {
    saveList.push(newStartUp);
    console.log(saveList);
    document.getElementById('xForY').innerHTML = 'Saved to console.'
})


let prtBtn = document.getElementById('print');
prtBtn.addEventListener('click', function() {
    document.getElementById('favorites').innerHTML = startupX + startupY
})
*/