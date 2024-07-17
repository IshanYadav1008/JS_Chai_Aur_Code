const userEmail = "i@ishan.ai"

if (userEmail) {   // Yha condition mai humne sirf "userEmail" likha or value hai means "True"  
    console.log("Passing String in Condition");
    console.log("Got User Email");
}
else
{
    console.log("Don't have user Email");
}
/* Output ==> Passing String in Condition
              Got User Email

   ==> Upr humne "if" ki condition mai sirf "userEmail" likha, lekin ise kisi se bhi match nhi krwaya 
       jaise:

       "userEmail == true" or "userEmail == i@ishan.ai", humne sirf "userEmail" likha tab bhi "if" ki
       condition "true" ho gyi. Yaani value present hai iska mtlb bhi yhi hoga ki "true".

   ==> Maanlo agr hum aise likhte: 
       
       if(true)      --> Toh es case mai bhi hmari condition "true" hi hogi.

       if(userEmail) --> Ab "userEmail" mai value present hai, toh value hai iska mtlb "true".

       Yaani yha ye case hai ki, String mai kuch value hai uska mtlb hai ki vo "True" hai.

*/

console.log("----------------------------------------");

// --------------------------------------------------------------------------------------------

// Ab maanlo ki hum string mai koi value nhi de toh kya aayega ?

const userEmail_1 = ""

if (userEmail_1) {                   // Yha humne sirf "userEmail" likha or value nhi hai means "False"  
    console.log("Got User Email");
}
else
{
    console.log("Passing Empty String in Condition");
    console.log("Don't have user Email");
}

/* Output ==> Passing Empty String in Condition
              Don't have user Email

   Ab yha humne String ko empty chor diya hai, toh iska mtlb hai "False".
   Kyuki yha maan liya gya hai ki "empty string" means false.
*/

console.log("----------------------------------------");

// --------------------------------------------------------------------------------------------

// Ab agr maanlo hum "empty array []" le toh kya hoga ?

const userEmail_2 = []               // Hume array ko kbhi bhi es tarah se use nhi karna chyiae.

if (userEmail_2) {                   // Yha humne sirf "userEmail" likha or value nhi hai means "True"  
    console.log("Passing Empty Array in Condition");
    console.log("Got User Email");
}
else
{
    console.log("Don't have user Email");
}

/* Output ==> Passing Empty Array in Condition
              Got User Email


###################################### Note ###########################################

Jab humne upr (Empty String "") liya tha toh condition ki value aayi "FALSE" lekin jab humne
"Empty Array []" liya toh condition ki value aayi "TRUE".

"empty string" le rhe hai toh "else" block mai jaa rha hai or agr "empty array" le rhe hai toh 
"if" block mai jaa rha hai.

"Empty Array" hai toh humne usko "True" maan liya or agr "Empty String" hai toh usko false maan
liya gaya hai.

==> Ab aisa kyu ? Kya koi rule hai iske liye ?

    Yes, toh iske liye hum padenge "truthy" or "falsy" value.

------------------------------------------------------------------------------------------------

***** Truthy and Falsy values

AB hum dekhte hai ki kon-kon si truthy values hoti hai or kon-kon si falsy values.

============
falsy values 
============
---------------------------------------------------------------------------------
false, 0, -0, BigInt (0n), empty-string(""), null, undefined, NAN
---------------------------------------------------------------------------------

Toh ye sabhi "falsy" values hoti hai or inke alawa sbhi "truthy" values hoti hai.

=============
truthy values
=============
---------------------------------------------------------------------------------
"0" ==> String ke andar zero truthy value hoti hai.

'false'/ "false" ==> Ye bhi truthy value hai kyuki ye string ke andar 
                     hai, empty string nhi hai ye.

" " ==> String ke andar ek "space" bhi truthy value hai.

[]  ==> "Empty Array" bhi ek truthy value hai.

{}  ==> "Empty Object" bhi ek truthy value hai.

function(){} ==> Agr es tarah se agr function declared hai toh ye 
                 bhi ek truthy value hai. Or ise bola jata hai ek 
                "empty funciton".
----------------------------------------------------------------------------------
*/

console.log("----------------------------------------");

// --------------------------------------------------------------------------------------------

// Ab hum dekhenge ki Array ki length ko kaise check karte hai ?  

const userEmail_3 = [] // Hume array ko kbhi bhi es tarah se use nhi karna chyiae.

// Agr maanlo hmre paas array hai toh, array ko check karne ka ek tarika hota hai.

if (userEmail_3.length === 0) { /* Hum es array ki "length property" ko call kar lenge or check krenge ki
                                   ye jo "userEmail_3" array hai, hume pata hona chyiae ki iska datatype
                                   array hai. 
                                   
                                   Toh ye jo "userEmail_3" array hai toh kya iski length zero ke equal hai. */
    
    console.log("Checking the length of Array");
    console.log(userEmail_3.length);
    console.log("Array is Empty");                                    
}
/* Output ==> Checking the length of Array
              0
              Array is Empty
*/

console.log("----------------------------------------");

// --------------------------------------------------------------------------------------------

// Ab "Objects" agr "empty" aa gye toh phir hum kaise check karenge ?