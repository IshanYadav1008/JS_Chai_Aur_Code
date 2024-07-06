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

    function addTwoNumbers(number1, number2){
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
    addTwoNumbers(3, 4) // Ab ye 3 jo hai vo "number1" parameter mai pass ho jayega or 4 "number2" parameter mai.

