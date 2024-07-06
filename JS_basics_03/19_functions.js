// *************************************** functions() ******************************************

/*
console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("N");

agr maalo ki ab hume upr waale sabhi consoles ko 10 baar execute karwna hai, toh 10 baar karwane mai
problem hogi kyuki phie hume sabuhi ko 10 baar likhna padega. 
   
Toh hmare paas ek tarika hai "function()" jiska use karke hum jitni baar chaahe utni baar upr ke sabhi
consoles ko execute karwa sakte hai vo bhi bhut hi easily way mai.  
*/

// ---------------------------------------------------------------------------------------------------

/* function() ko likhne ka tarika bhut hi easy hai :

1) sabse pehle hum likhte hai "function" jo ki keyword hai apne aap mai.

2) Uske baad function ka naam denge jaise hum variables kaa naam dete hai toh yha hum 
   function name de rhe hai "sayMyName".

3) Uske baad hum lagayenge paranthesis "()".

4) Or fir hum likhte hai function ka scope "{}". function ki definition likhte hai hum en
   curly braces ke andar.
   
5) Fir upr humne jitne bhi console likhe the vo hum es function ke scope mai likh denge yaani
   parantheis ke andar. Toh ise bolenge hum function ki definition.

*/
function sayMyName() {

    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");

}

/* AB hume function ko jitni baar bhi call karwana hai toh uske liye hum likhenge : 
   
1) Sabse pehle hum likhenge function ka name "SayMyName". Toh ye hai function ka reference.

2) Ab hume es "SayMyName" function ko execute karwana hai toh fir iske aage hum lagayenge
   paranthesis "()" toh ye ==> "()" ho gya execute. Toh paranthesis "()" jaise humne laga
   diya yha function ki definition ke baad toh ye ho gya uska execution. or sirf function
   kaa naam likh rhe hai "SayMyName" function definition ke baad toh ye kehlayega function
   ka reference.
*/
console.log("Basics about how to call a function");
sayMyName()

/* Output ==>
                I
                S
                H
                A
                N 
*/
console.log("----------------------------------");

/* Agr hum sirf aisa likh kr function ko call kre toh */ 
sayMyName

/* Toh output mai kuch bhi nhi aayega kyuki ye "sayMyName" sirf funcition ka reference hai, hum
   bta rhe hai ki ye function waha par rehta hai, lekin sirf rehne ki toh baat hi nhi hai hume toh
   ise execute bhi krna hota hai */

// ---------------------------------------------------------------------------------------------------

/* Ab hum ek function banayenge jismei hume 2-Numbers ko add karwana hai. 

   Lekin uske liye hume 2-Numbers pass bhi toh karne padenge jaise calculator
   mai hum pass karte hai.

   1) Toh sabse pehle hum banayenge function uska naam hum rakhte hai:
      
      function addTwoNumbers

   2) Ab es function mai hum 2-Numbers ko pass karwa rhe hai or en 2-Numbers ka naam
      hum rakh rhe hai "number1" and "number2".

      function addTwoNumbers(number1, number2)

      AB JavaScript mai hume en numbers ka type dene ki jarort nhi hai.

    3) fir hum en dono numbers ko add karke print karwa denge.
     
       console.log( number1 + number2 );

    4) Or fir hum es funciton ko call karwa denge :

       addTwoNumbers()   
*/

    function addTwoNumbers(number1, number2){  // number1 and number2 are the Parameters
        console.log(number1 + number2);
    }

    /* 5) Ab agr hum aise simply execute karenge toh kuch nhi hoga kyuki hum koi argument nhi de rhe hai
          function ko call karte time.
    */
    console.log("Result of Adding two numbers without passing any arguments to the functions parameter");
    addTwoNumbers()
    // Output ==> NaN

    /* 6) Toh ab hum function call karte time arguments pass karemge, kaise ?

          addTwoNumbers(3, 4) ==> aise
    */
    
    console.log("Result of Adding two numbers by passing arguments to the functions parameter");
    addTwoNumbers(3, 4) /* Ab ye 3 jo argument hai vo "number1" parameter mai pass ho jayega or 
                           4 argument "number2" parameter mai. */

   //  Ab Problem kaha aati hai jab hum Parameter mai number ki jaagh alphabet.
   console.log("Output of One argument is number and second is number but in String");
    addTwoNumbers(3, "4") // Ab manlo kisi ne quotes mai number de dia toh kya hoga ?
   /*  Output ==> 34         Toh JS-Interpriter ko laegag ki 4 string hai toh 3 bhi 
                             string hoga or ye dono ko concatinate kar dega. */ 

   // Ab hum aise karenge toh kya hoga ?
   console.log("Output of One argument is 3 and second is 'a' ");
   addTwoNumbers(3, "a") /* Ab kyuki humne function ke andar kbhi check hi kara tha ki en dono
                           argument ki kis tarah se add karna hai tab problem aa jaati hai kayi
                           baar.  */

   // Ab suppose karte hai ki hum "null" de dete toh kya hota ?
   console.log("Output of One argument is 3 and sesond is null");
   addTwoNumbers(3, null)
   // Output ==> null

   // Abhi humne yha par checking nhi ki hai, kyui abhi humne conditional statements nhi pde hai.

   /* Ab Argument konsa hota hai or parameter konsa hota hai funcitons mai ?
   
      Parameters ==> function addTwoNumbers(number1, number2)
      Jab hum function ki definition banate hai toh uske andar hum jo bhi input lete hai jaise
      humne liya hai "number1" and "number2" toh inhe hum bolte hai parameters.

      Arguments ==> addTwoNumbers(3, 4)
      Jab hum function ko call karwate hai tab jo values uske andar pass karte hai toh use bola 
      jata hai arguments.
   
   */ 

   console.log("----------------------------------");
