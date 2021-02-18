let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let createButton;
let favoriteStartUp = []

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

//Create new startup button
document.getElementById("create").onclick = function getStartup () {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    createButton = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    document.getElementById("xForY").innerHTML = createButton;
}

//Favorite button
//* Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup" button is clicked, it should save that madlib saying to an array.


//Print button
//* Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked, it should display all of the favorited startups in the array underneath the h2 with an ID of `favorites`.


