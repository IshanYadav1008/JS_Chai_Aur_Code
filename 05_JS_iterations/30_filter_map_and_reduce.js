/* ****************************************** forEach() loop ************************************************ */
console.log("****************************** forEach() loop **********************************")

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {  // Humne isko ek "values" naam k variable mai strore kar liye hai. 
    console.log(item);
    
})
console.log(values); /* Ab ye jo "forEach()" loop hai ye return kya karta hai? Yaa phir ye return krta bhi hai 
                        yaa nhi */

/* Output ==>  js       --> Ab ye jo values hai, ye toh loop ke andar waale console ki wajah se print hui hai. 
               ruby
               java
               python
               cpp
               undefined --> Lekin isne return kuch bhi nhi kiya hai
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

// Agr hume return karna hai toh phir hume manually return karna padega.

const coding_1 = ["js", "ruby", "java", "python", "cpp"]

const values_1 = coding_1.forEach( (item) => {   
    console.log(item);
    return item       // Toh hume bolna padega ki return karo us "item" ko
    
})
console.log(values_1);

/* Output ==>  js
               ruby
               java
               python
               cpp
               undefined  --> Toh yha wapus se hume value undefined mil rhi hai.

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

const coding_2 = ["js", "ruby", "java", "python", "cpp"]

const values_2 = coding_2.forEach( (item) => {   
    // console.log(item);   ==> Agr maanlo hum es line ko comment kar dete hai toh phir kya hoga?
    return item       
    
})
console.log(values_2);

//  Output ==> undefined (Toh tab bhi value undefined hi aa rhi hai.)


/* IMP** ==> Toh isse kya lagta hai ki ye jo "forEach()" hai ye koi bhi value return nhi karta hai.
             Hum chaahe yaa naa chaahe ye value return nhi karega.  */

/* Ab hmesha aisa jarori toh nhi hota hai ki humne kuch values array se li hai or hum unhe print hi
   karwana chahate hai yaa kuch use hi karna chahte hai. Ho sakta hai hum unse kch or kaam karwana
   chahte hai.

   Jaise maanlo abhi k liye temporary kuch condition dena chahta hu ki suppose kariye ki array ki 
   jo values hai unmei agr koi value "java" hai toh usko return kariye varna mar kariye.
   
   Toh aise case mai toh hmara "forEach()" loop dhara ka dhara reh gya. Toh kya iske liye ab hume
   "for()" loop par wapus jana padega? Toh nahi.

   JavaScript ke jo developers hai, jo core community hai unhe ye baat bhi pata hai ki theak hai
   kayi baar hum us "each" value par kuch perform karna chahte hai lekin kayi baar hum us value ko
   sirf return karna chahte hai yaa phir conditionally check karna chahte hai.

   Toh en saare cases mai hmara jo ye "forEach" loop hai toh ye dhara reh jata hai.
   
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* ************************************** filter() operation **************************************** */

/* Toh ab hum new examples ye smjte hai ki ye sb hum kaise kar sakte hai or uske liye hum example mai
   numbers ko lete hai kykui numbers se jyda accurate smj mai aata hai. 
   
   Jaise hmare paas "forEach()" tha vaise hi hmre paas ek "filter()" operation bhi hota hai.
*/
console.log("************************ filter() operation **************************");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* filter bhi apne andar callback hi leta hai. Jab hum iska upr curser le jayenge toh hume ye show krega
   ki ise kya-kya chyiae hota hai. */

/* myNums.filter( () => )  callback kaise? Ye humne liye callback --> () or ye arrow function --> => {} humne 
                           define kr diya.
                   
                   Ab arraow function ko hum:-

                   => {} --> Es tarah se bhi define kar sakte hai.

                   => () --> Yaa phir es tarah se bhi define kar sakte hai.

                   =>    --> Yaa phir single line ka hai toh single line likh dijiyiae.
                   
                   */

// Toh ab hume kya karna h ki hume vo numbers chyiae jo 4 se bade hai array mai.

