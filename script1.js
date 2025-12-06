// Spread in Array
export const numbers = [1, 2, 3];
export const moreNumbers = [...numbers, 4, 5, 6];

// Spread in String
export const greeting = "Hello";
export const letters = [...greeting]; // ["H", "e", "l", "l", "o"]

// Spread in Object
export const person = { name: "Seerat", age: 20 };
export const updatedPerson = { ...person, city: "Karachi" };
