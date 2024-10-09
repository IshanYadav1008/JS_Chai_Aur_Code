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