// window.onload = function() {
    // let $listItem = $('<li class=\"lyric\">');
    function addToList($list, thing) {
        let $newLi = $('<li class=\"lyric\">');
        $newLi.text(thing);
        $list.append($newLi);
        }
        let $thingList = $('.lyricList');
        

    // for (let i = 0; i < 99; i++) {
    for (let i = 99; i > 0; i-- ) {

        let j = i - 1;
        if (i >= 3) {
            let newThing1 = (`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${j} bottles of beer`);
            setTimeout(function() {addToList($thingList, newThing1)}, 2000 * (100-i))
        // $newThingInput.val('');
        } else if (i >= 2){
            let newThing2 = (`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${j} bottle of beer`);
            setTimeout(function() {addToList($thingList, newThing2)}, 2000 * (100-i))
        }
        
        else {
            let newThing3 = (`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down, pass it around, There's no more bottles of beer on the wall!`)
            setTimeout(function() {addToList($thingList, newThing3)}, 2000 * (100-i))
        }
    
        }




// }



// for (let i = 99; i > 0; i--) {
//     let j = i - 1;
//         if (i >= 2) {console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${j} bottles of beer`)} 

//         else if ( i === 1) {console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down, pass it around, There's no more bottles of beer on the wall!`)
//     }
    
//     }