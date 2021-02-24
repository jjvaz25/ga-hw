/*
let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

// document.getElementById('create').onclick = crtStartup;

function crtStartup () {
    let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    let title = document.getElementById('create').onclick = crtStartup;
} 

*/

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