let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let create;
let favorite = [];
let favoriteList;
let favoritePrint;

////  Create new startup
function newStartup() {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));

    create = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    document.getElementById("xForY").innerHTML =  create;

    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}


// Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup" button is clicked, it should save that madlib saying to an array.
function saveFavorite() {
    favoriteList = favorite.push(create);
    console.log(favorite);
}


/*Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked, 
it should display all of the favorited startups in the array underneath the h2 with an ID of `favorites`.*/
function printFavorite() {
    

    for(i = 0; i < favorite.length; i++){
        if (favorite[i].includes('.')) {
            favorite[i] = favorite[i] + "";
        } else {
            favorite[i] = favorite[i] + ".";
        }
        
    }
    
    document.getElementById("favorites").innerHTML = favorite.join("<br>");
}

document.getElementById("create").addEventListener("click", newStartup);
document.getElementById("save").addEventListener("click", saveFavorite);
document.getElementById("print").addEventListener("click", printFavorite);