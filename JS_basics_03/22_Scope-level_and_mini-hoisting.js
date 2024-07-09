// ********************************** Nested Scope ****************************************


// ****************************** Nested Function *************************************

// Ab nested scope kaise kaam karte hai ? Toh uske liye hum bnate hai ek program.
function one(){
    const username = "ishan"
    
    /* Ab hum one() function ke andar ek or function banayenge jiska naam hai two().
    
       Toh function ke andar bhi function hote hai or ye kaafi jagah kaam aate hai.

       Ab yr jarori nhi ki function ke andar hi function ho, "if-else" ke andar bhi ek
       function ho sakta hai yaa "loop" ke andar hmre paas ek function ho sakta hai toh 
       bhut saare use case ho sakte hai.
    */
    function two(){               
        const website = "youtube"
        console.log(username);  /* Ab hum chahte hai ki ye console.log hona chyiae username ka,
                                   ab username ka kyu hona chyiae console.log ?

                                   kyuki ab hum hai function two() ke andar toh hum dekhna chahte hai 
                                   ki kya hum bahar waale function ke "username" ko access kar sakte 
                                   hai.
                                    */
    }
    // console.log(website);

    two()
}
one()

/* Ab humne pichle lecture mai padha tha ki :

   "global-scope" mai hum jo bhi value likhte hai vo "block-scope" mai available hoti
    hai lekin block-scope ke andar jo likhte hai vo value bahar nhi jaani chyiae. 
    
    Toh ab function "one()" ki jo value hai use hum function "two()" mai toh access kar 
    sakte hai lekin function "two()" ki value hum uske bahar use nhi kar sakte kyuki
    function one() ki value function two() ke lie "global-scope" hai lekin function two()
    ki value function one() ke lie "local-scope" hai.

    Toh function two() mai jo variables humne declare kare vo function two() ke end hote 
    hi kthm ho gye. 
*/

/* Ab hum apne upr waale program ko execute karte hai. 

   Output ==> ReferenceError: website is not defined

   console.log(website); ==> Ye bol rha hai ki ye waali jo line hai isme error hai kyu ?
                             kykui es waali line mai jo "website" hai use humne function
                             two() ke andar declare kiya tha toh iska scope toh uske andar
                             tak hi tha, toh hum use yha local-scope ke bahar access nhi 
                             kar sakte. Toh es line ko karna padega hume comment.

                             Ab kyuki isi waali line mai error aa gyi isliye es line ke niche
                             ka jo "two()" hai vo execute ho hi nhi paya kyuki execution line 
                             by line hota hai.

Ab hum es line ==> "console.log(website);" ko comment krke apna code fir se run karenge

Output ==> ishan

*/

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------

/* Ab maanlo agr hum function "one()" ko comment karde toh kya hoga ?  */ 
function one(){
    const username = "ishan"

    function two(){               
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);

    two()
}
// one()

/* Output ==> kuch nhi aayega kyu ? kyuki jabtk hum fucntion "one()" ko call nhi krenge
              tabtk function "two()" call hi nhi hoga. */

// --------------------------------------------------------------------------------------------

// ****************************** Nested if *************************************

if(true) {
    const username = "ishan"
    if (username == "ishan") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

/* Ab hum apne code ko execute krke dekhte hai ki error kaha-kaha par aayegi ?
   
   Output ==> 

   1) ishan youtube 

      console.log(website);
      ReferenceError: website is not defined

      Sabse pehle toh andar waale if ka console chl gya jiska output aaya "ishan youtube"
      lekin jab phir bahar wala console chla toh error aa gyi. ab kyu aayi ?

      kyuki bahr waale console ke andar jo "website" hai vo local-scope ka variable hai
      or hum use global-scope mai access karne ki kosis kar rhe hai jo ki wrong hai.
      Toh es line ko hum kar denge comment.

    2) ishan youtube 

      console.log(username);
      ReferenceError: username is not defined

      Same "username" bahar waale if mai defined hai or use hum, uske scope ke bahar access
      karne ki kosis kar rhe hai, yaani ki wahi global-scope mai local-scope ko access karne 
      ki kosis kar rhe hai.

      AB hum es line ko bhi comment kar deta hai.

    3) ishan youtube

    Toh hmarea output bina kisi error ke print ho jayega.
 */

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------

// ******************************** INTERESTING CONCEPT  ********************************

function addOne(num){
    return num + 1
}
console.log("Output is...");
console.log(addOne(5))
// Output ==> 6

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------

// Ab same upr waale function ko hum dosri tarah se bhi likh sakte hai.

const addTwo = function(num){
    return num + 2
}
console.log("Output is...");
console.log(addTwo(5));


/* function addone(num)          ==> Dekho upr jo ye hai, ye function hai

   const addTwo = function(num)  ==> Or ye bhi function hi hai, lekin ise kbhi-kbhi expression
                                     bhi bol diya jata hai.

Note: JS ke andar variables bhut hi jyda powerfull hai or ye kuch bhi hold kar sakte hai.
      JSON value ho gyi, functions ho gye etc.
*/

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------


/* Ab hum kya karenge ki hum function call, function declaration se pehle karwa lenge */

console.log("Function call before function declaration");
console.log(addone(5))
/* Output ==> Function call before funciton declaration
              6 
*/

function addone(num){
    return num + 1
}

//  Lekin jab isme aisa karenge toh error aayegi. kyu ?

console.log("Another way of Function call before function declaration");
console.log(addtwo(5));

const addtwo = function(num){
    return num + 2
}

/* Output ==> Output is...
              console.log(addtwo(5));
              ReferenceError: Cannot access 'addtwo' before initialization

   Ab yha ye boll raha hai ki ye function "addtwo" ko toh access hi nhi kar sakta.
   Es waale tarike mai humne function ko declare karne ke sath ek vaiable mai hold
   bhi kar diya hai.
*/

/* Toh JS mai aage jaa kar ek concept aata hai "Hoisting".

   Jismei hum pdte hai ki, fucntion kaise declare hote hai, kaha unhe rakha jata hai,
   kya unka execution context hai, yaa phir kaise variables ko JS treat karti hai,
   kaise ek final tree bnati hai jaha par saare varibales or saare functions rakhe jaate 
   hai. Ye sab hum baad mai padenge. 

*/