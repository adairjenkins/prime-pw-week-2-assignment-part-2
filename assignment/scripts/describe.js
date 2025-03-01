// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// ln 40 declares the vaiable name and assigns it to the string 'Dane'
// ln 42 is a conditional statement that checks if what's stored in name is
//identical to the string 'Mary'
// if the conditional statement is true (it's not), then ln 43 prints 'Hi, Mary!'
//to the console log and the else statement is not executed
//if the conditional is false (it is), then the script skips to the else statment
//and prints 'How do you do?' to the console log

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//ln 63 declares the variable secret but does not assign it
//ln 65 declares the variable code and assigns it the value 123
//if the value in secret is equal to 123, then ln 68 assigns the string 'super'
//to secret and replaces the value in code with double the previous value
//code will now store the value 246 and secret stores the string 'super'
//ln 72 checks if the value in code is great than 250
//if the value were greater then ln 73 assigns secret with the string 'duper'
//however, code's value is not greater than 250 so ln 73 will not be executed
//ln 76 console.log prints the string in secret which is 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//Declares the variable isStudent and assigns with the boolean true
//Declares age and assigns it with the value 34
//Declares zip and assigns it with the value 55407
//Checks if isStudent is true AND the zip is greater than  8000; it is not and
//the next statement is not executed; if they both were true the else if and else
//statements would not be executed
//checks if isStudent is false OR age is less than 30; neither condition is true
//so it skips to the next else if which checks if isStudent is true
//it is and 'Welcome to Prime!' prints to the console log
//the final else statement is therefore not executed

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red'; // FIX let colorOne = 'blue';
let colorTwo = 'blue'; // FIX let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4; FIX let time = 4;

if (temp > 39 || time >= 4) { FIX replace || with &&
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry'); FIX switch 'no entry' and 'enter'
} else {
  console.log('enter');
}
*/
