document.getElementById("song").addEventListener("click", () => {
    let song = ''
    for (let i = 100; i >= 1; i--) {
        if (i > 1) {
            let line1 = `${i} bottles of beer on the wall,`
            let line2 = `${i} bottles of beer!`
            let line3 = 'Take one down,'
            let line4 = 'Pass it around,'
            let line5 = `${i - 1} bottles of beer on the wall!`
            song = song + '\n' + '\n' + `${line1}
            ${line2}
            ${line3}
            ${line4}
            ${line5}`
            document.getElementById("printsong").innerHTML = song
        }
        else {
            let line1 = `${i} bottle of beer on the wall,`
            let line2 = `${i} bottle of beer!`
            let line3 = 'Take one down,'
            let line4 = 'Pass it around,'
            let line5 = `No more bottles of beer on the wall!`
            song = song + '\n' + '\n' + `${line1}
            ${line2}
            ${line3}
            ${line4}
            ${line5}`
            document.getElementById("printsong").innerHTML = song
        }
    }
})

let streetNumber = ["25489", "87459", "35478", "15975", "95125", "78965"]
let streetName = ["A street", "B street", "C street", "D street", "E street", "F street"]
let cityName = ["NYC", "Gaithersburg", "Rockville", "Paris", "LA", "Pasedena", "Piscataway"]
let stateName = ["NY", "MD", "NJ", "WA", "CA"]
let zipCode = ["28889", "96459", "35748", "15005", "99625", "71465"]
let address = ''

document.getElementById("address").addEventListener("click", () => {
    let streetNum = streetNumber[Math.floor(Math.random() * streetNumber.length)]
    let streetNam = streetName[Math.floor(Math.random() * streetName.length)]
    let city = cityName[Math.floor(Math.random() * cityName.length)]
    let state = stateName[Math.floor(Math.random() * stateName.length)]
    let zip = zipCode[Math.floor(Math.random() * zipCode.length)]
    address = `${streetNum} ${streetNam} ${city} ${state} ${zip}`
    document.getElementById("printaddress").innerHTML = address
})