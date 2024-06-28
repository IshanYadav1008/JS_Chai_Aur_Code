// ****************************** Array *********************************

const test_Array = [0, 1, 2, 3, 4, 5, true, "hitesh"]
const myHeroes   = ["Shaktiman", "Iron-Man"]

/*

1) Array mai square brackets([]) ke andar jo values hoti hai unhe mai bolte hai elements 
   or ye elements "Srings", "Numbers", "boolean", "object", "Array" yaa phir mix bhi ho
   sakte hai. Ye jarori nhi hai ki ek array mai same type ke elements ho, alg-alg type ke
   bhi ho sakte hai.

2) What is Array ?
Ans) Array ek object hota hai, jo ki ek single variable mai multiple items ko store karta hai.

Important about Array ==> JS mai jo Array hote hai vo resizeable hote hai, ek baar declare karne
                          ke baad hum unmai or elements baad mai add kar sakte hai. 

3) Array ki values ko hum indexing se access kar sakte hai

*/

// Indexing ==>  0  1  2  3  4  5
const myArray = [0, 1, 2, 3, 4, 5]
console.log("Output of myArray is");
console.log(myArray[0]);
console.log("----------------------");
// Output ==> 0


/* 
Array mai jab bhi hum copy operation karenge toh ye "Shallow Copies" banata hai.

"Shallow copy" means hum array mai jo bhi change karenge toh vo original array mai 
bhi change hoga. Means agar hum array ki copy banayenge toh vo copy same reference
ko point karegi jise original array point kar raha hoga, toh ab jab hum us copy
array mai koi bhi change krenge toh original array mai bhi chnage hoga. 
*/

// ------------------------------------------------------------------------------------

const myArray_1 = new Array(1, 2, 3, 4)
console.log("Output of myArray_1[0] is"); 
console.log(myArray_1[0]);
console.log("----------------------");
// Output ==> 1

/*
Ab hum frontend mai console pr ek array declare karke dekhte hai :

Goto Goolge page => right click => inspect => console

Write this line of code  ==> const numbers = [1, 2, 3, 4]
Then this and then Enter ==> numbers
Output                   ==> (4) [1, 2, 3, 4]

Ab "numbers" ko jaise hum expand karenge toh hume dekhai degi es array ki length (length: 4)
jo ki iski ek property hai or prototype ([[Prototype]]: Array(0)), ab jab hum es prototype
ko expand karenge toh further ek or prototype ([[Prototype]]: Object) aayega. Toh ye hamare 
aage kaam aaayega.
 */

// ********************************** Array Methods ************************************

const myArray_2 = [0, 1, 2, 3, 4, 5]
myArray_2.push(6)
console.log("Output of myArray_2 after pushing 6 into it");
console.log(myArray_2);
/* Output ==>
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

console.log("----------------------");
myArray_2.push(7)
console.log("Output of myArray_2 after pushing 7 into it");
console.log(myArray_2);
/* Output ==>
[
  0, 1, 2, 3,
  4, 5, 6, 7
]
*/

/* "pop()" method ke ander hume koi bhi argument paas nhi karna hota hai yaa nhi dena hota hai. 
    pop() ka simple sa meaning hai ki Array mai jo bhi last value hogi use remove kar dena hai. */
console.log("----------------------");
myArray_2.pop()
console.log("Output ==> 7 will be removed from the myArray_2 after using pop()");
console.log(myArray_2);
/* Output ==>
[
  0, 1, 2, 3,
  4, 5, 6
]
*/