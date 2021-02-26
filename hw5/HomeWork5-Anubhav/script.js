// document.getElementById("song").addEventListener("click", () => {
//     let ul = document.getElementById("song-text")
//     function song(line) {
//         let li = document.createElement("li")
//         li.textContent = line
//         return li
//     }
//     for (let i = 100; i >= 1; i--) {
//         if (i > 1) {
//             ul.appendChild(song(`${i} bottles of beer on the wall,`))
//             ul.appendChild(song(`${i} bottles of beer!`))
//             ul.appendChild(song('Take one down,'))
//             ul.appendChild(song('Pass it around,'))
//             if (i > 2) {
//                 ul.appendChild(song(`${i - 1} bottles of beer on the wall!`))
//             } else {
//                 ul.appendChild(song(`${i - 1} bottle of beer on the wall!`))
//             }
//         }
//         else {
//             ul.appendChild(song(`${i} bottle of beer on the wall,`))
//             ul.appendChild(song(`${i} bottle of beer!`))
//             ul.appendChild(song('Take one down,'))
//             ul.appendChild(song('Pass it around,'))
//             ul.appendChild(song('No more bottles of beer on the wall!'))
//         }
//     }
// })

//jquery
$('#song').click(() => {
    for (let i = 100; i >= 1; i--) {
        if (i > 1) {
            $('#song-text').append(`<li> ${i} bottles of beer on the wall, </li>`)
            $('#song-text').append(`<li> ${i} bottles of beer! </li>`)
            $('#song-text').append(`<li> Take one down, </li>`)
            $('#song-text').append(`<li> Pass it around, </li>`)
            if (i > 2) {
                $('#song-text').append(`<li> ${i - 1} bottles of beer on the wall! </li>`)
            }
            else {
                $('#song-text').append(`<li> ${i - 1} bottle of beer on the wall! </li>`)
            }
        }
        else {
            $('#song-text').append(`<li> ${i} bottle of beer on the wall, </li>`)
            $('#song-text').append(`<li> ${i} bottle of beer! </li>`)
            $('#song-text').append(`<li> Take one down, </li>`)
            $('#song-text').append(`<li> Pass it around, </li>`)
            $('#song-text').append(`<li> No more bottles of beer on the wall! </li>`)

        }

    }

})