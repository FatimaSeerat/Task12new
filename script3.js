import { numbers, moreNumbers, letters, person, updatedPerson } from './script1.js';
import { fruits, moreFruits, sumNumbers, numbers2, newCar } from './script2.js';


console.log("Numbers:", numbers);
console.log("More Numbers:", moreNumbers);

console.log("Letters from string:", letters);

console.log("Person:", person);
console.log("Updated Person:", updatedPerson);

console.log("Fruits:", fruits);
console.log("More Fruits:", moreFruits);

console.log("Sum of numbers2:", sumNumbers(...numbers2));

console.log("Car:", newCar);
