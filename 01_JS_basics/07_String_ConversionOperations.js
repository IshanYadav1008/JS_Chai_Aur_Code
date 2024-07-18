// ******************************** Operations ******************************

let value = 3
let negValue = -value
console.log(negValue);  // Output ==> -3

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%2);
*/

// ----------------------------------------------------------------------------

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2   // But we can't subtract the string
console.log(str3);       // Output ==> hello hitesh

// ----------------------------------------------------------------------------

console.log("1" + 2);         // Output ==> 12  (This 12 is a String)
console.log(1 + "2");         // Output ==> 12  (This 12 also a String)
console.log("1" + 2 + 2);     // Output ==> 122 (This 122 is also a String)
console.log(1 + 2 + "2");     // Output ==> 32  (This 32 is also a String)
console.log( (3+4) * 5 % 3 ); /* Output ==> 2   (But this is not a good approach to write the code so always use 
                                                 parathesis for these kind of code) */
console.log(true);            // Output ==> true 
console.log(+true);           // Outpur ==> 1    (But this also not a good approach to write code in this way)

// ----------------------------------------------------------------------------

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 ;  // Also not a good approach to write code in this way
console.log(num1);            // Output ==> 4 
console.log(num2);            // Output ==> 4        
console.log(num3);            // Output ==> 4

let gameCounter = 100
gameCounter++;
console.log(gameCounter);    // Output ==> 101
++gameCounter;
console.log(gameCounter);    // Output ==> 102