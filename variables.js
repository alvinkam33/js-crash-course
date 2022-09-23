// const, let, var

const x = "const";
let y = "let";
var z = "var";

console.log(x, y, z); // prints const let var

// let and var can be reassigned, const cannot

// x = "const2"; // uncommenting this line will cause a TypeError
y = "let2";
z = "var2";

console.log(x, y, z); // prints const let2 var2

// difference between let and var: block scoping rules
// var can be accessed globally throughout the function, let can only be accessed inside the local scope

function run() {
	var foo = "Foo";
	let bar = "Bar";

	console.log(foo, bar); // Foo Bar

	{
		var moo = "Mooo";
		let baz = "Bazz";
		console.log(moo, baz); // Mooo Bazz
	}

	console.log(moo); // Mooo
	// console.log(baz); // uncommenting this line will cause a ReferenceError
}

run();

// general rule: avoid using var!
