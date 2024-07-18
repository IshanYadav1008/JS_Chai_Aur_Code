/* Ab hume JS mai Array ki or methods ko dekhna hai toh uske liye hum jayege google par 

Goto Goolge page => right click => inspect => console

Write this line of code  ==> const myArray = [1, 2, 3, 4]
Then this and then Enter ==> myArray
Output                   ==> (4) [1, 2, 3, 4]

Ab jaise hi hum "myArray" ko open karenge toh hume milega prototype.

Then Open/Extend this    ==> [[Prototype]]: Array(0)  

Toh jab hum prototype ko open karenge toh hume JavaScript mai Array ke sabhi methods milenge.

*/

// ---------------------------------------------------------------------------------------------

const marvel_heroes = ["Arjun", "Yudister", "Bhim"]
const dc_heroes     = ["Ram", "Laxhman", "Hanuman"]

marvel_heroes.push(dc_heroes)

console.log("Merging 2-Arrays using push() method");
console.log(marvel_heroes);
/* Output ==> [ 'Arjun', 'Yudister', 'Bhim', [ 'Ram', 'Laxhman', 'Hanuman' ] ]

Ab es upr waale output mai array ke andar array aa gya hai jo ki es situation mai
hum nhi chahte the.
*/

console.log(marvel_heroes[3]);
/* 
Output ==> [ 'Ram', 'Laxhman', 'Hanuman' ]

Ab 3rd index jo hai array ka vo bhi ek array hai upr waale output ke according.
*/

console.log(marvel_heroes[3][0]);
/* Output ==> Ram

Toh upr jaise humne 2 arrays ko merge kiya hai vo sahi way nahi hai.
 
*/
console.log("----------------------------------");

// ---------------------------------------------------------------------------------------------
 
// Ab hum 2-Arrays ko merge karne ke liye 2nd-method use karenge

const marvel_heroes_1 = ["Arjun", "Yudister", "Bhim"]
const dc_heroes_1     = ["Ram", "Laxhman", "Hanuman"]
const All_heroes = marvel_heroes_1.concat(dc_heroes_1)

console.log("Merging 2-Arrays using concat() method");
console.log(All_heroes);
// Output ==> [ 'Arjun', 'Yudister', 'Bhim', 'Ram', 'Laxhman', 'Hanuman' ]
console.log("----------------------------------");

/* 
Important Note ==> push() method jo hai vo existing array mai hi push karta hai lekin
                   concat() hume new array return karta hai. 
*/

// ---------------------------------------------------------------------------------------------

/* Ab hum 2-Arrays ko merge karne ke liye 3rd-method use karenge jo ki or easy hai or iske andar
   hum use karte hai "spread (...)" operator.
   
   Toh ab hum 2-Arrays ko spread karenge or es operator ka benefit ye hai ki isme hum jitne chaahe
   utne arrays ko add kar sakte hai.
*/
console.log("Merging 2-Arrays using spread (...) operator");
const all_new_heroes = [...marvel_heroes_1, ...dc_heroes_1]

console.log(all_new_heroes);
// Output ==> [ 'Arjun', 'Yudister', 'Bhim', 'Ram', 'Laxhman', 'Hanuman' ]
console.log("----------------------------------");

// ---------------------------------------------------------------------------------------------

/* Yha array ke array or uske andar bhi koi array hai, toh aisi situation ko hum "flat()" method 
   se handle kar sakte hai. flat() ke andar hum koi bhi number paas kar sakte hai us array ki depth
   ke according yaa phir "infinity" bhi jo ki kitni bhi depth ka array ho use resolve karke ek single
   array mai hume output dikha dega. */

const another_array = [1, 2, 3, [4 ,5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log("Resolving Array inside Array using spread flat() method");
console.log(real_another_array);
/* Output ==>
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/
console.log("----------------------------------");

// ---------------------------------------------------------------------------------------------

// Hum "isArray()" method ka use karke ye puch rhe hai ki kya "Ishan" ek array hai ?
console.log("We are asking that is Ishan is an Array by using 'isArray()' method");
console.log(Array.isArray("Ishan"));
// Output ==> false

// Ab hum "from()" ka use karke "Ishan" ko ek array bana rhe hai.
console.log("Now we are making 'Ishan' as an Array by using 'from()' method");
console.log(Array.from("Ishan"));
// Output ==> [ 'I', 's', 'h', 'a', 'n' ]

console.log(Array.from({name: "ishan"}));
/* Output ==> [] (empty array) 
Kyuki ye isko ==> "{name: "ishan"}" directly convert nhi kar paa raha. Toh hume ise batana
padega ki hum iski "keys" kaa Array banaye yaa iski "values" kaa array banaye or agr ye nhi
bana payega toh ye hmesha empty array dega.
*/
console.log("----------------------------------");

// ---------------------------------------------------------------------------------------------

// Ab hume multiple values ko array mai convert karna hai.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// Output ==> [ 100, 200, 300 ]