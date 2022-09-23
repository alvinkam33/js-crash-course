const x1 = 10;
const x2 = 5;
const y = "10";
const z = "10";

// difference between == and ===: === checks for matching type as well
console.log(x1 == y); // prints true
console.log(x1 === y); // prints false

console.log(y == z); // prints true
console.log(y === z); // prints true

console.log(x1 != y); // prints false
console.log(x1 !== y); // prints true

// if statement
if (x1 > x2) {
	console.log(`${x1} is greater than ${x2}`);
}

// if/else
if (x1 > x2) {
	console.log(`${x1} is greater than ${x2}`);
} else {
	console.log(`${x2} is greater than ${x1}`);
}

// else if
if (x1 > x2) {
	console.log(`${x1} is greater than ${x2}`);
} else if (x1 === x2) {
	console.log(`${x1} is equal to ${x2}`);
} else {
	console.log(`${x2} is greater than ${x1}`);
}

// not
if (!(x1 > 15)) {
	console.log(`${x1} is not greater than 15`);
}

// and
if (x1 > 8 && x1 < 12) {
	console.log(`${x1} is greater than 8 and less than 12`);
}

// or
if (x1 > 15 || x1 < 11) {
	console.log(`${x1} is greater than 15 or less than 11`);
}