/* myNums.filter( (num) => num > 4) 

Toh ye "filter()" function bhi apne andar callback hi leta hai. Ab callback kaise? 
                                    
1) Ye humne liya ek callback --> ()
                                     
2) Or ye Arrow function humne define kar diya --> => {}

3) Toh ab hum kya karenge ki humne numbers chyiae jo 4 se bade hai. toh kaise karenge ? 
                                       
4) (num) => num > 4 --> Ab hume vo saare num chyiae jo 4 se bade ho.

Agr ab hum hmari es script ko run karenge toh kya hoga ? kuch bhi nahi aayega kyuki humne isko kuch
bola hi nhi ki hume kuch values chyiae yaa kahi par en values ko store karo.

5) (num) => num > 4 --> Toh isne values yha par hume return kari hai.

IMP*** ==> Ye same cheez "forEach()" mai bhi hoti hai lekin forEach values
           ko return nhi karta hai.

           Lekin ye "filter()" function values ko wapus karta hai, return
           karta hai.
*/

// Toh ab hum kya kar sakte hai ?

const newNums = myNums.filter( (num) => num > 4 ) // "newNUmns" mai humne ise store krwa liya hai.
 
console.log(newNums); // Ab newNums mai value kya aayegi ? 

/* Output ==> [ 5, 6, 7, 8, 9, 10 ]  // Toh "newNums" mai ye value aa gyi hai.

   Toh ye hume samaj mai mai aa gya hai ki jab bhi hum "filter()" use karte hai toh filter ke andar
   hume ek callback function ( (num) => num > 4 ) milega jiske andar har ek value ko each access --> (num)
   kiya jayega lekin uske baad hume deni padti hai ek condition (num > 4), toh jo-jo log us condition ko
   satisfy karenge or true hogi condition toh vo-vo values toh return ki jayengi varna vo values nhi
   return ki jayengi or isi ko filter ka basics bola jata hai. Or isko bhut jagah hum use karenge or bhut
   jyda impletation hoga iska.

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Ab isme thodi si problems bhi aati hai logon ko. Ab vo kaise ?
   
   Hume filter() ke saath arrow functions ko dosri tarah se use karke dekhte hai jo ki hum pehle
   bhi krke dekh chuke hai, lekin ab filter k saath krke dekhenge.
*/
console.log("Empty array is coming because we are not using return keyword inside the scope to return the value");

const myNums_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumns_1 = myNums_1.filter( (num) => {
    num > 4
} )
console.log(newNumns_1);

/* Output ==> [] --> Ab ye array empty kyu aaya? Ye cheez hume humne hmare "arrow" waale topic mai
                     discuss kari thi.

                     Ki jab hum paranthesis () laga rhe the tb toh value khud se return ho rhi thi
                     lekin jab curly-braces {} lga rhe hai toh khud se value retun nhi ho rhi hai
                     kyuki humne cruly-braces lga kr ek scope start kar diya hai or agr hum scope
                     start kar denge toh phit hum "return" keyword likhna hi padega.
*/

console.log("------------------------------------------");

console.log("We are usign return keyword explicitely inside the scope to return the value of num");

const myNums_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumns_2 = myNums_2.filter( (num) => {
    return num > 4   // Curly-braces {} lgane ka mtlb hai scope or scope ke andar ki value ko
} )                  // hume explicitely "return" keyword likh kar return karna padega.
console.log(newNumns_2);

/* Output ==> We are usign return keyword explicitely inside the scope to return the value of num
              [ 5, 6, 7, 8, 9, 10 ] 
*/

/* *** Very Imp Note *** ==> 
    
1) Agr hum ye --> {} (scope) open karte hai toh hume "return" keyword use karna padega.

2) or agr hum ye --> {} (scope) open nhi karte hai toh toh hum directly ye (num > 4) line likh
   sakte hai yaa jo bhi hmari condition hai toh ye return ho jayega. Lekin ye one line condition
   ke liye hai, agr usse jyda line hongi toh phir hume scope lagana hi padega. 
*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Agr agr maanlo hume same kaam "filter()" ka use karne nhi balki "forEach()" se hi karna hai toh
   uske liye hum kya karenge ? */
   
   console.log("Array using forEach()");

   const myNums_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   const newNums_3 = []  // 1) Ye humne newNums_3 naam ka ek array bana liye or es array ko humne rakha empty.

   /* 2) Ab myNums_3 ke sath hum laga denge forEach() kyuki hum filter() use nhi kr rhe hai. Or hum isme array 
         functions hi as a callback use kar rhe hai. */

   myNums_3.forEach( (num) => {   // 3) Ab callback mai har ek number ko hum num nol lete hai.

      if (num > 4) {           // 4) Agr num mai jo bhi values 4 se badi hai toh
         newNums_3.push(num)   //    Un sabhi values ko newNums_3 mai push kar do. 
      }                        //    Toh ye basic array ka method hai koi values add karne k liye.
   } )
   console.log(newNums_3);

   /* Output ==> Array using forEach()
                 [ 5, 6, 7, 8, 9, 10 ] 
   */
   
