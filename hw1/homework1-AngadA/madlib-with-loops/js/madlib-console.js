
let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter','Discord'];
let startupY = ['AMD', 'Sony', 'Tesla', 'Hyperloop', 'Doge', 'Nintendo', 'Nvidia'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

let cratButton = document.getElementById('create');
let newStaUp = `A startup that is ${startupX[random1]} and ${startupY[random2]}`

    cratButton.addEventListener('click', function() {    
    document.getElementById('xForY').innerHTML = newStaUp
    
})

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


// Need a better understanding and more practice with getElementById. 

