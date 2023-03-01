// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?");
}

askForName();

//I changed the formatting of the code to the conventional formatting method. also added semi colons at the end of statements 

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//I deleted the spaces before the last curly braces. Also added a semi colon. also added a space in front of the var and sum.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
//I changed func to function because that is the correct keyword. I put the last curly brace on a separate line because that is the conventional formatting method. 

//  EX 4:
function average(num1, num2){
 var sum = num1 + num2;
 var avg = sum / 2;
 return avg;
}

  //I moved the first curly brace back next to the parenthesis, fixed the spaceing in the return statments so that there is only one space in front, added a semi colon after the final return statement and removed the spacing in front of the closing curly brace.