// Toh filter() or forEach() dono mai se hume jo bhi tarika sahi lagta hai vo hum use kar sakte hai.

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Ab filter() ke sath hum or bhi kuch basics hum use kar sakte hai.

   Hum yaha ek books ka example lenge. Ab hum ye books ka example smjte hai ki ye kaam kaise karta
   hi jisse ki kuch or filter() ke through exercise kar sake.
*/

console.log("filter the data by using filter() method \n");

const books = [   // 1) Ye books ka ek array hai.
   {title: "Book One",   genre: "Fiction",     publish: 1981, edition: 2004}, // 2) Or es tarah se books ke andar kayi saare objects hai.
   {title: "Book Two",   genre: "Non-Fiction", publish: 1992, edition: 2008}, //    Ye bhi
   {title: "Book Three", genre: "History",     publish: 1999, edition: 2007}, //    Ye bhi
   {title: "Book Four",  genre: "Non-Fiction", publish: 1989, edition: 2010}, //    Ye bhi
   {title: "Book Five",  genre: "Science",     publish: 2009, edition: 2014}, //    Ye bhi
   {title: "Book Six",   genre: "Fiction",     publish: 1987, edition: 2010}, //    Ye bhi
   {title: "Book Seven", genre: "History",     publish: 1986, edition: 1996}, //    Ye bhi
   {title: "Book Eight", genre: "Science",     publish: 2011, edition: 2016}, //    Ye bhi
   {title: "Book Nine",  genre: "Non-Fiction", publish: 1981, edition: 1989}, // or Ye bhi
]

/*  3) Humne ek ek book ko kuch title diya hua hai like "Book One", "Book Two", "Book Three" etc.

    4) Fir humne books ko kuch genre diye.

    5) Fir sabki ek publishing date di.

    6)  Or for sabki ek edition date di.

    Ab ye sab toh aa gya lekin hum en sab se karna kya chahte hai ? Dekho aisi hi values hume database se milengi.

    Jaise ek database tha uske andar humne kayi saare objects de diye hai. Ab user kuch filter laga rha hai apne
    webpage par.
    
    Ab hume ek exercise karni hai ki user jo-jo bol rha hai toh vo-vo usko karke dijiyiae or usi tarah se print 
    kariye. 
    
    Toh ab hum print karenge.
*/

console.log("Filter all the books whose gener is History");
const userBooks = books.filter( (bk) => bk.genre === "History" )  /* Ab ye humne laga diya callback ( () => ), ab chaahe
                                                       hum ise ek hi line mai kre yaa return keyword use kar le. Toh jaisa
                                                       hum chaahe vaisa kr sakte hai. Har ek book ko hum "bk" bol dete hai. 
                                               
                                                       Ab hume kya filter lagana hai ? Hume vo saari books chyiae jinka gener
                                                       history hai. toh kaise kar sakte hai ?

                                                       Toh hmre paas array mai se har ek object aa gya hai jise hum "bk" bol
                                                       rhe hai, toh us bk ke andar hum uska gener access kar sakte hai or ye
                                                       genre kisse match karna chyiae toh humne "===" lga bol diya "History"
                                                       se.

                                                       Toh ab "userBooks" ke andar konsi value gyi automatically ? jo bhi es
                                                       condition ko true manti hai. Yaani ki vo saare objects jinke andar jo
                                                       gener hai vo agr history hai toh wahi saari books user ko ab dekhai
                                                       dengi.
                                                   */
console.log(userBooks)

/* Output ==> filter the data by using filter() method

Filter all the books whose gener is History
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]

*/

console.log("------------------------------------------");

// Ab hume vo saari books chyiae jo publish hui hai year 2000 ke baad. Toh kaise karenge ?

