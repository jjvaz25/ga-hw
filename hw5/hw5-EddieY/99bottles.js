let makeSong = function (song) {
    let songList = document.getElementById("song-list");
    let songLine = document.createElement("li");
    let songText = document.createTextNode(song);

    songLine.appendChild(songText);
    songList.appendChild(songLine);
};

    
window.onload = function beer() {
    let bottles;
    let bottlesRemaining;

    for (i = 99; i >= 1; i--) {
        if (i === 1) {
            bottles = "bottle";
            bottlesRemaining = "No more bottles of beer on the wall."
        } else if (i === 2) {
            bottlesRemaining = "1 bottle of beer on the wall."
            
        }else {
            bottles = "bottles";
            bottlesRemaining = i -1 + " bottles of beer on the wall.";
        }
            makeSong(i + " " + bottles + " of beer on the wall,");
            makeSong(i + " " + bottles + " of beer,");
            makeSong("Take one down, pass it around,");
            makeSong(bottlesRemaining);
    };
};