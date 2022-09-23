const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
	console.log(i); // prints 0 1 2 3 4
}

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]); // prints 1 2 3 4 5
}

for (const number of numbers) {
	console.log(number); // prints 1 2 3 4 5
}

for (const number in numbers) {
	console.log(number); // prints 0 1 2 3 4
}

let index = 0;
while (index < numbers.length) {
	console.log(numbers[index]); // prints 1 2 3 4 5
	index++;
}

index = 0;
do {
	console.log(numbers[index]); // prints 1 2 3 4 5
	index++;
} while (index < numbers.length);