// --------------------------------------------------------------------------------------
/*

 console.log("Now filter all that books who published after 2000");

 const userBooks = books.filter( (bk) => { bk.publish >= 2000 })
 console.log(userBooks)

 Output ==> SyntaxError: Identifier 'userBooks' has already been declared 


 Ab hum "userBooks" ko redeclare toh nhi kar sakte kyuki ye pehle se hi declare hai.
 lekin Overwrite kar sakte hai. 
*/

// -----------------------------------------------------------------------------------------

// Toh ab hum "userBooks" ko Overwrite kr lete hai.

/* userBooks = books.filter( (bk) => { bk.publish >= 2000 })
   console.log(userBooks)

   Output ==> TypeError: Assignment to constant variable.

   Ab ye error kyu aayi ? kykui upr waali es --> const userBooks = books.filter( (bk) => bk.genre === "History" )
   line mai "userBooks" constant declare hai. 

   Toh hume ise "const" se "let" mai karna padega kykui const value toh redeclare nhi hoti hai.

   Lekin hum aisa karenge lekin new example le kar, ise aisa hi rehne dete hai smjhenge k liye.

*/

// ================================================================================================================

const books_1 = [  
   {title: "Book One",   genre: "Fiction",     publish: 1981, edition: 2004}, 
   {title: "Book Two",   genre: "Non-Fiction", publish: 1992, edition: 2008},
   {title: "Book Three", genre: "History",     publish: 1999, edition: 2007},
   {title: "Book Four",  genre: "Non-Fiction", publish: 1989, edition: 2010},
   {title: "Book Five",  genre: "Science",     publish: 2009, edition: 2014},
   {title: "Book Six",   genre: "Fiction",     publish: 1987, edition: 2010},
   {title: "Book Seven", genre: "History",     publish: 1986, edition: 1996},
   {title: "Book Eight", genre: "Science",     publish: 2011, edition: 2016},
   {title: "Book Nine",  genre: "Non-Fiction", publish: 1981, edition: 1989},
]

console.log("Filter all the books whose gener is History");
let userBooks_1 = books_1.filter( (bk) => bk.genre === "History" )  // Ab yha humne "const" ki jagah "let" use kar liya hai.

console.log(userBooks_1)

// -----------------------------------------------------------------------------

console.log("\n Now filter all that books who published after 2000 \n");

console.log("Empty Array is coming because we are not using return keyword with scope {}");
userBooks_1 = books_1.filter( (bk) => { bk.publish >= 2000 })
console.log(userBooks_1)

/* Output ==>  Now filter all that books who published after 2000
               []

   Ab output mai ye empty array kyu aaya ? Toh kya year 2000 ke baad koi book publish nhi hui hai kya ?

   Toh aisa nhi hai, 2000 ke baad books toh publish hui hai. Toh jo ye "bk.publish" hai toh isme
   2000 ke baad waali publish books ka data toh hai.

   Toh phir error kaha hai ?

   { bk.publish >= 2000 } --> Toh yaha hai error. Humne yha scope {} open kar liya hai.

   bk.genre === "History" --> Lekin yha humne scope open nhi kiya tha.

   Toh yaa toh hume scope {} hatana padega yaa phir "return" keyword ka use karna padega.

*/

// -----------------------------------------------------------------------------

console.log("\n Now the output of all that books are coming who are published after 2000 \n");
userBooks_1 = books_1.filter( (bk) => { return bk.publish >= 2000 })
console.log(userBooks_1)

/* Output ==> Now the output of all that books are coming who are published after 2000 

[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Ab hum aisa chahte hai ki un books ko show karwa do jinki publish date 1995 yaa uske baad hai toh 
   hum aisa bhi kar sakte hai. */ 

console.log("\n Now the output of all that books are coming who are published after 1995 \n");
userBooks_1 = books_1.filter( (bk) => { return bk.publish >= 1995 })
console.log(userBooks_1)

/* Output ==>  Now the output of all that books are coming who are published after 1995 

[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]

*/

console.log("------------------------------------------");

// ------------------------------------------------------------------------------------------------

/* Ab hmara interest us book mai hai jo 1995 yaa uske baad publish hui hai or vo "History" gener ki
   honi chyiae. */ 