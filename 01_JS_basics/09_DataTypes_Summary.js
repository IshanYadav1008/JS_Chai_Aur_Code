/* 

*************************************** JS Data Types *****************************************

1) Primitive Data Types

7-Types : String, Number, Boolean, null, undefined, Symbol, BigInt

*/

// Examples of Primitive Data Type: 

const score = 100                 // number type value
const scoreValue = 100.3          // number type value

const isLoggedIn = false          // boolean type value
const outsideTemp = null          // null type value (null means empty)

// undefined DataType
let userEmail;                    // the value of "userEmail" is now undefined
let userE_mail = undefined;       // We can also manually defined the variable value as undefined 


// symbol DataType
const id = Symbol('123')          // The id of both the "id" and "anotherId" string is different
const anotherId = Symbol('123')   
// The id of both the above strings will not be the same because ids of both the variables is different
console.log("Value of id is " + String(id));
console.log("Value of anotherId is " + String(anotherId));
console.log(id === anotherId);    // Output ==> false
/* The return type of the above output is also an DataType which is also a Symbol
   Means jo return type hume milta hai vo bhi ek alg DataType hi milta hai jise hum symbol bolte hai.
   Agr hum same string bhi lete hai tab bhi dono variables ki value alg-alg hi hogi kyuki ye variable
   ki values ko uniquely define karta hai
*/

// BigInt DataType
const bigNumber = 123456787654324567  // Itne bade number ko store karne ke liye behind the scene JS "BigInt" hi use krega.
const bigNumberWith_n = 564345643543253445n // Jaise hi hum iske aage "n" laga dete hai toh ye automatically BigInt ban jayega.
console.log(bigNumber);

/*
-----------------------------------------------------------------------------------------------

2) Non-Primitive Data-Type (Reference Type)

Note: Ye vo Data Types hote hai jinka reference memory mai directly allocate kiya jaa sakta hai.

3-Types : Array, Objects, Functions

----------------------------------------------------------------------------------------------- 
*/

// Examples of Non-Primitive Data Type:

// Declaration of Array
    const heros = ["shaktiman", "naagraj", "doga"];

// Declaration of Object
let myObj = {
    name: "ishan",
    age: 22,
}

// Declaration of Function
const myFunction = function(){     // We are storing function definition in a variable "myFunction"
    console.log("Hello world");
}

/* 
----------------------------------------------------------------------------------------------------

# How to know the DataType of any variable which is containing any value so for this we will use
  "typeof" function.
*/

console.log(typeof bigNumberWith_n);   // Output ==> bigint
console.log(typeof outsideTemp);       // Output ==> object
console.log(typeof scoreValue);        // Output ==> number
console.log(typeof myFunction);        /* Output ==> function (function actul mai "function" hi return karta hai lekin
                                                      isko bola jata hai "object function") */
console.log(typeof myObj);             // Output ==> object
console.log(typeof heros);             // Output ==> object

/* 
Very Important Note :
---------------------

Toh ye jitne bhi "Non-Primitive" Types hai toh inka jo "return type" hai aata hai vo "object" hi aata hai 
or inka data type actually mai functions hi bola jata hai or jo function ka return type hai use actually
mai "object function" bola jata hai.

*/


