/* ******************************** scope ************************************

   scope ki kahani start hoti hai en 3 keywords se : let, var and const
*/

let   a   = 10
const b   = 20
var   c   = 30 

console.log(a); // Output ==> 10
console.log(b); // Output ==> 20
console.log(c); // Output ==> 30

/*  Ques.) ab jab "var" hi work kar rha hai toh kya jarort thi "let" or "const" lo laane ki ?
           Jab "var" hi work kar rha tha variable ke liye toh hum en dono ko le kar hi kyu aaye ?
   
    Ans.) Toh hum isliye le kar aaye kyuki jo "var" hai vo actually mai hmare block scope ko jo
          ki hona chyiae tha uski tarah work nhi karta hai.
*/


/* {} ==> Ye curly braces ko hum bolte hai scope, ye almost har programming language mai scope hai.
          Ye hume functions mai, loops mai yaa or bhi places par dikhega.

    Note : Ab "Objects" mai bhi curly braces hote hai lekin vo "Object declaration" hai.

    Lekin kisi function or loops ke sath es {} ==> curly brances ko bola jata hai scope, us function
    ka scope ya us loop ka scope, Means scope of that program.

*/

console.log("-------------------------------------");

// --------------------------------------------------------------------------------------------------

if (true) {         // if ki condition mai "true" likh diya iska mtln ab 100% hm es loop mai jayenge

    let   a1   = 10  // Ab ye jo variables hai let, const or var toh inko humne if-block ke andar
    const b1   = 20  // declare kiya hai, iska mtlb inka scope es if-block tak hi hai. Toh ab ye jo
    var   c1   = 30  // variables hai, ye jo humne memory allocate kari hai toh inka kaam es block tk hi hai.

}

/* Toh ab problem kaha aati hai ? Chlayiae ab hum vo dekhte hai. */

// console.log(a1);
/* Output ==> 

   ReferenceError: a1 is not defined ==> Ye bol raha hai ki "a1" defined nhi hai jo ki ek acchi baat hai.
                                         kyuki "a1" ko humne if-block ke andar define kiya hai ise bahar
                                         nhi aana chyiae.
*/

// console.log(b1);
/* Output ==> 

   ReferenceError: b1 is not defined ==> Ye bol raha hai ki "b1" defined nhi hai jo ki hona bhi nhi chyiae.
                                         kyuki "b1" ka kaam if-block ke andar kthm ho gya hai or ise "return"
                                         kiya nhi hai humne.
*/

console.log(c1);
/* Output ==> 30

   Ab ye 30 print ho gya hai or yhi hai sbse badi problem ki baat kyuki ye 30 if-block ke bahar aana hi nhi
   chyiae tha. 
  
*/
 
console.log("-------------------------------------");

// --------------------------------------------------------------------------------------------------

/* Ab maanlo ek dosra programmer hai or usne bhi "c1" as "var" variable le lia or iski value declare 
   kardi "300". Yaani humare program mai pehle se hi ek "c1" if-block ke andar declare tha or ab dosre
   if-block ke bahar declare kar diya, toh ab kya hoga ?   */
var c1 = 300

if (true) {        

    let   a1   = 10  
    const b1   = 20  
    var   c1   = 30 

        //   c1 =30  ==> Agr hum ise aise bhi likhte bina "var" declare kiye tab bhi same problem aati.

}
console.log(c1);
/* Output ==> 30

   Ab jis programmer ne c1 variable ki value 300 declare kari thi ab vo toh pareshan ho jayega 
   ki usne toh 30 value li bhi nhi thi.

   Ab ho sakta hai ki ye if-block jo hai vo kisi dosri file mai se import ho raha ho, toh dosra
   programmer toh pareshan ho jayega ki usne toh c1 ki value 300 li thi or vo debug hi karta reh 
   jayega or use es if-block ke baare mai toh pta hi nhi hai ki ye kab import ho gya hai.

   Ab 10 log jab ek saath code karte hai toh ye problem aati hi hai.

   Note: Isliye "var" ko log avoide karte hai.
*/
console.log("-------------------------------------");

// --------------------------------------------------------------------------------------------------

/*  Note : "if" ke andar hum jo bhi likh rhe hai vo hai "block-scope" or iske bahar hum jo bhi likh
           rhe hai vo hai "global-scope"

           Ab "global-scope" mai hum jo bhi value likhte hai vo "block-scope" mai availavle hoti hai
           lekin block-scope ke andar jo likhte hai vo value bahar nhi jaani chyiae.
*/

let a1 = 300 // Ab "a1" ki jo value hai vo if-block se totally independent hai

if(true){
    let   a1 = 10 // Yha if ke andar jab tk rahenge tbtk hum a1 ki value ko 10 hi use karenge
    const b1 = 20
}
console.log("The value of global scope variable a1 will print");
console.log(a1);
// Output ==> 300

console.log("-------------------------------------");

// --------------------------------------------------------------------------------------------------

// Ab maanlo ki hume both global-scope or local-scope ki values ko print karwana hai toh kaise karenge ?

let a2 = 300 

if(true){
    let   a2 = 10 
    const b2 = 20
    console.log("Value of Block-Scope");
    console.log("INNER: ", a2);
}
console.log("The value of Global-Scope");
console.log(a1);
/*Output ==> 
    
Value of Block-Scope
INNER:  10  

The value of Global-Scope
300

*/