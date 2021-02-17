// Declare dummy data
let streetNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 1234, 77, 15322, 11978, 12];
let streetNames = ['Main Street', 'Bridge Road', 'Clinton Circle', 'Elm Street', 'Sunset Boulevard', 'Oceanview Highway', 'First Street', 'Third Street', 'Palm Drive', 'Oak Lane'];
let cityNames = ['Paris', 'Richmond', 'Augusta', 'Sacramento', 'Lexington', 'Frankfurt', 'Honolulu', 'Las Vegas', 'New York City', 'Santa Monica', 'St. Louis', 'Dallas', 'Boise', 'London'];
let stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennesee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
let zipCodes = [13579, 24680, 12378, 28765, 54687, 65512, 70777, 81856, 99999, 12345, 23456, 34567, 45678, 56789, 67890, 98765, 43210];

// Helper functions
function getRandomArrayValue(inputArray) {
    return inputArray[Math.floor(Math.random() * inputArray.length)];
};

function generateSentence() {
    return `${getRandomArrayValue(streetNumbers)} ${getRandomArrayValue(streetNames)}, ${getRandomArrayValue(cityNames)}, ${getRandomArrayValue(stateNames)} ${getRandomArrayValue(zipCodes)}`;
};

// Log sentence to console.
console.log(generateSentence());