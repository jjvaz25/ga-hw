let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


const createStartupBtn = document.getElementById('create');
const createStartup = () => {
    let h1Element = document.getElementById('xForY');
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    let madlib = `A startup that is ${startupX[random1]} but for ${startupY[random2]}`;
    h1Element.innerHTML = madlib;
};
createStartupBtn.addEventListener('click', createStartup);


