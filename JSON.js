// key/value pairs
const person = {
	name: "Alvin Kam",
	interests: ["Coding", "Gaming", "UBC BizTech"],
	subscribed: false,
	demographics: {
		country: "Canada",
		age: 21,
	},
};

// two ways to access values in json
console.log(person.name); // prints Alvin Kam
console.log(person["name"]); // prints Alvin Kam

// change value
person.name = "Jerry Xu";
console.log(person); // returns the JSON with the new name

// add new key/value pair
person.email = "alvin@ubcbiztech.com";
console.log(person); // returns JSON with new email key and value

// converting string to JSON and vice versa
const string =
	'{"name":"Sammy","email":"sammy@example.com","plan":"Pro", "age":20}';

const json = JSON.parse(string);
console.log(json); // returns the JSON object

const backToString = JSON.stringify(json);
console.log(backToString); // returns the string

// loop through the key/values of an object

for (let key of Object.keys(person)) {
	console.log(key); // prints all keys
	console.log(person[key]); // prints all values
}
