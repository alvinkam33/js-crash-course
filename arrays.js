let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c", "d"];

// access a certain value
console.log(numbers[1]); // prints 2

// length of array
console.log(numbers.length); // prints 5

// get the last value
console.log(strings[strings.length - 1]); // prints d

// add to end of array
strings.push("e");
console.log(strings); // prints ['a', 'b', 'c', 'd', 'e']

// add to front of array
strings.unshift("z");
console.log(strings); // prints ['z', 'a', 'b', 'c', 'd', 'e']

// changing a value
strings[5] = "f";
console.log(strings); // prints ['z', 'a', 'b', 'c', 'd', 'f']

// remove element at end of array
const pop = strings.pop();
console.log(pop); // prints 'f'
console.log(strings); // prints ['z', 'a', 'b', 'c', 'd']

// remove element at front of array
const shift = strings.shift();
console.log(shift); // prints 'z'
console.log(strings); // prints ['a', 'b', 'c', 'd']

// reverse list
strings.reverse();
console.log(strings); // prints ['d', 'c', 'b', 'a']

// sort list (by default: alphabetical or increasing order)
strings.sort();
console.log(strings); // prints ['a', 'b', 'c', 'd']

// map
numbers = numbers.map((x) => {
	return x + 2;
});
console.log(numbers); // prints [3, 4, 5, 6, 7]

// forEach
numbers.forEach((x) => {
	console.log(x + 2); // 5, 6, 7, 8, 9
});
console.log(numbers); // prints [3, 4, 5, 6, 7]

// filter
numbers = numbers.filter((x) => {
	return x >= 5;
});
console.log(numbers); // prints [5, 6, 7]

// includes
console.log(numbers.includes(2)); // prints false
console.log(numbers.includes(5)); // prints true

// find/findIndex
const find = numbers.find((x) => {
	return x >= 5;
});
console.log(find); // prints 5

const findIndex = numbers.findIndex((x) => {
	return x >= 5;
});
console.log(findIndex); // prints 0

// some/every
const some = numbers.some((x) => {
	return x >= 6;
});
console.log(some); // prints true

const every = numbers.every((x) => {
	return x >= 6;
});
console.log(every); // prints false

// concat
const concat = numbers.concat(strings);
console.log(concat); // prints [5, 6, 7, 'a', 'b', 'c', 'd']
// JavaScript supports multitype arrays, but use cases are rare and generally not recommended!
