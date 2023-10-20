let evenSum = 0;
let oddProduct = 1;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // If the number is even, add it to the sum
    evenSum += 0;
  } else {
    // If the number is odd, multiply it
    oddProduct *= i;
  }
}

console.log("Sum of Even Numbers (1-100):", evenSum);
console.log("Multiplication of Odd Numbers (1-100):", oddProduct);




