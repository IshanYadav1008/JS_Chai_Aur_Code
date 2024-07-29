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

/* Kya hum "Object" pr "forof" loop lga sakte hai ?

const myObject = {         // Ye hmara object ban gya or isme humne 2-values bhi le li.
    'game1': 'NFS',
    'gane2': 'Spiderman'
}

Ab es "myObject" object par "forof" loop kaise lagega ?

for (const [key, value] of myObject) {
    console.log(key, ':-', value);       
}
Output ==> Error (myObject is not iterable)
   
Yha ye bol rha hai ki ye jo "myObject" hai yha par, toh ye iterable nhi hai.

Note: Toh yaha par "Maps()" iterable hai lekin "Objects" iterable nhi hai.

***imp ==> lekin Objects ko iterate karwane ke dosre tarike hote hai, jo ki hum baad mai padenge.

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* ***************************************** forin ********************************************** 

   Ab hum "forin" loop ka use karke "Object" ki "keys" ko print karwa rhe hai.
*/

console.log("Printing keys of myObject using forin loop");
const myObject = {
    js   : 'jsavascript',
    cpp  : 'c++',
    rb   : 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);  // Ab hum key ko print karke dekhenge 
}
/* Output ==> Printing keys of myObject using forin loop
              js
              cpp
              rb
              swift

Ab hmre paas "keys" toh saari aa gyi hai.
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Lekin hume sirf "keys" nhi balki uske saath "Object" bhi chyiae. Toh ab Object kaise nikale ?

   Ab jab hmare paas keys aa gyi hai toh object nikalne ka tarika bhi bhut easy hai.
*/

console.log("Printing values of keys using forin loop");
const myObject_1 = {
    js   : 'javascript',
    cpp  : 'c++',
    rb   : 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject_1) {
     console.log(myObject_1[key]);  /* Hume kya krna hai ? isme "keys" ki place pr "myObject" ko lena hai or bolna h ki
                                       "myObject" ke andar jo "key" hai uski value hume print krwa do, toh hmare pass
                                       "key" bhi aa gyi or "Object" bhi aa gya. 
                                       
    or

    console.log(`${key} shortcut is for ${myObject_1[key]}`);

    Output ==>

    Printing values of keys using forin loop
    js shortcut is for javascript
    cpp shortcut is for c++
    rb shortcut is for ruby
    swift shortcut is for swift by apple
    */
}
/* Output ==>

    Printing values of keys using forin loop
    javascript
    c++
    ruby
    swift by apple
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* ***************************** forin loop with Array ************************************* 

Kya hum "forin" loop ko "Arrays" ke liye bhi use kar sakte hai ? */


console.log("Printing keys of array using forin loop");
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}
/* Output ==> Printing keys of array using forin loop
              0
              1
              2
              3
              4 

Toh yha forin mai Array ki keys print ho rhi hai. Ji haan Array ki bhi keys hoti hai or vo zero(0)
se start hoti hai jinhe hum index numbers bolte hai.


Ques) Difference between forof or forin ?

Ans.) "forof" mai array ki direct values print ho rhi thi jabki "forin" mai array ki "key"s print ho 
      rhi hai.
*/

console.log("------------------------------------------");

console.log("Printing key's values of array using forin loop");
const programming_1 = ["js", "rb", "py", "java", "cpp"]

for (const key in programming_1) {
    console.log(programming_1[key]);
}
/* Output ==> Printing key's values of array using forin loop
              js
              rb
              py
              java
              cpp
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Kya hum "Map()" pr "forin" loop lga sakte hai kya ? */

console.log("Using forin loop with map");

const map_3 = new Map()                      
map_3.set('IN',  "INDIA")                    
map_3.set('USA', "United State of America")
map_3.set('FR',  "France")
map_3.set('IN',  "INDIA")

for (const key in map_3) {
    console.log(key);
}

/* Output =>  Using forin loop with map

Kuch bhi output nhi aayega kyuki "Map()" "forin" loop ke sath iterable nhi hai or jab koi cheez
iterable nhi hai toh phir use hum loop mai nhi likh sakte.

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* *************************************** for each loop **************************************** 

Actually kuch loops "arrays" ke andar direct hi properties mai add kar diye jaate hai:

* Goto Google ==> right click ==> inspect ==> console ==> write the below line of code :-

* const coding = ["js", "ruby", "java", "python", "cpp"] --> Enter
* coding                                                 --> Enter

Ab jaise hi hum iska dropdown ko open karenge toh iske prototypes open ho jayenge:

* [[Prototype]]: Array(0) ==> Phir hum es prototype ko open karenge toh hume kaaf kuch cheezen dekhai 
                              dengi.

                              Isme hume "map" or "forEach" bhi milega, toh ye loop ka hi ek parameter hai
                              jo bydefault hi inject kar rakha hai kyuki sabko pta hai Arrays agar ayenge
                              toh loop toh lagana hi padega.

                              "forEach" higher order function hai or ise use karna bhut wasy hai or sbse jyda
                              yhi use hota hai.

*/


const coding = ["js", "ruby", "java", "python", "cpp"]