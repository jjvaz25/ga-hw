
// Randomly Generates a Madlib
document.getElementById("create").onclick = function () {

    let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    document.getElementById('xForY').innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}

// Globally declared Array for storing favorite Madlibs
let madlib = [];

// Stores Favorite Madlib into the Array and console.logs the result for validation purposes
document.getElementById('save').onclick = function () {

    let favoriteStartUp = document.getElementById('xForY').innerText;
    madlib.push(favoriteStartUp);

    console.log(madlib);
}

// I haven't Figured this part out yet...
document.getElementById('print').onclick = function () {

    alert("I regret to inform you that this button does not work yet. Please check back later!");

    // document.getElementById('favorites').innerHTML = `Favorites:<br>`;

    // let favoritesList = document.createElement('ul');
    // let favoritesListItems = document.createElement('li');
    // let finalList = favoritesList.appendChild(favoritesListItems);

    // for (i = 0; i <= madlib.length; i++) {
    //     finalList = madlib[i];

    //     console.log(finalList);
    //     console.log(madlib);
    // }
};




