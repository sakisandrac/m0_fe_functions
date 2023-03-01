// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

//The method includes() is called on the string "Hello World". The argument "Hello" is passed so this method will evaluate whether or not this string contains the string "Hello". 
//The return value will be true
"Hello World".includes("Hello");

//The method endsWith is called on the string "Hello World". The argument "Hello" is passed so this method will evaluate whether or not this string ends with the string "Hello". 
//It does not, so thhe return value will be false
"Hello World".endsWith("Hello");

//The method endsWith is called on the string "Hello World". The argument "rld" is passed so this method will evaluate whether or not this string ends with the string "rld". 
//It does, so thhe return value will be true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

//The method indexof() is called on the variable catName which stores the string "Sally"
//This method returns the index of the argument passed
//If the argument is not found, it will return -1 instead.
//The console.log() statement prints the return vaule of the indexOf() method which in this case will be 0 
var catName = "Sally";
console.log(catName.indexOf("S"));

//The method replace() is called on the variable homeAddress which stores the string "1234 Main St".
//This method passes two arguments, the first argument is a string that will be replaced in our variable.
//The second argument is the string that is replacing the first.
//The console.log() statement prints the return value after the arguments are passed, so it will print out "1234 Vine St".
//Note that the original string remains unchanged in the variable.

var homeAddress = "1234 Main St";
console.log(homeAddress.replace('Main', 'Vine'));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

//The method splice() is called on the array veggies. 
//This method uses 3 agruments to change the array: the first argument is the index number where the array will open, the second arugment is the number of items you wish to delete, and the third argument is the element will be the one passed into the new array.
//Note that this does change the original array.
//The first console.log() statement prints the item that was removed which is broccoli
//The second console.log() statement prints the new array which is now ['carrots', 'onion', 'zucchini', 'beansprout', 'basil']

var veggies = ["carrots", "broccoli", "zucchini", "beansprout", "basil"];
console.log(veggies.splice(1, 1, "onion"));
console.log(veggies);

//The method toString() is called on the array ages.
//This method will create a new string with the elements inside of the ages array.
//Note that this will not change the array but you can store the string in a new variable if desired.
//The console.log() statement prints out the new string which is "3,5,7,8,9"
var ages = [3, 5, 7, 8, 9]
console.log(ages.toString())
