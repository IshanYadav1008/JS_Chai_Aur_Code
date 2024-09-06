// We are converting values in Numbers

let score = 33

console.log(typeof score);   // Output ==> number
console.log(typeof (score)); // Output ==> number (In this we have write "score" as a method)
console.log("--------------")
// --------------------------------------------------------------------------------------
let scoreString = "33"

console.log(typeof scoreString);                 // Output ==> string
console.log(typeof (scoreString));               // Output ==> string

// Now we will convert string into number

let valueInNumber = Number(scoreString)
console.log(typeof valueInNumber);               // Output ==> number
console.log("--------------")

// ----------------------------------------------------------------------------------------

let scoreNumberString = "33abc"
console.log(typeof scoreNumberString);          // Output ==> string
let valueNumber = Number(scoreNumberString)   
console.log(typeof valueNumber);                /* Output ==> number (But ye Output nhi aana chyiae tha kyuki "33abc" string se 
                                                              number mai convert nahi hona chyiae tha, lekin hua. kyu ? ) */

console.log(valueNumber);                       /* NaN (Means Not a Number)
                                                   Iska matlab ye jo "33abc" jo ki pure number nahi hai lekin phir bhi ye convert
                                                   ho jayega JS mai, par jab hum actually mai iski value dekhenge toh "NaN" aayega.
                                                */   
console.log("--------------") 
// ----------------------------------------------------------------------------------------

let scoreNull = null

console.log(typeof scoreNull);                      // Output ==> object
console.log(typeof (scoreNull));                    // Output ==> object

// Now we will convert null into number

let nullvalueInNumber = Number(scoreNull)
console.log(typeof nullvalueInNumber);               // Output ==> number
console.log(nullvalueInNumber);                      // Output ==> 0 (zero)
console.log("--------------")

// ----------------------------------------------------------------------------------------

let scoreUndefined = undefined

console.log(typeof scoreUndefined);                      // Output ==> undefined
console.log(typeof (scoreUndefined));                    // Output ==> undefined

// Now we will convert undefined into number

let undefinedvalueInNumber = Number(scoreUndefined)
console.log(typeof undefinedvalueInNumber);               // Output ==> undefined
console.log(undefinedvalueInNumber);                      // Output ==> NaN
console.log("--------------")

// ----------------------------------------------------------------------------------------

let scoreboolean = true

console.log(typeof scoreboolean);                      // Output ==> boolean
console.log(typeof (scoreboolean));                    // Output ==> boolean

// Now we will convert boolean into number

let booleanvalueInNumber = Number(scoreboolean)
console.log(typeof booleanvalueInNumber);               // Output ==> number
console.log(booleanvalueInNumber);                      // Output ==> 1
console.log("--------------")

// ----------------------------------------------------------------------------------------

let scoreInString = "Ishan" // Obvious ye number mai convert nahi ho sakta kyuki ye String hai

console.log(typeof scoreInString);                      // Output ==> string
console.log(typeof (scoreInString));                    // Output ==> string

// Now we will convert string into number

let stringvalueInNumber = Number(scoreInString)
console.log(typeof stringvalueInNumber);               // Output ==> number
console.log(stringvalueInNumber);                      // Output ==> NaN
console.log("--------------")

// ----------------------------------------------------------------------------------------

/* Short Notes of according to above examples :

"33"      ==> 33               ("33" easily convert ho jata hai 33 mai kyuki bhle string mai hai lekin hai toh ek number hi)
33abc     ==> NaN              (Ye number mai convert nahi hoga, lekin iska type "number ho chuka hai")
true      ==> 1, False ==> 0   ("true" convert ho jata hai "1" mai or "false" convert ho jata hai "0" mai)

*/

// ----------------------------------------------------------------------------------------

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);                         // Output ==> true

let isLoggedInEmptyString = ""
let booleanIsLoggedInEmpty = Boolean(isLoggedInEmptyString)
console.log(booleanIsLoggedInEmpty);                    // Output ==> false

let isLoggedInString = "Ishan"
let booleanIsLoggedInString = Boolean(isLoggedInString)
console.log(booleanIsLoggedInString);                   // Output ==> true
console.log("--------------")

/* 

1       ==> true  (Jab hum "1" likhte hai toh boolean mai ye "true" mai convert hota hai)
0       ==> false (Jab hum "0" likhte hai toh boolean mai ye "false" mai convert hota hai)
""      ==> false (jab humne "empty string" ko use kiya toh hmare paas value aayi "false")
"Ishan" ==> true  (jab humne "string" ko use kiya toh hmare paas value aayi "true")

*/

// --------------------------------------------------------------------------------------

// Now, We are converting values in String

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);            // Output ==> 33

// Ab hum ye check krte hai ki kya ye number sach mai string mai convert ho gaya hai 

console.log(typeof stringNumber);    // Output ==> string

/* Yes, toh hamara "33" number ab "string" mai convert ho gaya hai or ye bhale ye hume 
   dikh number jaisa raha hai lekin hai ye string hi */
