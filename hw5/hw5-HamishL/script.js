function addToList($list, thing) {
    let $newLi = $('<li class=\"lyric\">').fadeIn(500);
    $newLi.text(thing);
    $list.append($newLi);
};
let $thingList = $('.lyricList');

for (let i = 99; i > 0; i--) {
    let j = i - 1;
    let timeMs = 2000
    if (i >= 3) {
        let newThing1 = (`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${j} bottles of beer`);
        setTimeout(function () {
            addToList($thingList, newThing1)
        }, timeMs * (100 - i));
    } else if (i >= 2) {
        let newThing2 = (`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${j} bottle of beer`);
        setTimeout(function () {
            addToList($thingList, newThing2)
        }, timeMs * (100 - i));
    } else {
        let newThing3 = (`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down, pass it around, There's no more bottles of beer on the wall!`);
        setTimeout(function () {
            addToList($thingList, newThing3)
        }, timeMs * (100 - i));
    };
};