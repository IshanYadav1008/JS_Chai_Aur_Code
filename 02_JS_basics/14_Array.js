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

/* push() Method ==> "push()" method ke argument mai hum jo bhi value paas karenge toh vo
                     value array ke last mai add ho jaati hai means as a last Index. */
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

/* pop() Method ==> "pop()" method ke ander hume koi bhi argument paas nhi karna hota hai yaa nhi
                    dena hota hai. pop() ka simple sa meaning hai ki Array mai jo bhi last value 
                    hogi use remove kar dena hai, Means jo bhi last index par value hogi use. */
console.log("----------------------");
myArray_2.pop()
console.log("Output ==> 7 will be removed from myArray_2 after using pop()");
console.log(myArray_2);
/* Output ==>
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

/* unshift() Method ==>"unshift()" method ke argument mai jo bhi value pass karenge vo array ke
                        starting mai add ho jaati hai, or es wajah se array ki saari values shift
                        ho jaati hai. */

console.log("----------------------");
myArray_2.unshift(9)
console.log("Output ==> 9 will be added at the 1st index of myArray_2 array");
console.log(myArray_2);
/* Output ==>
[
  9, 0, 1, 2, 
  3, 4, 5, 6
]
*/

/* shift() Method ==> "shift()" method mai koi bhi argument pass nhi kiya jata hai or ye array ke 
                      1st index ki value ko remove kar deta hai. */

console.log("----------------------");
myArray_2.shift()
console.log("Output ==> 9 will be removed from the 1st index of myArray_2 array");
console.log(myArray_2);
/* Output ==>
[
  0, 1, 2, 3, 
  4, 5, 6
]
*/

// ----------------------------------------------------------------------------------

/* 
JavaScript mai kuch methods hai jinse hum questions karte hai or vo hume True/False mai
answer karte hai.
*/

// Ab hume ye pata karna hai ki hmara jo array hai usmei 9 include hai yaa nhi ?
console.log("----------------------");
console.log("Output ==> false (Means 9 element is not present in the array)");
console.log(myArray_2.includes(9));
// Output ==> false
console.log(myArray_2);
/*
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

// Ab hume ye puchna hai ki hmare array mai index 9 hai yaa nahi.
console.log("----------------------");
console.log("Output ==> -1 (Means Index 9 is not present in the array)");
console.log(myArray_2.indexOf(9));
// Output ==> false
console.log("Output => 3 (Means 3 is present at the 3rd index of array)");
console.log(myArray_2.indexOf(3));
// output ==> 3

// -----------------------------------------------------------------------------

/* Ab hum "newArray" ko "myArray_2" ke sath kar rhe hai join. Toh join karne se
   jo new array banega or usmei jo values aayengi toh vo ab string mai convert
   ho jayengi. */
console.log("----------------------");
const newArray = myArray_2.join()
console.log(myArray_2);
/* Output ==>
  [
    0, 1, 2, 3,
    4, 5, 6
  ]
*/ 
console.log(newArray);
// Output ==> 0,1,2,3,4,5,6 (Now our array is converted into string)

console.log(typeof newArray);
// Output ==> string (Toh join ne hmare array ko bind bhi kar diya hai or string mai bhi convert kr diya hai.)

// ------------------------------------------------------------------------------------

/* slice() and splice() method */

/* slice() Method
   ============== */
console.log("----------------------");
const myArray_3 = [0, 1, 2, 3, 4, 5]
console.log("Output of Original Array");
console.log("A ", myArray_3);
// Output ==> A  [ 0, 1, 2, 3, 4, 5 ]

const myNewArray1 = myArray_3.slice(1,3)
console.log("Output of slice() method in Array");
console.log(myNewArray1);
/* Output ==> [ 1, 2 ]
   slice() method indexing mai ek range kam leta hai
*/
console.log("Output of Original Array");
console.log("B ", myArray_3);
// Output ==> B  [ 0, 1, 2, 3, 4, 5 ]

/*------------------------------------
   splice() Method
   =============== */

const myNewArray2 = myArray_3.splice(1,3)
console.log("Output of Original Array");
console.log("C ", myArray_3);
/* Output ==> C  [ 0, 4, 5 ] 
   Yha hmara original array hi change ho gaya hai. Yaani Array mai se splice() jitna portion 
   hi remove ho gaya hai. Yaani splice() original array ki manipulate karta hai. */ 
console.log("Output after applying splice() method in Array");
console.log(myNewArray2);
// Output ==> [ 1, 2, 3 ]
