// // Primitive Types
// let name = "AvIsBeastMC"; // String Literal
// let age = "30"; // Number Literal
// let isApproved = true; // Boolean Literal
// let firstName = undefined;
// let selectedColor = null;

// // Reference Types

let person = {
    name: 'AvIsBeastMC',
    age: 14,
    notation: null,
} // Defined these Functions just to Make Them Working!
let person2 = {
    name: 'AvIsBeastMC',
    age: 14,
    notation: null,
}
console.log(person);

// Dot Notation
person.name = "Arunnya Varma";
person.notation = "Dot Notation";
console.log(person)

// Bracket Notation
person['name'] = 'Mary';
person['age'] = 20;
person['notation'] = "Bracket Notation";

// Dot Notation 2
person2.name = "Arunnya Varma";
person2.notation = "Dot Notation 2";
person2.age = 13
console.log(person2)

// log Progress in Console
console.log(person);

// // Arrays (Objects)
let friends = ['samplayZ', 'CONCEAL'];
friends[2] = 10000;
console.log("List of Best Friends:");
console.log(friends[0], friends[1], friends[2]);

// Functions
function greet(name, age) {
    console.log('Welcome ' + name + "! Your Age is " + age);
}
// Executing a Function and Defining the Parameters
greet(person2.name, person2.age);
// This statement executes the greet function
// and the Value in the Bracket defines the
// the name parameter given in the greet function

// TIP: 
// You can also make the name parameter follow
// a specific object's value

// TIP 2:
// You can also use multiple parameters in your / a function
// by adding commas after every single parameter and a
// space after the comma, then write the name of the para
// -meter you wanna give it like how we did in greet function
// line 47
// Now for defining multiple parameters, see Line 51,
// You can simply add a comma and a space after that and 
// start defining your parameter!
// ------------------------------------------------

// Calculating a value from Function
// Here, we're multiplying two seperate numbers (2 and 2)
// and giving them two seperate parameters
// Here, number and number2.
function square(number, number2) {
    return number * number2;
}
console.log(square(2, 2) + " is the Result");