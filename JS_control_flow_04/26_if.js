// ############################################ Conditional Statements ##########################################

// ************************************************* if statement ***************************************************

/* 

if(condition){   // Or ye curly braces se aa gya scope 

}

*/

if(true){       // agr condition "true" hai tabhi hum scope ke andar jaa payenge or andar ka code execute hoga.

}

if(true){       // or agr condition "false" hai toh hum scope ke andar nhi jaa payenge.

}

const isUserLoggedIn = true

if (isUserLoggedIn){    // Toh ab hum scope ke andar jaa payenge kyuki ye ==> "isUserLoggedIn" condition true hai. 

}

// ==============================================================================================================

/* Comparision Operators
   ---------------------
   
   <, >, <=, >=, ==, !=, ===, !==

*/

// Not Equals to (!=) operator

if( 3 != 2 ){       // 3 jo hai vo 2 ke equal nahi hai, Yes condition true hui.

}

// ------------------------------------------------------------------------------

// doubble Equals to (==) operator

if( 2 == "2" ){       // kya jo 2 number hai vo "2" string ke equal hai ? Yes 
    console.log("Output of == operator"); 
    console.log("Executed");  
}
/* Output ==> Executed

   Yha pr jo comparision hai vo value ke according ho rha hai naa ki value ke 
   "Type" ke according.
*/

console.log("---------------------------------------");

// -------------------------------------------------------------------------------

// tripple Equals to (===) operator

if( 2 === "2" ){       // kya jo 2 number hai vo "2" string ke equal hai ? No  
    console.log("Output of === operator"); // Toh hum scope ke andar hi nhi jaa payenge.
    console.log("Executed");  
}
/* Output ==> Kuch bhi nhi aayega

   Yha pr jo comparision hai vo value ke "Type" ke according ho rha hai. 2 ka type
   "Number" hai, wahi es "2" ka type "String" hai. Toh ye ek dosre ke equal nhi honge.
*/

console.log("---------------------------------------");

// -------------------------------------------------------------------------------

// Not Equals to (!=) operator

if( 2 != 3 ){                 // 2 jo hai vo 3 ke equal nahi hai. Yes
    console.log("Output of != operator"); 
    console.log("Executed");  
}
/* Output ==> Executed
*/
console.log("---------------------------------------");

// -------------------------------------------------------------------------------

// less then (<) operator

const temperature = 41

console.log("Checking the Temperature by using less than (<) operator");
if ( temperature < 50 ) {
    console.log("less then 50");
}
console.log("Temperature is greater than 50");

console.log("---------------------------------------");

// -------------------------------------------------------------------------------

// if-else statement

const temperature_1 = 41

console.log("Checking the Temperature by using if-else with less than (===) operator");

if ( temperature_1 === 41 ) {
    console.log("less then 50");
}
else{
    console.log("Temperature is greater than 50");
}
console.log("Executed");

console.log("---------------------------------------");

// ====================================================================================================

