// *************************************** while loop ***********************************************

console.log("Using while loop");
let i = 0
while (i <= 10) {
    console.log(`Value of index is ${i}`);
    i = i + 2
}
/* Output ==> Value of index is 0
              Value of index is 2
              Value of index is 4
              Value of index is 6
              Value of index is 8
              Value of index is 10
*/

console.log("------------------------------------------");

// --------------------------------------------------------------------------------------------------

console.log("Using Array with while loop");
let myArray = ["Ram", "Laxhman", "Hanuman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
/* Output ==> Using Array with while loop
              Value is Ram
              Value is Laxhman
              Value is Hanuman
*/

console.log("------------------------------------------");

// --------------------------------------------------------------------------------------------------

/* *************************************** do-while loop ********************************************
   
   Isme hmari condition sbse baad mai check hogi, pehle hmara kaam hoga, pehle "do" hai yaani pehle
   hmara kaam hoga.
*/

console.log("Using Array with do-while loop");
let score = 1

do{
    console.log(`Score is ${score}`);
    score++
}while (score <= 10);

/* Output => Using Array with do-while loop
             Score is 1
             Score is 2
             Score is 3
             Score is 4
             Score is 5
             Score is 6
             Score is 7
             Score is 8
             Score is 9
             Score is 10
*/