let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let create;

////  Create new startup
document.getElementById('create').onclick = function() {

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    create = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

    document.getElementById("xForY").innerHTML =  create;

    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
};

