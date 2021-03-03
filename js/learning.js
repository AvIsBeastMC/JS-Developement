// In this Project
// I will learn JS from CodeWithHarry
console.log('Current JS Code being used is of js/learning.js');
// // Data Types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a String!"
var str2 = "This is also String!"

// Objects
var marks = {
    ravi: 45,
    shubham: 78,
    CodeWithHarry: 99.997
}
console.log('Marks of Students are:');
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// Undefined
var und = undefined;
console.log(und);

// Null
var n = null;
console.log(n);

// There are Two Types of Data Types in JavaScript at the High Level
// Primitive Data Types: undefined, null, boolean, number, string, symbol
// Reference Data Types: arrays and objects

// Arrays (Reference Data Types)
    var myFriends = ['samplayZOP', 'phantomgamerZ'];
    myFriends[2] = 'pogU';
    console.log('My Friends are:');
    console.log(myFriends[0], myFriends[1], myFriends[2]);
// Objects (Reference Data Types)
    // We can use Different Notations for Specifying Objects
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
    // Dot Notation
    person.name = "Arunnya";
    person.age = 14;
    person.notation = "Dot Notation Used!"
    console.log(person);
    // Bracket Notation
    person['name'] = "AvIsBeastMC";
    person['age'] = 14;
    person['notation'] = "Bracket Notation Used!";
    console.log(person);

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
console.log('The Value of ' + a + " + " + b + " is", a+b);
console.log('The Value of ' + a + " - " + b + " is", a-b);
console.log('The Value of ' + a + " * " + b + " is", a*b);
console.log('The Value of ' + a + " / " + b + " is", a/b);

// Assignment Operators
var c = b;
c += 2;
console.log(c + " is the Answer after adding " + b + " with " + "2")

// Comparison Operators with Conditional Statements
var x = 100, y = 1020, z = 1120;
    // If x == y
    if(x == y) {
        console.log(x + " and " + y + " are Equal!")
    }
    else {
        console.log(x + " and " + y + " are not Equal")
    }
    // If y is bigger than x
    if(y >= x) {
        console.log(y + " is bigger than " + x + " by " + (y-x))
    }
    // if z = x+y
    if(z = (x+y)) {
        console.log("z (" + x + ")" + " is equal to" + " x (" + x + ")" + " + " + "y (" + y + ")")
    }
// Everything I have learnt this day of JS 
// was fairly very Easy to Understand!

// // Statements in JavaScript
// Conditional Statements
// Task: Check if age is or greater than 18
// and if not, then say, People with age less than 
// 18 are not Permitted to Drive.
    console.log('Age of Person is ' + person.age)
    age = person.age;
        if(age < 18){
        console.log('People with Age less than 18 are not Permitted to Drive!');
        console.log('Wait for ' + (18-person.age) + " More Years " + person.name + "!")
    }
        else{
        console.log('You have Higher Age than Required to Drive a Car!')
    }
// // Loops in JavaScript
// Task: console.log each value in an Array 
var arr = ['av','is','beast','yt','is'];
arr[5] = 'op';

console.log(arr);
console.log('Logging Values of an Array Seperately using Loops!...')

arr.forEach(function(element){
    console.log(element);
})

// TIP! 
// You should prefer using Let more because var has
// been for long and it can be only be used inside the function
// in which you added it
// But let can be used outside of any function
// you add it to!
console.clear();
// Array
let myArr = ["Fan", "Camera", 34, null];
// Methods
console.log("Length of Array myArr is " + myArr.length);
console.log("Before pop...")
console.log(myArr)
// .pop removes the last assigned value in your Array
myArr.pop();
console.log("After pop...");
console.log(myArr);
// .push adds and assigns another value in your Array
myArr.push("mujhe to bhul hi gaye");
console.log("And after push...");
console.log(myArr);
myArr.shift();
console.log("And after shift...")
console.log(myArr);
myArr.unshift("Hallo");
console.log("After unshift...")
console.log(myArr);
myArr.sort()
console.log("Sorted Version of the Array!:");
console.log(myArr);
// Hence, 
// .pop removes the last assinged value in your Array
// .push adds and assigns another value to your Array
// .shift removes the first assinged value in your Array!
// and .unshift adds a Value to the Starting of the 
// Array of its value!

// String Methods in JavaScript
let myLovelyString = "AVMC is Really Hardworking!";
console.log("myLovelyString: " + myLovelyString);
console.log("myLovelyString.length: " + myLovelyString.length);
// indexOf property shows the Position of the Word
// in its Value in the String!
// if the Value of indexOf is a Word that does not exist
// in the String, it shows -1 as a result in the Console!
console.log("The Position of Really in String is " + myLovelyString.indexOf('Really'));
console.log("Sliced String, 0-4", myLovelyString.slice(0, 4));
// Replace String Value
d = myLovelyString.replace('AVMC', 'EYAY');
console.log(d, myLovelyString);
console.log("Here, we replaced AVMC (original word) with the word EYAY by using the Syntax in Line 175!");
// finally...
// // DOM Manipulation
// const body = document.body;
// const div = document.createElement("p");
// div.textContent = "THIS WORKED!!";