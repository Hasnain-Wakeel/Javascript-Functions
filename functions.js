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

// ------------------------------------------------------------------------------------------------------

// ----------------------------- Creating Dynamic Function : -------------------------

// function sum() {
//   console.log(5 + 10); // We created a User Defined Function which adds up '5 and 10' when we call it.
// }

// sum(); // This function is only able to sum 5 and 10.

// -------------------------

// ----------------- NOW, we want that we make This Function, Dynamic : ----------------
// ------------ Our focus is that we provide '2' values every time to the function for adding them ----------
// -------- This is possible with passing the values through Parameters and Arguments : --------

// ------------------------------ A DYNAMIC USER-DEFINED FUNCTION : -----------------------------

// function sum(a, b) {       // we pass parameters in the parenthesis of the Function.
//   console.log(`Function Invoked => ${a + b}`);
// }

// sum(10, 11);  // we pass arguments in the parenthesis of the function at the time of Invocation (invoking the function).
// sum(21, 4);
// sum(11, 16);

// -------------------  Explaining the Upper Function : -----------------------

// We passed 2 parameters (variables) 'a and b' in the parenthesis of the function and inside function body, we
// used these parameters. The values of these variables (parameters) are Dynamic, means that Every Next Time
// we call the function, we have to pass the values of these 2 variables (parameters) in the Arguments  of the
// Function.

// Question : An amazing question is coming in my mind, which is : What will be the answer/output if we did not pass
// any value in the arguments at the time of Invoking the Function ??

// sum();        // This will answer "NaN" --> The value of bith variables is (by-default) "undefined" and :
//                                      Undefined + Undefined = NaN

// --------------------------- More About Functions in JavaScript -----------------------------

// -------------- Passing Data To Functions Through Arguments (Revising Previous Concept) : ---------------

// let greeting = "Hello!";

// function greetUser(message){
//   console.log(message + ", " + greeting);
//   console.log(greeting + " What's going on ??");
// }

// greetUser("Welcome!");
// greetUser(greeting);

// ------------------- Explaining Working of this Function : -------------------

// First we declare a variable having value : "Hello!", then we created a Function in which there is a parameter
// (message) which is receiving some value through the Function Argument. So, any of the value we will pass in the
// function argument (i.e : Welcome!) , then this value will store in the function parameter (variable)
// (i.e : message = Welcome!) and after that we are using the 'message' variable inside the function.
// Therefore, everywhere we are using 'message' variable will be replace by its value "Welcome!".

// 1. Calling the function 1st time, we are giving an argument (Welcome!) to it,
// So it will print :
// Welcome!, Hello!
// Hello! + What's going on ??

// 2. Calling the function 2nd time, we are giving another argument (greeting => "Hello!")
// (Hello! (which is the value of variable)) outside the function body,
// So it will print :
// Hello!, Hello!
// Hello!, What's going on ??

// ----------------------------- Sending/Passing Values Through Parameters : --------------------------

// function greetUser(message) {
//   console.log("Function Called => Hi " + message);
// }

// greetUser("Hello, there");      // This value will assign to the 'message' variable, which is a Parameter.
// greetUser("Welcome!");          // This value will also assign to the 'message' variable, which is a Parameter.

// --------------------- Greeting User : ------------------

// let greet = "Welcome!";

// function greetUser(userName){
//   console.log(`Hi "${userName}!", ${greet}`);
// }

// greetUser("Hamza");
//      "OR"
// greetUser(prompt("Enter Username :"));

// ------------------------------ Passing Data Through Arguments and Parameters ----------------------------

// function sum(num1, num2) {      // Parameters
//   console.log(num1 + num2);
// }

// sum(2, 4);      // Arguments    // Invoking the function with passing values in it.
// sum(5, 6);

// sum();           ---------- Calling the Function without giving parameters that are required -----------

// If someone is not giving the values that are required at the time of calling the function,
//       // then the values of the variables (i.e : num1 , num2) become undefined and
//                               undefined + undefined = NaN

// So, here is a safe approach (giving Default Parameteers) : (Default values to the variables) :


// function sum(num1 = 0, num2 = 0) {      // Parameters
//   console.log(num1 + num2);
// }

// sum();       // 0


// ------------------  IF WE STRICTLY WANT VALUES IN FUNCTION ARGUMENTS :  ---------------------


// ------------------ Wrong Approach (Wrong Condition) ---------------------

// function sum(num_1, num_2) {
//   if (num_1 == "" && num_2 == "") {            // Error of NaN , bcz of 'undefined + undefined' in else's block
//     console.log("Please pass values of num1 and num2");
//   } else {
//     console.log(num_1 + num_2);
//   }
// }

// sum();      // if values are not passed in arguments then num_1 and num_2 will become undefined, not ""
//                            // that's why our if block is not executing.


// ----------------- Correct Approch (Correct Condition) -------------------

// If we want to check the condition between them, then the condition should be :

// function sum(num_1, num_2) {
//   if (num_1 == undefined || num_2 == undefined ) {
//     console.log("Please pass values of num1 and num2");
//   } else {
//     console.log(`num_1 + num_2 => ${num_1 + num_2}`);
//   }
// }

// sum(11,4);


// ---------------------- Missing A Parameter :  --------------------

// function sum(num1) {
//   console.log(num1 + num2);
// }
// sum(2, 4);        // This throws an error that 'num2 is not defined' --> (num2 is not given/defined in parameters).


// --------------------  Missing Arguments : -------------------

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(2);           // Since value of num2 is not given, So by-defaultly Js gives it a value : 'Undefined'.
//                               // and we know that undefined + number = NaN


// Js Type Conversion  --->  2 + (Number(undefined)) -->  2 + NaN  =>  NaN


// ------------  Default Parameters : -----------

// function sum(num1, num2 = 0) {   // -->  Here, the value of num2 is alredy defined in Case of num2 is not given.
//   console.log(num1 + num2);
// }

// sum(5);          // num 1 is 5, num2 is 0 -->  5 + 0 = 5.


// ------------  "OR"  ------------

// function sum(num1, num2 = 9) {
//   console.log(num1 + num2);
// }

// sum(8);     // num 1 is 8, num2 is 9 -->  8 + 9 = 17.


// -------------------------------------------------------------------------------------------------------


// ----------------------  Replacing/Repositioning the Parameters/Arguments  -------------------

// function Subtract(num1, num2){
//   console.log(num2 - num1)          // num1 -> 4, num2 -> 6  ==>  num2 - num1  ==>  6-4  ==>  2
// }
// Subtract(4, 6);

// -----------------------
