  
let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Microsoft'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

let msg = "A startup that is " + startupX[random1] + " but for ," + startupY[random2];
document.getElementById("create").addEventListener("click", function() {
    document.getElementById("xForY").innerHTML=msg;
});




// Note: I couldnt figure out why it works only one time, susequent clicks does not work. 


