let streetNumber = [1, 2, 3, 4, 5];
let streetName = ["a rd", "b st", "c ave"];
let cityName = ["chicago", "nyc", "sf"]
let stateName = ['IL', 'NY', 'CA']; 
let zip = [11, 12, 13, 14, 15]; 

let address = [];
address[0] = (Math.floor(Math.random()) * streetNumber);
console.log(address)
console.log(Math.floor(Math.random()) * streetNumber);
console.log(Math.floor(Math.random()) * streetNumber);
console.log(streetNumber[Math.floor(Math.random() * streetNumber)]);

address.push(streetNumber[Math.floor(Math.random() * streetNumber)]);
address.push(streetName[Math.floor((Math.random() * streetName))]);
address.push(cityName[Math.floor((Math.random() * cityName))]);
address.push(stateName[Math.floor((Math.random() * stateName))]);
address.push(zip[Math.floor((Math.random() * zip))]);

console.log(address[0], " ", address[1], ", ", address[2], ", ", address[3], address[4]);