let strNumber=[123,456,789];
let strName=['Yoakum pkwy', 'Whting st', 'Stevenson st'];
let cityName=['Alexandria', 'Arlington', 'FallsChurch'];
let zipCode=[1111,2222,3333];

let rStrNumber=Math.floor(Math.random() * strNumber.length);
let rStrName=Math.floor(Math.random() * strName.length);
let rCityName=Math.floor(Math.random() * cityName.length);
let rZipCode=Math.floor(Math.random() * zipCode.length);

console.log((strNumber[rStrNumber].toString()), strName[rStrName] +', '+  cityName[rCityName] +', VA ' + zipCode[rZipCode]);
