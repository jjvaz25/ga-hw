window.onload = function () {

    let lyrics = "";

    for (i = 100; i >= 1; i--) {

        let wallBeer = i;
        let handBeer = i - 1;

        if (wallBeer === 2 && handBeer === 1) {
            lyrics = `${wallBeer} bottles of &#x1F37B on the wall, ${wallBeer} bottles of &#x1F37B! Take one down, pass it around, ${handBeer} bottle of &#x1F37B on the wall...`;
        } else if (wallBeer === 1) {
            lyrics = `${wallBeer} bottle of &#x1F37B on the wall, ${wallBeer} bottle of &#x1F37B! Take it down, pass it around, ${handBeer} bottles of &#x1F37B on the wall.`;
        } else {
            lyrics = `${wallBeer} bottles of &#x1F37B on the wall, ${wallBeer} bottles of &#x1F37B! Take one down, pass it around, ${handBeer} bottles of &#x1F37B on the wall...`;
        };

        let lyricsList = document.getElementById("songLyrics");
        let bullets = document.createElement("li");

        bullets.innerHTML = lyrics;
        lyricsList.appendChild(bullets);
    };
}

