// street number random
let streetNumber = Math.floor(Math.random() * 100)
//street name
let streetName = ['Apple', 'Buttersmith', 'Carnarvon', 'Dunedin','Edmond','Freo','General', "Hughes", "Iguana", 'Jackaranda', 'Killmore', 'Lang', 'Monstera']
let streetNameRandom = Math.floor(Math.random() * streetName.length);
//street type added for fun
let streetType = ['St', 'Ave', 'Pl', 'Dr', 'Ln']
let streetTypeRandom = Math.floor(Math.random() * streetType.length);
// state name
let stateName = ['ACT', 'NSW', 'VIC', 'WA', 'SA', 'TAS']
let stateNameRandom = Math.floor(Math.random() * stateName.length);

// For the area code, create an array of 4 random numbers, at the console join these together and remove any characters between. I did this to ensure to area code would be a set length
let areaCode = []
for (let i = 0; i < 4; i++) {
  areaCode.push(Math.floor(Math.random() * 10))
}

console.log(`${streetNumber} ${streetName[streetNameRandom]} ${streetType[streetTypeRandom]}, ${stateName[stateNameRandom]} ${areaCode.join("")}, Australia`)
