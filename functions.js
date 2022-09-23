console.log(add(1, 2)) // prints 3
// console.log(add2(2, 3)) // uncommenting this line causes a ReferenceError as the function is not initialized
// console.log(add3(3, 4)) // uncommenting this line causes a ReferenceError as the function is not initialized

// named function
function add(x, y) {
  return x + y;
}

// anonymous function
const add2 = function(x, y) {
  return x + y;
}

// arrow function
const add3 = (x, y) => {
  return x + y;
}

// simplified arrow syntax: removing the braces will return the value of the expression without the "return" keyword
const add4 = (x, y) => x + y

function add5(x, y) {
  console.log(x + y);
}

console.log(add(1, 2)) // prints 3
console.log(add2(2, 3)) // prints 5
console.log(add3(3, 4)) // prints 7
console.log(add4(4, 5)) // prints 9
add5(5, 6) // prints 11

const result = add(10, 15)
console.log(result) // prints 25

