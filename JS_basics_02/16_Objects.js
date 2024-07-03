// ********************************* Objects *****************************************

/* 

1) How to declare objects ?
=> Objects ko declare karne ke 2 tarike hai :

   1) Ek hai "literal" ki tarah
   2) or dosra hai "constructor" ki tarah

   Singleton ==> Singleton ka mtlb hota hai ki koi bhi constructor jab hum isse banate hai toh
                 singleton ek object banta hai yaani ki ye apne tarah ka ek hi object hai.

   * Jab bhi hum actually mai "literals" ki tarah declare karte hai toh singleton nhi banta hai.
   * "constructor" se banega toh singleton banega.

*/

// -----------------------------------------------------------------------------------------------

/* Object Literals ==> Ye object ko declare karne ka tarika hai. 
   
   Ab hum ek ojbect declare karenge "user" naam ka or usme kuch values denge
*/

const JsUser1 = {} // Ye ban gya hmare object, bs itni si hi kahani hai

// -----------------------------------------------------------------------------------------------

// Object banane ka ek or tarika hai :

Object.create

/* Ab ye toh tarika hai "Object.create" toh isi ko bola jata hai "constructor" method ke through 
   or isi ke andar "singleton" banta hai, Iske baare mai baad mai padenge in details. */

// -----------------------------------------------------------------------------------------------

// Object literals ==> Abhi hum object literals ki baat kar rhe hai.

const JsUser2 = {} 

/* ==> or ye jo curly braces ({}) hai, toh yhi hai "object". Abhi ye "empty object" hai, 
       lekin iske andar kuch values daal denge toh hum unhe access kar sakte hai. */

// -----------------------------------------------------------------------------------------------   

const Jsuser3 = {
    name: "Ishan"
}

/* Ab yha kya hota hai, Objects ke andar "Keys" or "Values" ka chakkar hota hai.
   
   ==> For Example: jaise hum ek array declare karte hai. 
   
   myArray = ["i" , "s"] ==> Toh hmare paas es array ko access karna ka ek hi tarika hai.
   myArray[0]            ==> ki myArray ki ye Zeroth property access kard.o
   myArray[1]            ==> or myArray ki ye 1st property access kardo.

   ==> Lekin ab jab hum Objects ke andar aate hai toh ye kahani thodi change ho jaati hai :
 
        yha hum apni key (name:) bhi define kar sakte hai value("Ishan") bhi define kar sakte 
        hai. Lekin array mai koi "key" define nhi hoti. Array mai toh sirf indexing chalti hai.
  
        name: "Ishan" ==> isme hum key mai name ki place par 0 bhi likh sakte hai
           0: "Ishan" ==> Aise

        Bydefault jab hum name es(name:) tarah se dete hai toh system ise aise ("name":) process
        karta hai. Toh ye jo name(name:) hai ye apne aap mai ek string ki tarah hai but hum es
        ("name":) tarah se likhte nhi hai kyuki ye bydefault naam leta hai ki haan mai string hi 
        hu.

        Ab iske andar jo values deni hai vo hmare upr hai ki hum "string" de, "number" de,
        "boolean" de, "function" de, ek or "object" de yaa "array" de.   

*/

const JsUser4 = {
    name: "Ishan",
    age: 25,
    location: "Indore",
    email: "ishan@google.com",
    isLoggedIn: false,          // ==> Maybe hum tracked kar rhe hai ki jo person hai vo loggedin hai yaa nhi hai.
    LastLoginDays: ["Monday", "Saturday"] /* Ab jaise ki hume track karna hai ki es user ne last login kis-kis days
                                             ko kiya tha */
}

console.log("Outputs of JsUser4 Object");
// Ab Object ko access kaise karte hai ?

// 1st way
console.log(JsUser4.email);       // ==> jab hum dot(.) ki tarah lete hai toh hume string mai lete ki jarort nhi hoti.
// Output ==> ishan@google.com

/* 2nd way
   console.log(JsUser4[email]);
   Output ==> Error  because ye "email" behind the scene ek string ki tarah rakha jaa rha hai toh hume ise 
              string mai lena padega */

console.log(JsUser4["email"]);
// Output ==> ishan@google.com

console.log("------------------------------");

// Toh hume Object ko access karne ke ye dono hi tarike pata hona jarori hai.

// -----------------------------------------------------------------------------------------------   

const JsUser5 = {
    name: "Ishan",
    "full name": "Ishan Yadav", /* Ab hmare paas aisa koi bhi tarika nhi hai ki hum es value ko
                                   dot(.) se access kar paaye. */
    age: 25,
    location: "Indore",
    email: "ishan@google.com",
    isLoggedIn: false,          
    LastLoginDays: ["Monday", "Saturday"] 
}

console.log("Outputs of JsUser5 Object");
console.log(JsUser5.email);
// Output => ishan@google.com
console.log(JsUser5["email"]);
// Output => ishan@google.com
console.log(JsUser5["full name"]); // Toh hum es value ko niche diye gye tarike se access kar payenge
// Output => Ishan Yadav

