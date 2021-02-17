// Assignment 1 solution: 99 bottles of beer on the wall

let bottle = 100; 
while (bottle > 2) {
    console.log(`${bottle} bottles of beer on the wall, ${bottle} bottles of beer! Take one down, Pass it around, ${bottle - 1} bottles of beer on the wall!` );
    bottle--;
}
console.log(`2 bottles of beer on the wall, 2 bottles of beer! Take one down, Pass it around, 2 bottle of beer on the wall!` );
console.log(`1 bottle of beer on the wall, 1 bottles of beer! Take one down, Pass it around, no more bottles of beer on the wall!` );

// Assignment 2

let streetNumber = [13, 21, 34, 55, 89, 144, 233, 377]
let streetName = ['baker', 'broadway', 'bowery', 'canal', 'park', 'lexington']
let cityName = ['tokyo', 'munich', 'belfast', 'madrid', 'prague', 'osaka']
let stateName = ['NY', 'MA', 'VA', 'CO', 'IL', 'TX']
let zipCode = [11216, 11001, 14453, 21809, 64378]

let randomState = Math.floor((Math.random() * stateName.length));
let randomNumber = Math.floor((Math.random() * streetNumber.length));
let randomCity = Math.floor((Math.random() * cityName.length));
let randomZip = Math.floor((Math.random() * zipCode.length));
let randomStreet = Math.floor((Math.random() * streetName.length));

console.log(streetNumber[randomNumber], streetName[randomStreet] + ' street,', cityName[randomCity] + ',', stateName[randomState] + ',', zipCode[randomZip]);




