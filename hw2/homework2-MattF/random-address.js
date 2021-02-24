
let houseNumber = Math.floor(Math.random() * 5000);
let streetName = ['Athena', 'George Waterman', 'Glenville', 'Hartford', 'Wakefield', 'Regency', 'Raven'];
let streetType = ['Street', 'Ave.', 'Blvd.', 'Drive', 'Pkwy', 'Lane', 'Court',];
let townName = ['North Pole', 'Johnston', 'Providence', 'Allston', 'Boston', 'Narragansett', 'Fairbanks'];
let stateName = ['AK', 'RI', 'MA', 'NY', 'VT', 'NH', 'WA'];
let zipCode = ['02919', '02134', '02879', '99577', '99508', '02875', '99705'];



let random1 = Math.floor((Math.random() * streetName.length));
let random2 = Math.floor((Math.random() * streetType.length));
let random3 = Math.floor((Math.random() * townName.length));
let random4 = Math.floor((Math.random() * stateName.length));
let random5 = Math.floor((Math.random() * zipCode.length));

console.log(
    `${houseNumber} ${streetName[random1]} ${streetType[random2]}, ${townName[random3]}, ${stateName[random4]} ${zipCode[random5]}`
);