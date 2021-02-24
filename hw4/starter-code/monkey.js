/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

let monkey = {
    name: "",
    species: "",
    foodsEaten: [],
    eatSomething: (food) => {
        return monkey.foodsEaten.push(food)
    },
    introduce: () => {
        return `${monkey.name} is a ${monkey.species} and has eaten ${monkey.foodsEaten}`
    }
}

let monkey1 = JSON.parse(JSON.stringify(monkey))
let monkey2 = JSON.parse(JSON.stringify(monkey))
let monkey3 = JSON.parse(JSON.stringify(monkey))

//We can give name, species and call function foodsEaten and introduce
monkey1.name = "ABC"
monkey1.species = "Chimp"
monkey1.eatSomething('banana')
monkey1.introduce()
// output will be "ABC is a Chimp and has eaten banana"
