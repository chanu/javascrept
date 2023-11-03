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
