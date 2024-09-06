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

object   ==> Ab ye jo object hai ise ise bhut hi broder term mai use kiya jaa rha hai yha par yaani ki kis object
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
    
    Ab hum dekhte hai ki "Maps" ke andar kaise values set karni hoti hai. Map ke andar koi bhi duplicate
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

/* *************************************** foreach loop **************************************** 

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

console.log("Output of foreach loop");

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
}) 

/* Output ==> Output of foreach loop
              js
              ruby
              java
              python
              cpp 

   coding.forEach() ==> Ab jaise hi hum "forEach" pr apna curser le jaate hai toh hume show karta hai "callbackfn"
                        means call back function. Iska kehne ka simple ka mtlb hai ki ise ek function dedo ki ise
                        kya karna hai uske liye.
   
   coding.forEach( function name() {}) ==> Ab function kaise bnate hai ? hum function likte hai fir uska naam likhte 
                                           hai or uske baad paranthesis() lgate hai or phir curly-braces{} ke andar 
                                           uski definition likhte hai.

                   1) ( function () {})     --> Ab es function ko callback kaha gya hai toh difference itna sa hota 
                                                hai ki callback jo function hota hai uske andar pehle toh uska naam
                                                nhi hota. Yaani ki callback function mai function ka hum naam nhi 
                                                likhte. Toh humne function ka name remove kar diya.

                   2) ( function (item) {}) --> Ab ye () jo function ke andar hum parameters dete the, ab kyuki humne
                                                array par lagaya hai, toh automatically ye loop itna smart hai ki ye
                                                array ki har value par jayega. Ab array ki us har value ko hum kya 
                                                bolenge ? toh hum kuch bhi bol sakte hai. Jaise yha array mai items hai
                                                toh hum yha isko "item" bol dete hai. Ab ye function automatically
                                                execute hoga or har baar ye array ki value ko le kar aayega as a 
                                                parameter apne andar. Or ab hume en value ke sath jo karna hai vo hum
                                                kar sakte hai function ki body ke andar. 

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

// ******************************* foreach with arrow function ************************************

console.log("Using foreach loop with arrow function");

const coding_1 = ["js", "ruby", "java", "python", "cpp"]

/* 
coding.forEach() ==> Ab ye bolega ki isko callback do, toh hum ise callback yaa toh "function" ke format
                     mai de sakte hai yaa phir "arrow" function mai.
*/

coding_1.forEach( (item_1) => {
    console.log(item_1);
} )

/* Output ==> Using foreach loop with arrow function
              js
              ruby
              java
              python
              cpp
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

// Hum alag se function bna kar bhi usko foreach mai as a parameter pass kar sakte hai.


console.log("Taking parameter of separate function in foreach loop");

const coding_2 = ["js", "ruby", "java", "python", "cpp"]

function printMe(item){
    console.log(item);
}
coding_2.forEach(printMe) // Yha par hume function ka sirf reference dena hai naa ki execute karna hai.

/* Output ==> Taking parameter of separate function in foreach loop
              js
              ruby
              java
              python
              cpp
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* ***Imp***
   
    #  coding.forEach( (item) => {} )           --> Ab yha par hum parameter mai "item" de rhe hai lekin aisa
                                                    nhi hai ki ye yha par har baar item hi le kr aayega jaise 
                                                    ye abhi "array" ki saare items aa rha the.

                                                    Yha pr or bhi parameters hum le sakte hai or ye kayi values
                                                    ko yha pr le kr aa sakte hai. 

                                                    Or "foreach" mai hum sirf ek hi nhi or bhi parameters le sakte
                                                    hai.

    #  coding.forEach( (item, index, arr) => {  --> "foreach" mai sirf "item" ka hi access nhi hota. Isme "index" 
        console.log(item, index, arr);               bhi aata hai or iska paas "arr" aaray ki poori list bhi aati
        } )                                          hai. Toh console.log karke bta do ki "item" kya hai ? "index"
                                                     kya hai ? or ye bhi bta do ki ye poora "arr" array kya hai ?
                                                     Vaise poore array ki hume jarort pdti nhi hai lekin phir bhi
                                                     hum smjne k lie hum print karwa ke dekh sakte hai.
*/

console.log("Passing more than one arguments in foreach loop like item, index and arr");

const coding_3 = ["js", "ruby", "java", "python", "cpp"]

coding_3.forEach( function (item, index, arr) {
    console.log(item, index, arr);
}) 

/* Output ==> Passing more than one arguments in foreach loop like item, index and arr
              js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
              ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
              java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
              python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
              cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* 
    # Ab hum array ke andar "Object" wala scenario dekhte hai --> For Example: [{}, {}, {}]

    Or ye scenario "foreach" mai bhut use kiya jata hai.
*/

console.log("Access Objects in Array");

const myCoding = [                         // Toh ye hum Array le rhe hai.
    {                                      // Or ye array ke andar hum "Object" declare kar rhe hai.
        languageName     : "javascript",
        languageFileName : "js"
    },
    {                                      // ye array ke andar hum 2nd "Object" declare kar rhe hai.
        languageName     : "java",
        languageFileName : "java"
    },
    {                                      // Or ye array ke andar hum 3rd "Object" declare kar rhe hai.
        languageName     : "python",
        languageFileName : "py"
    },
]

// Note: "Database" se jo value aati hai vo "Array" ke format mai hi aati hai or har ek value ek "Object" hi hoti hai.

// Ab hum foreach loop lagayenge.
myCoding.forEach( (item) => {       /* Ab hume pta hai ki item k andar values ko access kaise karte hai. 
                                       item mai Objects hai toh har iteration mai item jo hai vo Object
                                       hi hai. */

    console.log(item.languageName);  // toh es tarah se hum ek "Array" ke andar ke "Object" ki value vo access kr skte hai.
})
/* Output ==> Access Objects in Array
              javascript
              java
              python
*/