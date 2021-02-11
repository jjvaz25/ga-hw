let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let favMadlibs = [];


// Minimum requirements: Create new startup button

const createStartupBtn = document.getElementById('create');
const createStartup = () => {
    let h1Element = document.getElementById('xForY');
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    let madlib = `A startup that is ${startupX[random1]} but for ${startupY[random2]}`;
    h1Element.innerHTML = madlib;
};
createStartupBtn.addEventListener('click', createStartup);

// STRETCH GOALS

// Saving madlib to an array using the "favorite Startup" button
const favStartupBtn = document.getElementById('save');
const saveStartup = () => {
    let startup = document.getElementById('xForY').innerHTML;
    startup === '' ? alert('You need to generate a startup before saving it!') : 
        favMadlibs.includes(startup) ? alert('You already favorited that startup!') : 
            favMadlibs.push(startup);
}

favStartupBtn.addEventListener('click', saveStartup);

// Print favorites to an array
const printFavoritesBtn = document.getElementById('print');
const printStartups = () => {
    let favStartupsList = document.getElementById('favoritesList');
    favStartupsList.innerHTML = '';
    favMadlibs.forEach((startup) => {
        let listItem = document.createElement('li');
        let newLi = favStartupsList.appendChild(listItem);
        newLi.innerHTML = startup;
    })
}
printFavoritesBtn.addEventListener('click', printStartups);