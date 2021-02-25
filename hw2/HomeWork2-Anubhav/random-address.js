let streetNumber = ["25489", "87459", "35478", "15975", "95125", "78965"]
let streetName = ["A street", "B street", "C street", "D street", "E street", "F street"]
let cityName = ["NYC", "Gaithersburg", "Rockville", "Paris", "LA", "Pasedena", "Piscataway"]
let stateName = ["NY", "MD", "NJ", "WA", "CA"]
let zipCode = ["28889", "96459", "35748", "15005", "99625", "71465"]
let address = ''


let streetNum = streetNumber[Math.floor(Math.random() * streetNumber.length)]
let streetNam = streetName[Math.floor(Math.random() * streetName.length)]
let city = cityName[Math.floor(Math.random() * cityName.length)]
let state = stateName[Math.floor(Math.random() * stateName.length)]
let zip = zipCode[Math.floor(Math.random() * zipCode.length)]
address = `${streetNum} ${streetNam} ${city} ${state} ${zip}`

console.log(address)