const x1 = 10;
const x2 = 5;
const y = "10";
const z = "10";

// difference between == and ===: === checks for matching type as well
console.log(x1 == y); // prints true
console.log(x1 === y); // prints false

console.log(y == z); // prints true
console.log(y === z); // prints true

// if statement
if (x1 > x2) {
  console.log(`${x1} is greater than ${x2}`)
}

// if/else
if (x1 > x2) {
  console.log(`${x1} is greater than ${x2}`)
} else {
  console.log(`${x2} is greater than ${x1}`)
}

// else if
if (x1 > x2) {
  console.log(`${x1} is greater than ${x2}`)
} else if (x1 === x2) {
  console.log(`${x1} is equal to ${x2}`)
} else {
  console.log(`${x2} is greater than ${x1}`)
}