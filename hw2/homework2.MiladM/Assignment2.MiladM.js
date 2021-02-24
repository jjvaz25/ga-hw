let streetNumber = [254, 45, 212, 365, 2543];
let streetName = ['Beecroft', 'Sylla', 'Young', 'Kings RD'];
let cityName = ['Toronto', 'North York', 'Scarborough', 'York mills'];
let stateName = ['Ontario', 'Quebec', 'Alberta', 'british columbia'];
let zipCode = ['M2N7F5', 'J4F8F4', 'fgd34j4', 'k5h6le'];
let random_streetNumber = function (streetNumber) {
    return streetNumber[Math.floor(Math.random() * streetNumber.length)];
}
//console.log(random_streetNumber(streetNumber));

let random_streetName = function (streetName) {
    return streetName[Math.floor(Math.random() * streetName.length)];
}
//console.log(random_streetName(streetName));

let random_cityName = function (cityName) {
    return cityName[Math.floor(Math.random() * cityName.length)];
}
//console.log(random_cityName(cityName));

let random_stateName = function (stateName) {
    return stateName[Math.floor(Math.random() * stateName.length)];
}
//console.log(random_stateName(stateName));

let random_zipCode = function (zipCode) {
    return zipCode[Math.floor(Math.random() * zipCode.length)];
}
//console.log(random_zipCode(zipCode));

console.log(random_streetNumber(streetNumber) + ' ' + random_streetName(streetName) + ', ' + random_cityName(cityName) + ', ' + random_stateName(stateName) + ', ' + random_zipCode(zipCode));