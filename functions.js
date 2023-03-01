// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting(){
    var hello = "Hello there!";
    return hello;
}

console.log(greeting());
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(firstName){
    var greetName =  `Hello, ${firstName}!`;
    return greetName;
}

console.log(customGreeting("Saki"))
console.log(customGreeting("Cillian"))

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName){
    var greetFullName = `Welcome ${firstName} ${middleName} ${lastName}`;
    return greetFullName;
}

console.log(greetPerson("Noah", "Alan", "Klem"))
console.log(greetPerson("Edgar", "Allen", "Poe"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num){
    var squaredNum = num * num;
    return `${num} squared is ${squaredNum}`;
}

console.log(square(5))
console.log(square(10))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(num, item){
    if (num >= 4){
        return `${item} is stocked`
    } else if (num < 4 && num > 0){
        return `${item} - running LOW`
    } else if (num === 0){
        return `${item} - OUT of stock!`
    }
} 

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"