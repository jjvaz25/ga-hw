// globals
let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let favoriteStartUps = [];

/********************  
 * 
 * Starter code --> moved to helper functions below
 * 
 * let random1 = Math.floor((Math.random() * startupX.length));
 * let random2 = Math.floor((Math.random() * startupY.length));
 * console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
 * 
********************/

function getRandomArrayValue(inputArray) {
    return inputArray[Math.floor((Math.random() * inputArray.length))];
};

function generateSentence(array1, array2) {
    return 'A startup that is ' + getRandomArrayValue(array1) + ', but for ' + getRandomArrayValue(array2);
};

function printArrayValuesasList(arrayToPrint) {
    return '<li>' + arrayToPrint.join('</li><li>') + '</li>';
};

function addFavorite(favoritedValue) {
    favoriteStartUps.push(favoritedValue);
};


$(document).ready(function () {

    // Handle 'Create New Startup' click
    $('#create').click(function () {
        $('#xForY').text(generateSentence(startupX, startupY));
    });

    // Handle 'Favorite Startup' click
    $('#save').click(function () {
        addFavorite($('#xForY').text());
    });

    // Handle 'Print Favorites' click
    $('#print').click(function () {
        $('#favorites').html('<ul>' + printArrayValuesasList(favoriteStartUps) + '</ul>');
    });

});
