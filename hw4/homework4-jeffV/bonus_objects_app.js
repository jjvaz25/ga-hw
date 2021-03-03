/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for 
// keeping track of things. In comments, list at least three reasonable abstractions 
// that you might use to build this program; for each abstraction, list out at least 
// two properties and behaviors that it would make sense for that abstraction to have. 
// Below is an example - please write your answer in the same format.

  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
  /*
  'Calendar'
  'Description': Our app manages someones schedule via a Calendar
  Every 'calendar' has:
  -- An owner
  -- Months/Days
  -- holidays
  Every 'calendar' can:
  -- schedule a meeting
  -- change view (monthly, weekly, daily)
  -- delete an event
  */

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. 
//Store it in the variable 'pet_owner', below. Be sure to give it reasonable 
//values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

let pet_owner = {
  name: 'jeff',
  address: {
    address1: '4136 Lyceum ave',
    address2: '',
    city: 'Los Angeles',
    state: 'CA',
    zipcode: '90066'
  }
}
// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

let some_pet = {
  name: 'Maggie',
  species: 'dog',
  breed: 'mutt',
  noise: 'bark',
  speak: function() {
    console.log(this.noise)
  }
}

console.log(some_pet.name);
some_pet.speak()

// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The 
//constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor 
//function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

let Pet = function(name, species, breed, noise) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise = noise;
  console.log(`New pet named ${this.name} initialized`);
}

Pet.prototype.speak = function() {
  console.log(this.noise.toUpperCase());
}

let maggie = new Pet('Maggie', 'dog', 'pitbull', 'bark');
maggie.speak();
console.log(maggie.name, maggie.species, maggie.breed, maggie.noise);

// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