// Practice Program

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User Power: ${power}`);
}
// Output ==> User Power: fly

console.log("---------------------------------------");

// -------------------------------------------------------------------------------------

// Ab agr maanlo hum aisa karte hai

const score_1 = 200

if (score_1 > 100) {
    const power_1 = "fly"
    console.log(`User Power: ${power_1}`);
}
/* console.log(`User Power: ${power_1}`); // toh hum yha scope ke bahar es "power_1" varibale ko use 
                                             nhi kar skte kyuki iska scope if-block ke andar tk hi hai.                                         

   Output ==> ReferenceError: power_1 is not defined 

   Ab aisa kyu ? kyuki jo variable hai "power_1" ise humne if-block ke scope ke andar
   declare kiya hai, toh yaani es variable ka scope if-block tak hi hai uske bahar nhi
   hai.

*/
console.log("---------------------------------------");

// -------------------------------------------------------------------------------------

// Ab agr maanlo hum "const" ki jagah "var" use karte hai toh kya hota hai ?

const score_2 = 200

if (score_2 > 100) {
    var power_2 = "fly"
    console.log(`User Power: ${power_2}`);
}
console.log(`User Power: ${power_2}`);  /*  toh hum yha scope ke bahar es "power_1" varibale ko use 
                                            nhi kar skte kyuki iska scope if-block ke andar tk hi hai. */                                        

/*  Output ==> User Power: fly
               User Power: fly

    AB aisa kaise hua ? kyuki ab jo ye "power_2" variable hai, ye ab scope ke bahar bhi access ho rha hai.

    Ab vo kaise ? Kyuki jo ye "var" hai, toh iska scope hai completely "Global". Lekin ye sahi approach nhi
    hai or aia nhi hona chyaie.

    Kykui ye jo "power_2" variable hai ye kabhi bhi if ke scope ke bahar niklna hi nhi chyiae tha.

    Toh hume "let" ya phir "const" ko use karna chyaie.
*/

console.log("---------------------------------------");

// -------------------------------------------------------------------------------------

const balance = 1000
console.log("Output of Implicit Scope Program");
if (balance > 500) console.log("test"); /* Ab es program mai hum Scope ke liye curly-braces({}) ka use
                                           nhi kar rhe hai. Kyuki isme condition ke baad ek hi statement
                                           hai toh hum chaahe toh curly-braces ka use kare yaa naa bhi
                                           kare tb bhi ye sahi hai or chlega.
                                           
                                           Or ise bolte hai "Implicit Scope" yaani ki hmne maan liye hai
                                           ki Scope hai.

Output ==> Output of Implicit Scope Program 
           test                                           
*/

// Hum chaahe toh aise bhi likh sakte hai, JS mai ye bhi allowed hai lekin ye Good Practice nhi hai.
const balance_1 = 1000
console.log("Output of Another Implicit Scope Program");
if (balance > 500) console.log("test"), console.log("test-2");

/* Output ==> Output of Another Implicit Scope Program
              test
              test-2
*/

console.log("---------------------------------------");

// -------------------------------------------------------------------------------------

// Nested if-else

const balance_2 = 1000

console.log("Output of Nested if-else");

if (balance_2 < 500)
{
    console.log("1000 is Not Less than 500");
}
else if (balance_2 < 750)
{
    console.log("1000 is Not Less than 750");
}
else if (balance_2 < 900)
{
    console.log("1000 is Not Less than 900");
}
else
{
    console.log("1000 is Less than 1200");
}

/* Output ==> Output of Nested if-else
              1000 is Less than 1200 
*/

console.log("---------------------------------------");

// -------------------------------------------------------------------------------------

/* Using AND(&&) Operator with if statement  */

const userLoggedIn = true
const debitCard    = true

if (userLoggedIn && debitCard && 2==2) // Sabhi conditions "True" honi chyiae. 
{
    console.log("Using AND(&&) Operator with if");
    console.log("Allow to buy course");
}
/* Output ==> Using AND(&&) Operator
              Allow to buy course 
*/

console.log("---------------------------------------");

// -------------------------------------------------------------------------------------

/* Using both AND(&&) and OR(||) Operator with if statement  */

const userLoggedIn_1 = true
const debitCard_1    = true
const loggedInFromGoogle_1 = false
const loggedInFromEmail_1  = true

if (userLoggedIn_1 && debitCard_1 && 2==2)         // Sabhi conditions "True" honi chyiae. 
{
    console.log("Using AND(&&) Operator");
    console.log("Allow to buy course");
}
if (loggedInFromGoogle_1 || loggedInFromEmail_1)   // Kam se Kam ek condition "True" honi chyiae.
{
    console.log("Using OR(||) Operator");
    console.log("User Logged in");
}
/* Output ==> Using AND(&&) Operator
              Allow to buy course
              Using OR(||) Operator
              User Logged in
*/