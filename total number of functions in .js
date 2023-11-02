// Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (x, y) => x * y;

// Anonymous Function
const sayHello = function() {
    console.log("Hello, world!");
};

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE!");
})();

// Callback Function
function calculate(a, b, operation) {
    return operation(a, b);
}

function square(x) {
    return x * x;
}

console.log(calculate(5, 3, add));        // 8
console.log(calculate(4, 2, multiply));   // 8
console.log(calculate(6, 0, square));     // 36