console.log("------------------------------");

// -----------------------------------------------------------------------------------------------   

/*   ****************** Using Symbol with Object *******************

   Ab hum ek "Symbol" data type ka use krte hai.

   Symbol ko kaise declare karte hai ?

    ==> Toh Aise karte hai Symbol ko declare. \
*/
   const mySym = Symbol("key1")  // Ab ye hai hmara "key1" ka symbol 

/* 
Ab Symbol ko hume Object mai declare karna hai toh kaise karenge ? 
Yaa phir hume Symbol ko as a Key use karna hai.

Interview Question : Ek "Symbol" lo, usko Object ki Keys mai add karo or use 
                     print karwa ke dikha do.
*/
const JsUser6 = {
   name         : "Ishan",
   "full name"  : "Ishan Yadav", 
   mySym        : "mykey1",      /* Agr hume Symbol ko use karna hai direct as key toh hum nhi kar sakte
                                    es tarah se or bolde ki Symbol ki jo value hai vo "mykey1" hai, toh es
                                    tarah se nhi hota. */
   [mySym]      : "mySymbolKey1",
   age          : 25,
   location     : "Indore",
   email        : "ishan@google.com",
   isLoggedIn   : false,          
   LastLoginDays: ["Monday", "Saturday"] 
}

console.log("Outputs of JsUser6 Object");
console.log(JsUser6.mySym);
// Output => mykey1

/* Ab output mai "mykey1" aa gya lekin actual mai jab hum iska "mySym" dataType dekhenge 
   toh ye "Symbol" ki tarah use nhi ho raha hai.  */
console.log(typeof JsUser6.mySym);
// Output ==> String

/* Toh agr hume "mySym"ko Symbol ki tarah use karna hai toh hum ise square bracket [] mai
   rakhenge, aise [mySym] or ye iska syntax hai.
   
   Toh ab hum actually mai es ==> Symbol("key1") Symbol ko refer kar rhe hai. Toh hume actually 
   mai ise square brackets mai hi use karna pdta hai. 
   
   Ab hum ise access kaise karenge ?
*/
   console.log(JsUser6[mySym]); // ==> Aise
   // Output ==> mySymbolKey1
   console.log(typeof mySym);
   // Output ==> symbol

console.log("------------------------------");

// -----------------------------------------------------------------------------------------------   

/* Ab Objects ki values ko change kaise karte hai ? */

const JsUser7 = {
   name         : "Ishan",
   "full name"  : "Ishan Yadav", 
   mySym        : "mykey1",      
   [mySym]      : "mySymbolKey1",
   age          : 25,
   location     : "Indore",
   email        : "ishan@google.com",
   isLoggedIn   : false,          
   LastLoginDays: ["Monday", "Saturday"] 
}

console.log("Here we change the value of email");
JsUser7.email = "ishan@chatgpt.com" // Es tarah the values ko Overwrite karke hum change kar sakte hai. 
console.log(JsUser7.email);
// Output ==> ishan@chatgpt.com

/*  ********************** freeze() method **************************

   Hum chaahe toh values ko lock bhi kar sakte hai ki koi bhi values ko change naa kar sake. Iske liye
   hum "freeze()" method ka use karte hai. Toh hume freeze "Object" par lagana padega ki kis object ko
   hume freeze karna hai.
*/
console.log("By using freeze() method any value of 'JsUser7' object will not be propogate/changed");
Object.freeze(JsUser7)             // JsUser7 Object ab freeze ho jayega
JsUser7.email = "ishan@gmail.com"
console.log(JsUser7.email);       // AB hum koi bhi changes karenge Object mai toh vo changes propogate nhi honge.
// Output ==> ishan@chatgpt.com

console.log(JsUser7);
/* Output ==>
{
  name: 'Ishan',
  'full name': 'Ishan Yadav',
  mySym: 'mykey1',
  age: 25,
  location: 'Indore',
  email: 'ishan@chatgpt.com',
  isLoggedIn: false,
  LastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mySymbolKey1'              ==> Or yha dekho ye bol raha hai ki 'mySymbolKey1' ek Symbol Key hai.
}
 */

console.log("------------------------------");

// -----------------------------------------------------------------------------------------------   

/*   ***************************** functions in JS *********************************
    
     JS mai hum functions ko variables ki tarah use kar sakte hai.
 */

   const JsUser8 = {
    name         : "Ishan",
    "full name"  : "Ishan Yadav", 
    mySym        : "mykey1",      
    [mySym]      : "mySymbolKey1",
    age          : 25,
    location     : "Indore",
    email        : "ishan@google.com",
    isLoggedIn   : false,          
   LastLoginDays: ["Monday", "Saturday"]    
   }

   JsUser.greetings = function(){
      console.log("Hello JS user");
   }
