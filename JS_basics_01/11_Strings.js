// 1) Below is the 1st way of declaring the String

const name = "Ishan"
const repoCount = 50

// Below is the Outdated Syntax of Printing the String and not recommanded
console.log("This is the old way of printing the variable values");
console.log(name + repoCount + " Value"); // Output ==> Ishan50 Value                   
console.log("---------------------------");

/* Now, this below Syntax is the Latest way of printing the String Values. So for writing
   the new syntax we will use backticks(``) and the befifite of using backticks is 
   "String Interpulation". Matlab ki hum banate hai "placeholders ( {} )", yaani hmare paas
   jo bhi variable hai use hum directly en (placeholder ==> {}) mai inject kar sakte hai.
*/

console.log("And this is the new way of printing the value of variables");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Above line output is ==> Hello my name is Ishan and my repo count is 50
console.log("---------------------------");

// -------------------------------------------------------------------------------------------------

// 2) Now below is the 2nd way of declaring the String

    const gameName = new String('ishanhc')
    console.log(gameName); 
//  Output ==> [String: 'ishanhc']

/* Now goto Google ==> right click ==> open inspect ==> console ==> and then paste the above line of code 
   by using these keys ==> ctrl + shift + v ==> const gameName = new String('ishanhc')  

   Then write gameName ==> enter ==> then open ==> String {'ishanhc'}
    
   1. Hume hmari es "ishanhc" string ke "Key-Value" pairs dekhai denge. Ye koi "Array" nhi hai.
      Jaise :- 0 : "i" ==> Zero iski key hai or value iski "i" hai

   2. length: 7 ==> Hume yha length property bhi milti hai


   3. [[Prototype]] ==> or es prototype ko open karne par hume kayi saare methods milte hai
*/

/* 1. Ab hume pata hai ki "key-value" pairs hai, toh hum ab "gameName" ki koi si bhi Key or Value
      ko access kar sakte hai  
  
      Yha hum "gameName" ki zeroth key access kar rhe hai */

      console.log(gameName[0]);  // Output ==> i
      console.log(`The value of Zeroth key if ${gameName[0]}`);
      console.log("---------------------------");

/* 
    3 .Humne jo Prototype ([[Prototype]]) dekha tha use bhi hum access kar sakte hai
*/
      console.log(gameName.__proto__)
      console.log("---------------------------");
      
      /* Output ==> {} (iska mtlb hume ye object {} mil gya), filhal hume ye object empty mila hai
         lekin actually mai ye object empty nhi hai iske andar bhut saari values hai, jinhe hum
         inspect karke console par jaa ke check kar sakte hai. or iske andar jitne bhi methods hai
         unhe bhi hum access kar sakte hai.

      */

/* -------------------------------------------------------------------------------------------------------
   
     Ab hum Prototype ([[Prototype]]) ke kuch methods ko access krenge :
*/
     console.log(gameName.length);                
     // Output ==> 7
     console.log(`Length is ${gameName.length}`); // Another way of printing
     console.log("---------------------------");

//   Prototype ([[Prototype]]) ke andar or bhi jo methods hai unhe hum same tarike se access kar sakte hai.
     console.log(gameName.toUpperCase());     
     // Output ==> ISHANHC
     console.log(`The uppercase is ishanhc is ${gameName.toUpperCase()}`);
     console.log("---------------------------");

//   Ab hume ye dekhna hai ki kis position par konsa character hai, 
     console.log(gameName.charAt(2)); 
     // Output ==> h (yaani 2nd position par "h" hai, index wise)
     console.log(`The character on position 2 is ${gameName.charAt(2)}`);
     console.log("---------------------------");

//   Ab hume kisi bhi character ki position pata karna hai.
     console.log(gameName.indexOf('n')); 
     // Output ==> 4 (ishan mai "n" 4th position par hai, according to index wise)
     console.log(`The position of 'n' char is ${gameName.indexOf('n')}`);
     console.log("---------------------------");

// Ab hum String mai se Sub-String print karwana hai :
   const newString = gameName.substring(0,4)  // 0 is a start number and 4 is an end number
   console.log(newString)   // Output ==> isha (isme last 4th index ki value include nhi hoti hai)
   console.log("---------------------------");

// Slice() method mai hum -ve values bhi de sakte hai
   const anotherString = gameName.slice(-8, 4)
   console.log(anotherString);    /* Output ==> isha --> -8 -7 -6 -5 -4 -3 -2- 1 0 1 2 3 4
                                                                                 i s h a n  */
   console.log("---------------------------");                                                                              

/* trim() method is used to remove the extra space (Starting or Ending) which is given by user unknowingly
   or forcefully whatever. */
   const newStringOne = "  ishan     "
   console.log(newStringOne);                  // Output ==>    ishan   (Print with extra space)
   console.log(newStringOne.trim());           // Output ==> ishan (Extra starting and ending space will be removed)
   console.log("---------------------------");

// replace() method ==> isme hum 2 values denge ki "kya replace karna hai" or "kisse karna hai"
   const url = "https:/ishan.com/ishan%20yadav"

// Ab hume upr diye gye url mai "%20" ko dash "-" se replace karna hai.
   console.log(url.replace('%20', '-'));
   // Output ==> https:/ishan.com/ishan-yadav

// Ab hume ye pata karna hai ki string jaise "ishan" url mai hai yaa nahi
   console.log(url.includes('ishan')); 
   // Output ==> true
   console.log(url.includes('Ahir'));
   // Output ==> false
   console.log("---------------------------");

// -----------------------------------------------------------------------------------------------

const gameName_1 = new String('ishan-hc-yadav')

// Ab hum ye chahte hai ki upr jo string hai vo alg-alg parts mai divide ho jaaye based on dash(-)

console.log(gameName_1.split('-')) 
// Output ==> [ 'ishan', 'hc', 'yadav' ] (Toh ye ek Array mai split ho gaya jisme 3-strings hai)

     


   
   
 


