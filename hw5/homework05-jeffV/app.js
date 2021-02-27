function appendLyric(lyric) {
  let $ul = $('.lyrics')
  $ul.css('list-style-type', 'none')
  let element = $('<li>')
  element.text(lyric)
  $ul.append(element);
}

function lastLyricInVerse(lyric) {
  let $ul = $('.lyrics')
  $ul.css('list-style-type', 'none')
  let element = $('<li>')
  element.css('margin-bottom', '10px')
  element.text(lyric)
  $ul.append(element);
}


function bottleOfBeer() {
  let i = 100;
  while (i >= 1) {
    let bottle = i === 1 ? 'bottle' : 'bottles';
    let lyric = `${i} ${bottle} of beer on the wall,`
    appendLyric(lyric);
    lyric = `${i} ${bottle} of beer!`
    appendLyric(lyric);
    i--;
    bottle = i === 1 ? 'bottle' : 'bottles';

    lyric = `Take one down, pass it around,`
    appendLyric(lyric);
    lyric = `${i} ${bottle} of beer on the wall.`
    lastLyricInVerse(lyric);
  };
}

bottleOfBeer();