/* After writing this below line in our JS Code treat as a newer version of JS. means ek baar humne apni
   JS file mai "use strict" likh diya hai toh poori file mai hmara code new standard ki tarah treat kiya
   jayega engine ke through. Lekin aajkl hume ye likhne ki bhi jarort nhi padti hai. */
"use strict"; 

/* -------------------------------------------------------------------------------------------------- 
   alert( 3 + 3 ) Output ==> Error, because We are using nodejs, not browser. */

/* ---------------------------------------------------------------------------------------------------
Below is not a good practice in terms of code readability. */
console.log(3
    +
3) /*  So, code readability should be high
------------------------------------------------------------------------------------------------------*/

// JS DataTypes

let name = "Ishan"     // String
let age  = 18          // number  
let isLoggedIn = false // boolean
let state;

/* Primitive Data Types :
   --------------------------
   number    => Its range is 2 to the power of 53
   bigInt    => We use it for big numbers
   string    => "We should use this mostly in doubble quotes"
   boolean   => True/False
   null      => It is a Data Type in JavaScript but also a stand alone value means empty value  
   undefined => Means we declared the variable( like: "state" ) but not assigned any value in it 
                Undefined ka matlab ki abhi isme value assigned nahi hui hai kelin baad mai hum 
                assigned kar sakte hai.
   symbol    => Individual component ki uniqueness define karne ke liye use hota h, mostly used in React.

   Non-Primitive Data Types :
   --------------------------
   Object
   */

   console.log(typeof "Ishan");    // Output ==> String
   console.log(typeof 18);         // Output ==> Number
   console.log(typeof null);       // Output ==> Object    (null is an object in JS)
   console.log(typeof undefined);  // Output ==> undefined (Type of undefined is undefined)