// ---------------------------------------------------------------------------------------------------

console.log("Output of One argumnet 3 and second of 5 is...");
addTwoNumbers(3, 5)
// Output ==> 8

// Ab JS mai kya hota hai ki upr waali line ko hum ek variables mia bhi store kar sakte hai
console.log("Out of 3 and 5 argument after storing in 'result' variable");
const result = addTwoNumbers(3, 5) // Toh hume "result" mai store karwa diya "addTwoNumbers(3, 5)" ka result
// Output ==> 8 (Ab ye 8 toh aa gya)

/* Lekin ab jo ye "result" hai isme value kya hai ? vo hum check karte hai */
console.log("Output in the result is...");
console.log("Result: ", result);
/* Output ==> undefined     (Ab "result" ke andar jo value hai vo hai "undefined". Ab aisa kyu ?)
    
   Kyuki "functio"n mai value "pass" toh ho gyi lekin "add" hone ke baad "return" nhi hui kyuki 
   function apne aap values ko return nhi karta hai. Values ko return karwane ke liye hume "return"
   keyword ka use karna padta hai.
*/

console.log("----------------------------------");
// ---------------------------------------------------------------------------------------------------

// Ab hum "function" ki value ko "return" karwayenge or uske liye fir se ek new "function" banayenge.

function addTwoNumbers_1(number_1, number_2){

   let result_1 = number_1 + number_2
   return result_1 // Ab jab hmara function execute ho jayega toh es result_1 ko return kardo

}

const result_1 = addTwoNumbers_1(3, 5) // Ab es line mai "result_1" mai "returned" value hogi
console.log("Result of adding two numbers by using return keyword");
console.log("Result:", result_1);
// Output ==> Result: 8

console.log("----------------------------------");
// ---------------------------------------------------------------------------------------------------

// Ab hum "function" ki value ko "return" karwane ka ek or tarika hota hai.

function addTwoNumbers_2(number_3, number_4){

   return number_3 + number_4 // return kardo number_3 + number_4 ko

}

const result_2 = addTwoNumbers_1(3, 5) // Ab es line mai "result_1" mai "returned" value hogi
console.log("Result of adding two numbers by using return keyword in single line");
console.log("Result:", result_2);
// Output ==> Result: 8

console.log("----------------------------------");
// ---------------------------------------------------------------------------------------------------

/* Ab hum dekhenge ki jo "Arguments" hum le rhe hai or jo "Parameters" hum le rhe hai toh kitne or 
   tariko se hum inmei values le sakte hai. Yaa or kitne tariko se hum values vom pass karwa sakte hai. */

   function loginUserMessage(username){
      return `${username} just logged in`
   }

   console.log("Output after passing 'ishan' as argument to the function");
   console.log(loginUserMessage("Ishan"))
   // Output ==> Ishan just logged in

   // Agr ab hum empty string pass karenge toh kya hoga ?
   console.log("Output after passing empty string to the function");
   console.log(loginUserMessage(""))
   // Output ==> just logged in

   // Agr hum kuch bhi pass nhi karenge toh kya hoga ?
   console.log("Output without passing any value to the function");
   console.log(loginUserMessage())
   /* Output ==> undefined just logged in

   Interview Question ==> Agr hum kuch bhi pass hi nhi karte hai toh aata hai "undefined", "null"  nhi aata hai
                          kyuki vo define hi nhi hua hai. */

   console.log("----------------------------------");
   // ----------------------------------------------------------------------------------------------------------

   /* Hum "if-else" syntax use karke ye cheez check kar sakte hai ki koi value "argument" se pass hui bhi hai yaa
      nhi, yaa phir parameter mai koi value hai yaa nhi. */
    
      function loginUserMessage_1(username_1){

         if(username_1 === undefined) // Ab hum check krte hai ki, jo" username" hai kya vo "undefined" ke equal hai
         {
            console.log("Please enter a username"); // agr hai toh toh hum ye message show karwa denge
         }
         return `${username_1} just logged in`
      }
      
      console.log("Here we comparing the ''username_1 with 'undefined' ");
      console.log(loginUserMessage_1());
      /* Output ==>
         Please enter a username       ==> isne bol diya, kyuki upr waali condition true hai
         undefined just logged in      ==> ab hum chahte hai ki ye line naa chle condition ke true hone ke baad
                                           toh uske liye hum "return" keyword use kar lenge.
      */

console.log("----------------------------------");
// ----------------------------------------------------------------------------------------------------------

function loginUserMessage_2(username_2){

   if(username_2 === undefined) 
   {
      console.log("Please enter a username"); 
      return // Ab yha return karwane se ye hoga ki condition true hone par aage ka code execute nhi hoga.
   }
   return `${username_2} just logged in`
}

console.log("Here we comparing the ''username_1 with 'undefined' but using 'return' after true the condition");
console.log(loginUserMessage_2());
/*  Output ==> 
    Please enter a username
    undefined                // Ab ye undefined isliye aa rha hai kyuki es "console.log(loginUserMessage());"
                                line mai kuch bhi nhi hai.
*/

console.log("----------------------------------");
// ----------------------------------------------------------------------------------------------------------


// Now we are using (!) operator.

function loginUserMessage_3(username_3){

   if(!username_3) 
   {
      console.log("Please enter a username"); 
      return 
   }
   return `${username_3} just logged in`
}

console.log("Here we are using not(!) operator in if-else condition");
console.log(loginUserMessage_3());
/*  Output ==> 
    Please enter a username
    undefined                
*/