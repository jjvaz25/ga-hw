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

function printArrayValuesAsList(arrayToPrint) {
    return '<li>' + arrayToPrint.join('</li><li>') + '</li>';
};

function generateSentence(array1, array2) {
    return 'A startup that is ' + getRandomArrayValue(array1) + ', but for ' + getRandomArrayValue(array2);
};

function addFavorite(favoritedValue) {
    favoriteStartUps.push(favoritedValue);
};

function unfavorite(indexValue) {
    favoriteStartUps.splice(indexValue, 1);
};

function togglefavoriteButton(onOrOff) {
    if (onOrOff.toLowerCase() === 'on') {
        $('#save').removeClass('favorited');
        $('#save').text('Favorite Startup');
    } else if (onOrOff.toLowerCase() === 'off') {
        $('#save').addClass('favorited');
        $('#save').text('Favorited!');
    }
};

$(document).ready(function () {

    // Handle 'Create New Startup' click
    $('#create').click(function () {

        // Generate mad lib
        let madLib = generateSentence(startupX, startupY);
        $('#xForY').text(madLib);

        // Check if we've already favorited this mad lib. If so, mark it as already favorited.
        favoriteStartUps.includes(madLib) ? togglefavoriteButton('off') : togglefavoriteButton('on');

    });

    // Handle 'Favorite Startup' click
    $('#save').click(function () {

        let currentMadLib = $('#xForY').text();

        // Only run favorite logic if a madlib actually exists.
        if (currentMadLib) {

            // Check if we've already favorited this phrase. If not, add it. If so, remove it.
            let indexOfMadLib = favoriteStartUps.indexOf(currentMadLib);

            if (indexOfMadLib > -1) {
                unfavorite(indexOfMadLib);
                togglefavoriteButton('on');
            } else {
                addFavorite(currentMadLib);
                togglefavoriteButton('off');
            }

        }
    });

    // Handle 'Print Favorites' click
    $('#print').click(function () {
        $('#favorites').html('<ul>' + printArrayValuesAsList(favoriteStartUps) + '</ul>');
    });

});
