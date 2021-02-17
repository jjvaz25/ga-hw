let streetNumber = [1, 2, 3, 4, 5];
let streetName = ["a rd", "b st", "c ave"];
let cityName = ["chicago", "nyc", "sf"]
let stateName = ['IL', 'NY', 'CA']; 
let zip = [11, 12, 13, 14, 15]; 

let address = [];

address.push(streetNumber[Math.floor(Math.random() * streetNumber.length)]);
address.push(streetName[Math.floor(Math.random() * streetName.length)]);
address.push(cityName[Math.floor(Math.random() * cityName.length)]);
address.push(stateName[Math.floor(Math.random() * stateName.length)]);
address.push(zip[Math.floor(Math.random() * zip.length)]);

console.log(address[0] + " " + address[1] + ", " + address[2] + ", " + address[3] + " " + address[4]);
