/* # Jaise array ke andar hum kuch strings le sakte hai:-

    For Example: ["", "", ""]

   # Usi tarah se hum Array ke andar Objects bhi le sakte hai:-

    For Example: [{}, {}, {}]

    Toh ye bhut hi common scenario hai ki hume array ke andar hume bhut saare "Objects ==> {}" milenge
    or har iteration mai hume Objects mai se kuch value nukalni hai.

*/

/* ************************************** forof loop ********************************************

 

for (const iterator of object) {
    
}


Ab is "forof" loop ke syntax mai kya likha hai ? "const iterator of object", iska mtlb ye nhi hai ki hum es
loop ko sirf objects ke liye hi use kar sakte hai, hum ise kisi bhi iterator ke liye use kar sakte hai. jaise
objets bhi hmare iterator hai toh hum en pr bhi loops lga skate hai, array bhi iterator hai toh hum en par bhi
loops lga sakte hai or string bhi hmre itrator hai toh hum en par bhi loops lga sakte hai.

iterator ==> toh isme isne bola "iterator of object"  yaani kis object pr hum lagana chahte hai hum loop ? Toh 
             ye jo iterator hai ye wahi jaise jaise hum "i" value declare karte the.

object   ==> AB ye jo object hai ise ise bhut hi broder term mai use kiya jaa rha hai yha par yaani ki kis object
             pr loop lagana chahte hai hum yha par. ise hume JavaScript ke Object smj ke confuse nhi hona hai.
             Yha objects ka mtlb hai ki hume kis cheez ke upr loop lagana hai. 

             Toh hume hmara jo "arr" array hai us par loop lagana hai.
*/

console.log("Output of arr object by using forof loop");
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);   
}
/* Output ==> Output of arr object by using forof loop
              1
              2
              3
              4
              5
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

// Hum es loop ko sirf objects par hi nhi balki strings wagarah pr bhi lga sakte hai.

console.log("Output of string object by using forof loop");
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);   
}
/* Output ==> Output of string object by using forof loop
              Each char is H
              Each char is e
              Each char is l
              Each char is l
              Each char is o
              Each char is  
              Each char is W
              Each char is o
              Each char is r
              Each char is l
              Each char is d
              Each char is !
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/*  ********************************************** Maps *******************************************

    JavaScript mai ek or data-type hota hai jiska naam hai "maps". Maps jo hai vo array jaise hi hote
    hai.
    
    Ab mai dekhte hai ki "Maps" ke andar kaise values set karni hoti hai. Map ke andar koi bhi duplicate
    value nhi hoti, hume isme sabhi unique values milti hai.
*/

console.log("Output using map");

const map = new Map()                      // Map() bhi ek object hai
map.set('IN',  "INDIA")                    // hume isme key-value pair lete hai.
map.set('USA', "United State of America")
map.set('FR',  "France")

// Ab hum sbse pehle ye dekhte hai ki "map" mai print kya hota hai ?

console.log(map);

/* Output ==> 

Output using map
Map(3) {
  'IN' => 'INDIA',
  'USA' => 'United State of America',
  'FR' => 'France'
}
*/

console.log("------------------------------------------");
// Ab manlo hum map mai same value ko fir se print karwatr hai toh kya hoga ?

console.log("Duplicasy is not allowed in map it's only prints the unique value");

const map_1 = new Map()                      
map_1.set('IN',  "INDIA")                    
map_1.set('USA', "United State of America")
map_1.set('FR',  "France")
map_1.set('IN',  "INDIA")

console.log(map);

/* Output ==> 

   Duplicasy is not allowed in map it's only prints the unique value
   Map(3) {
  'IN' => 'INDIA',
  'USA' => 'United State of America',
  'FR' => 'France'
}

Map() mai same value dobara se print nhi hoti kyuki ye sirf unique value ko hi print karta hai.
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------


/* Ab hum "Map()" pr "forof" loop laga kar dekhte hai hai.

   Or hum key or values dono ko alg-alg print karwana chahte hai. toh kaise hoga ?
*/

console.log("Printing keys of map using forof loop");

const map_2 = new Map()                      
map_2.set('IN',  "INDIA")                    
map_2.set('USA', "United State of America")
map_2.set('FR',  "France")
map_2.set('IN',  "INDIA")

// console.log(map);

for (const [key, value] of map_2) {
    console.log(key, ':-', value);
}

/* Output ==> 

   Printing keys of map using forof loop
   IN :- INDIA
   USA :- United State of America
   FR :- France
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

// Kya hum "Object" pr "forof" loop lga sakte hai ?

const myObject = {         // Ye hmara object ban gya or isme humne 2-values bhi le li.
    'game1': 'NFS',
    'gane2': 'Spiderman'
}

// An es "myObject" object par forof loop kaise lagega ?

for (const [key, value] of myObject) {
    console.log(key, ':-', value);       
}
/* Output ==> Error (myObject is not iterable)
   
Yha ye bol rha hai ki ye jo "myObject" hai yha par toh ye iterable nhi hai.

Note: Toh yaha par "Maps()" iterable hai lekin "Objects" iterable nhi hai.

***imp ==> lekin Objects ko iterate karwane ke dosre tarike hote hai, jo ki hum baad mai padenge.

*/