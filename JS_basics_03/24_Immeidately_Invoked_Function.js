// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
console.log("Output of chai() function");
chai()
// Output ==> DB CONNECTED

/* Ab immediately invoked function yha pr ho gya hai lekin hun us cheez ka kya kre, 
   Jb hmara Global-Scope hai waha se cheezen "polute" hoti hai kayi baar or hume 
   lgta hai ki ye pollution atleat es function ke andar toh nhi hona chyiae. Toh es
   wajah se kayi baar hume uske liye IIFE likh dete hai.
*/

console.log("----------------------------------------");

// ---------------------------------------------------------------------------------------------------------

/* Ab last lecture mai "arrow() function" ke andar humne: 
   
   const return_obj1 = (num1, num2) => ({username: "ishan"}) 
   
   Ye jo paranthesis hai <==> ({username: "ishan"}) <==> iske baare mai discussion kiya tha 
   ki ek parantheis() lga do toh automatically ek block ban jata hai or uske andar bhi kaam
   kiya jaa sakta hai.

   Ab hum kya karenge ki:
*/

(function chai(){                 // Es function ki jo definition likhi hai humne,  
    console.log(`DB CONNECTED`);  // toh iske upr paranthesis() lga denge.
})()
// Output ==> DB CONNECTED


/*
   1) () --> Ye jo 1st paranthesis hai hmre paas toh ye vo hai jisme hum function ki definition likhenge.

   2) () --> or jo ye 2nd paranthesis() hai toh ye ho gya 1st waale ka "Execution call". 
   
             Jaise hum upr chai() ke aage lga rhe the, lekin es baar humne fucntion ko () mai wrap kar diya
             or () lga ke use call kar liya.

    Interview Question
    ------------------
   Ques) Why we used IIFE ?

   Ans) Toh global-scope ke pollution ke problem hoti hai kayi baar toh us global-scope ke jo variables 
        hai ya jo bhi declaration hai toh uske pollution ho hatane ke liye humne IIFE ka use kiya.

*/

console.log("----------------------------------------");

// ---------------------------------------------------------------------------------------------------------

(function chai(){                
    console.log(`DB CONNECTED`);  
})();                           // Yha hume semi-colon(;) ko use karna padega error ko remove karne k liye.                       

(function AurCode(){                
    console.log(`DB CONNECTED TWO`);  
})()

// Output ==> TypeError: (intermediate value)(...) is not a function

/*  Ques) Ab sawal ye hai ki ye same function upr toh chl raha tha, lekin jab hume sath mai
          ek or same type ka function or bna diya toh niche wala function nhi chl rha ?
    
    Ans) Ab ye jo IIF hai toh ye invoke toh ho gya lekin ise ye nhi pta ki context ko roakna
         kaha hai.
         
         Toh aisi situation mai JS mai hume isko end karna padta hai us line ko or end karne
         ke liye hume semi-colon(;) ka use karna hota hai.

         Toh jo Error hai vo code ke liye nhi balki semi-colon ke liye aa rha tha.
     
*/


/*  Output after using semi-colon is....
    
    Output==> DB CONNECTED
              DB CONNECTED TWO
*/


console.log("----------------------------------------");

// ---------------------------------------------------------------------------------------------------------

// Ab manlo hum 2nd funciton ko arrow() function bnate hai toh kya hoga ?
(function chai(){                
    console.log(`DB CONNECTED`);  
})();                            /* Toh es waal code ko end karne ke liye humne explicitly semi-colon (;)                                        
                                    lagaya hai, jo ki directly nhi lgta hai. */
( () => {   
    console.log("Using IIF in Arrow() function");             
    console.log(`DB CONNECTED TWO`);  
})()

/*
   Output ==> DB CONNECTED
              DB CONNECTED TWO
*/

console.log("----------------------------------------");

// ---------------------------------------------------------------------------------------------------------

// Ab hum aisa bhi kar sakte hai ki:

(function chai(){                
    console.log(`DB CONNECTED`);  
})();                           

( (name) => {   // 2) Ab jo "name" hai vo yha kaise aayega ? Toh hum paranthesis() mai name as an argument le lenge.  
    console.log("Passing arguments in IIF Arrow() function");  
    
    // 1) Hum suppose karte hai ki ye jo "console.log" hai ye ek variable bhi expect krta hai. 
    console.log(`DB CONNECTED TWO ${name}`);  
})('ishan')   // 3) An "name" ko pass kaise karenge ? Toh vo hum yha se karenge 

/* 4) Humne jo 3rd point mai "ishan" name pass kiya hai use hum normally jaise pass karte hai vaise bhi
      kar sakte the.

      aise ==> chai("ishan")

      Toh upr waale function mai humne kya kiya ki jo bhi use execute kar rha hai use hume "ishan" as
      parameter de diya


      Output ==> DB CONNECTED
                 Passing arguments in IIF Arrow() function
                 DB CONNECTED TWO ishan     
*/

console.log("----------------------------------------");

// ---------------------------------------------------------------------------------------------------------

// Ab named IIFE konse hote hai or UN-Named IIFE konse ?

(function chai_1(){               // 1) Toh ye Named IIFE hai
    console.log("Named IIFE");              
    console.log(`DB CONNECTED`);  
})();                             /*  3) Or agr hum 2 IIFE ek sath likh rhe hai toh hume yha pr semi-colon(;)
                                         lagane jarori hai. */                 

( (name) => {                     // 2) Or ye Un-Named IIFE hote hai
    console.log("Un-Named IIFE");  
    console.log(`DB CONNECTED TWO ${name}`);  
})('ishan')

