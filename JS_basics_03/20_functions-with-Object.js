/*
   Ab jaise manlo ki hum ek shopping cart wesite bnate hai toh, hume nhi pta hota ki cart mai
   add hone ke liye kitne "arguments" aane waale hai yaa user kitne arguments pass karega toh 
   us hisaan se hume apne "parameters" set karne hote hai, toh ye situation kaafi common hai.
*/

function calculateCartPrice(num1){
    return num1
}

console.log("Output of returned value of num1 is...");
console.log(calculateCartPrice(2));
/*
Output of returned value of num1 is...
Output ==> 2  (Toh hume 2 wapus se mil gya hai return hone ke baad)
*/
console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------


/* Ab manlo ki hmare cart mai or jyda values add ho rhi hai jaise humne kuch or items liye
   jaise ek item liya 200 ka, dosra 400 ka or or teesra 500 ka. */

function calculateCartPrice(num1){
return num1
}

console.log("Output after passing 3 arguments is.....");
console.log(calculateCartPrice(200, 400, 500));

/* 
Output after passing 3 arguments is.....
200

Ab isme problem ye hai ki hmara 1st item toh hmare paas aa gya hai lekin baaki ke 
arguments ki value pass nhi hui hai.
*/

console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------

// ********************************** rest (...) operator ************************************

/* Ab ek se jyda values as an argument hum pass kar sake uske liye "rest" (...) operator hota hai.

   Ab ye (...) jo hai ise hum "spread" operator bhi bolte hai or "rest" operator bhi bolte hai.
   Toh Yes, lekin ye iske usecase pr depend hota hai ki kab hume ise rest bolna hai or kab spread.
*/

function calculateCartPrice(...num1){ // Here (...) is rest operator
    return num1
}
    
console.log("Output after using rest(...) operator is.....");
console.log(calculateCartPrice(200, 400, 500));
/*
Output after using rest(...) operator is.....
[ 200, 400, 500 ]

Toh hume output mai ab mila ek Array.
*/

console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------

function calculateCartPrice(val1, val2, ...num1){ // Here (...) is rest operator
    return num1
}
    
console.log("Output after passing values using both simple and by using rest(...) operator is.....");
console.log(calculateCartPrice(200, 400, 500, 2000));
/* 
Output after passing values using both simple and by using rest(...) operator is.....
[ 500, 2000 ]

Ab dekho "200" value pass hui "val1" mai, "400" hui "val2" mai or "500" and "2000" hui" ...num1" mai.
Or abhi hum sirf num1 ko hi return karwa rhe hai.
*/

console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------

// ************************************** Functions with Object **************************************

//  Ab humne ye "user" naam ka banaya ek object or isme humne kuch value le li.
const user = {
    username : "ishan",
    price    : 199      /* agr hum yha "prices" kar denge toh iski value "undefined" aa jayegi 
                           kyuki niche function mai hum price ko handle kar rhe hai.  */
}

/* Ab es Object ko function mai kaise pass karna hai or kaise use karna hai, 
   ab hum vo dekhenge */

// Toh ab hum function ko define karenge.
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

console.log("Function with Object");
// AB hume function ko call karna hai.
handleObject(user)

// Output ==> Username is ishan and price is 199

console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------

/* Ab ye jarori nhi tha ki hum object ko bana kar hi pass kare hum object ko direct bhi pass
   kar sakte the. Humne same name ka "function" or "object" banaya or direct object ki value
   function mai pass ho gyi. 
*/

function handleObject(anyobject){
    console.log("Passing Object directly");
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "sam",
    price   : 399
})

console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------

// ************************************** Functions with Array **************************************

/* Ab hum same Object ki tarah "function" mai "Array" bhi pass kar sakte hai */

const myNewArray = [200, 400, 100, 600]

/* Ab hume ek function define karna hai jo Array ko accept karta hai or uski 
   2nd value ko return kar deta hai. */

function returnSecondValue(getArray){  // Ab function ko ek parameter chyiae argumnets lene ke liye
    return getArray[1]
}

console.log("Output of Passing Array into Function is...");
console.log(returnSecondValue(myNewArray)); // or hum "myNewArray" ko pass kar denge
// Output ==> 400

console.log("-----------------------------------");

// -------------------------------------------------------------------------------------------

/* Hum array ko bhi direct pass kar sakte hai */

function returnSecondValue(getArray){  
    return getArray[1]
}

console.log("Output of direct Passing Array into Function is...");
console.log(returnSecondValue([200, 400, 500, 1000])); 
// Output ==> 400