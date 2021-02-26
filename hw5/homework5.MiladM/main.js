function addLyrics() {
  
  let ul = document.getElementById('fav-list');
  
  let lyrics;
  for (let i = 100; i >= 1; i--) {
    if (i === 1) {
        lyrics = (`${i} bottle of beer on the wall,
        ${i} bottle of beer!
        Take one down,
        Pass it around,`);
        let li = document.createElement('li');
        let liVal = document.createTextNode(lyrics);
        li.appendChild(liVal);
        ul.appendChild(li);
    } else {
        lyrics = (`${i} bottles of beer on the wall,
        ${i} bottles of beer!
        Take one down,
        Pass it around,`);
        let li = document.createElement('li');
        let liVal = document.createTextNode(lyrics);
        li.appendChild(liVal);
        ul.appendChild(li);
    }
}
return lyrics;

};

let button = document.getElementById('new-thing-button');
button.onclick = function(event){
  event.preventDefault();
  addLyrics();
 
};


////////////////////////////////////






