javascript
// Sample array of objects
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

// 1. Accessing objects by index
const person1 = people[0]; // Access the first object
console.log(person1.name); // Output: "Alice"

// 2. Iterating through the array
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name); // Output the name of each person
}

// 3. Using forEach to iterate
people.forEach((person) => {
  console.log(person.name); // Output the name of each person
});

// 4. Filtering objects based on a condition
const adults = people.filter((person) => person.age >= 30);
console.log(adults); // Output: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]

// 5. Mapping objects to a new array
const names = people.map((person) => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// 6. Modifying objects
people[1].age = 26; // Change Bob's age to 26

// 7. Adding an object to the array
const newPerson = { name: 'David', age: 28 };
people.push(newPerson); // Add David to the end of the array

// 8. Removing an object from the array
const indexToRemove = 2; // Index of Charlie
people.splice(indexToRemove, 1); // Remove Charlie from the array

console.log(people); // Output the updated array

