let fruits = ['apple', 'banana'];
fruits.push('cherry');
console.log(fruits);
//pop()`:
let chinni = ['been', 'bana', 'chinni'];
fruits.pop();
console.log(chinni);
letfruits = ['apple', 'banana', 'cherry'];

// push(): Adds elements to the end of an array.
javascript
letfruits = ['apple', 'banana'];
fruits.push('cherry');
console.log(fruits); // ["apple", "banana", "cherry"]


// pop(): Removes the last element from an array.
javascript
letfruits = ['apple', 'banana', 'cherry'];
fruits.pop();
console.log(fruits); // ["apple", "banana"]


// shift(): Removes the first element from an array.
javascript
letfruits = ['apple', 'banana', 'cherry'];
fruits.shift();
console.log(fruits); // ["banana", "cherry"]


// unshift(): Adds elements to the beginning of an array.
javascript
letfruits = ['banana', 'cherry'];
fruits.unshift('apple');
console.log(fruits); // ["apple", "banana", "cherry"]


// replace(): There is no direct `replace()` method for arrays. You would use array indexing to replace elements.

//slice(): Extracts a portion of an array into a new array.
javascript
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]


// reduce(): Reduces an array to a single value.
javascript
letnumbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15


// filter(): Creates a new array with elements that pass a test.
javascript
letnumbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


// map(): Creates a new array by applying a function to each element.
javascript
letnumbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]


// concat(): Combines two or more arrays.
javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]


// join(): Converts an array into a string by joining its elements.
javascript
letfruits = ['apple', 'banana', 'cherry'];
let joinedString = fruits.join(', ');
console.log(joinedString); // "apple, banana, cherry"


// forEach(): Iterates over the elements of an array.
javascript
letfruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
// Outputs:
// "apple"
// "banana"
// "cherry"


// indexOf(): Returns the index of the first occurrence of an element in the array.
javascript
letfruits = ['apple', 'banana', 'cherry'];
let index = fruits.indexOf('banana');
console.log(index); // 1