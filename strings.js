const string = "Alvin Kam";
const time = 2;

// three ways to concatenate:
console.log(
	"Hello, my name is " + string + " and I am presenting a workshop at " + time
);

console.log(
	`Hello, my name is ${string} and I am presenting a workshop at ${time}`
);

console.log(
	"Hello, my name is "
		.concat(string)
		.concat(" and I am presenting a workshop at ")
		.concat(time)
);

// string length
console.log(string.length); // prints 9

// substring
console.log(string.substring(0, 5)); // prints Alvin

// uppercase/lowercase
console.log(string.toUpperCase()); // prints ALVIN KAM
console.log(string.toLowerCase()); // prints alvin kam

// split string into array
console.log(string.split(" ")); // prints ['Alvin', 'Kam']

// replace (only replaces the first match)
console.log(string.replace("Kam", "Tam")); // prints Alvin Tam
