// // What is a Function in JavaScript ??

// // A function in JavaScript is a block of code designed to perform a specific task.
// // You can think of it like a reusable tool or a machine

// ------------------------------------

// // Why use functions in JavaScript ??

// // 1. Avoid repetition.
// // 2. Organize code.
// // 3. Make code reusable.
// // 4. Improve readability and maintainability.
// // 5. Speed up development.

// ------------------------------------

// // How to define a function in JavaScript ??

// function functionName() {
//      //  Function Code / Function Body / Function Scope
// }

// functionName();     // Function Call / Function Invocation / Function Execution / Invoking a Function.

// ------------------------------------

// Concept	:                               Description :

// Definition :	                    A reusable block of code that performs a specific task.
// Why Use It :	                    To organize, reuse, and simplify code.
// How to Define :	                function functionName() { ... }
// How to Call :	                functionName();

// ----------------------------------------------------------------------------------------------------------

// Advantage of Functions in JavaScript through code example :

// -----  Traditional / Long Way : ------

// let today = new Date();
// let hours = today.getHours();
// let minutes = today.getMinutes();
// console.log(`Current time is ${hours}:${minutes}`);

// -----  Through Function / Short Way : ------

// function showTime() {
//   let today = new Date();
//   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   console.log(`Current time is ${hours}:${minutes}`);
// }

// showTime();
// showTime();
// showTime();            // Calls it anywhere, anytime easily in the code.

// ------------------------

// function greetUser() {
//   console.log("Greet Function is Invoked =>");
//   console.log("We are Greeting You !");
// }
// greetUser();

// --------------------------- More About Functions in JavaScript -----------------------------

// -------------- Passing Data To Functions Through Arguments : ---------------

// let greeting = "Hello, there";

// function greetUser(greet){
//   console.log(greet)
//   console.log("What's going on ??")
// }

// greetUser("Welcome!");


// Expalining Process Of Execution Of The Function :

//      1. Function called at Line 92    --->        {"Welcome!" assigned as, greet's value (parameter)}
//      2. Inside the function           --->        greet => Welcome! (value of greet is Welcome!)
//      3. console.log     (greet -> (Welcome!))     will print.
//      4. console.log     ("What's going on ??")    will print.

// ------------------------- Passing Values Through Variables : -------------------------

// let sayWelcome = "Welcome!";
// let sayHello = "Hello!";
// let sayGoodbye = "Goodbye!";

// function greetUser(sayHello){
//     console.log(sayHello)
// }
// greetUser(sayWelcome);
// greetUser(sayHello);
// greetUser(sayGoodbye);

// let greeting = "Hello, there";
// let welcome = "Welcome!";

// function greetUser(greeting) {
//   alert(welcome);
//   alert(greeting);
// }

// greetUser("Hello, there.");
// greetUser("Welcome!");

// ------------------------------ Passing Data Through Arguments and Parameters ----------------------------

// function sum(num1, num2) {      // Parameters
//   console.log(num1 + num2);
// }

// sum(2, 4);  // Arguments        // Invoking the function with passing values in it.

// ---------------------- Missing A Parameter :  --------------------

// function sum(num1 ) {
//   console.log(num1 + num2);
// }
// sum(2, 4);        // This throws an error that 'num2 is not defined' --> (num2 is not given/defined in parameters).

// --------------------  Missing Arguments : -------------------

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(2,);           // Since value of num2 is not given, So by-defaultly Js gives it a value : 'Undefined'.

// Js Type Conversion  --->  2 + (Number(undefined)) -->  2 + NaN  =>  NaN

// ------------  Default Parameters : -----------

// function sum(num1, num2 = 0) {   // -->  Here, the value of num2 is alredy defined in Case of num2 is not given.

//   console.log(num1 + num2);

// }

// sum(2);     // num 1 is 2, num2 is 0 -->  2 + 0 = 2.

// ------------  "OR"  ------------

// function sum(num1, num2 = 9) {

//   console.log(num1 + num2);

// }

// sum(8);     // num 1 is 8, num2 is 9 -->  8 + 9 = 17.

// ----------------------

// ----------------------  Replacing/Repositioning the Parameters/Arguments  -------------------

// function Subtract(num1, num2){
//   console.log(num2 - num1)          // num1 -> 4, num2 -> 6  ==>  num2 - num1  ==>  6-4  ==>  2
// }
// Subtract(4, 6);

// -----------------------
