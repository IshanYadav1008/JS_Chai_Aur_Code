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

const emptyObj = {} // Ye humne ek empty object le liya

if (Object.keys(emptyObj).length ===0) {    /* es tarah --> "Object.keys()" se hmre paas Object ka ek Array 
                                               bn kar aa jata. Or jo array ban kar aata hai vo aata hai 
                                               "keys" kaa.  

                                               (Object.keys(emptyObj)) --> Ye poora ka poora hume return karega
                                               ek array.
                                               
                                               (Object.keys(emptyObj).length ===0) ---> Toh isse hume pta lag
                                               jayega ki hmara object empty hai yaa nahi hai.
                                            */
    console.log("Checking Object is empty or not");
    console.log("Object is empty");   
}
/* Output ==> Checking Object is empty or not
              Object is empty 
*/

console.log("----------------------------------------");

// --------------------------------------------------------------------------------------------

/* GoTo Google ==> right click ==> inspect ==> console 


#  Write this line of code  --> false == 0   Yaha hum "false" ko "zero" se compair kar rhe hai.
   And then Enter           --> enter
   Output                   --> true

   Ab jab humne "false" ko "0"se compair kiya toh "true" aaya. Toh ye equality ka comparision hota
   hai.

#  Write this line of code  --> false == ''   Yaha hum "false" ko "empty string" se compair kar rhe hai.
   And then Enter           --> enter
   Output                   --> true
   
   Ab jab humne "false" ko 'empty string' se compair krenge toh "true" aayega.

#  Write this line of code  --> 0 == ''   Yaha hum zero ko "empty string" se compair kar rhe hai.
   And then Enter           --> enter
   Output                   --> true
   
   Ab jab humne zero ko 'empty string' se compair krenge toh "true" aayega.

*/

// --------------------------------------------------------------------------------------------

/* ************************** Nullish Coalescing Operator (??) ********************************

   Yaha hume saara ka saara 2 hi keyword ke upr dekhna hai "null" or "undefined". Saari kahani 
   inhi 2 operators ke upr tiki hoti hai.

   Ab ye operator hota kya hai or karta kya hai ? Ye hum smjte hai.
*/

let val1;
val1 = 5 ?? 10 // Ab "val1" variable mai konsi value assign hogi ? 5 yaa 10
console.log("Output of val1 is...");
console.log(val1);

/* Output ==> Output of val1 is...
              5

Ab jab first value means "5" hi "val1" mai jaani thi toh phir humne ye "??" operator kyu lagaya ?

Kayi baar kya hota hai jab hum DataBase se call krenge, yaa specially kuch Firebase wagarah ka use
karenge toh kya hota hai ki hume directly response nhi milta hai.

Hume 2 values milti hai, toh chances hai ki ho sakta hai ki hmre paas "Null" response aa jaaye, yaa
phir hmre paas response aaye hi naa "undefined" aa jaaye. Toh es case mai hmra poora kaa poora code
structure pareshan ho sakta hai.

# Toh aise cases ke liye specially ye bnaya gya hai ki values ko hume treat karna hai ki:

1) Accha agr "null" ho toh uske andar "null" assign karlo, jisse ki hum us hisab se case ko adjust 
   karle.

2) "undefined" ho toh es hisab se case ko hum handle kare.

3) Yaa koi "value" aa rhi ho toh us value ko hum assign karle.

Toh us special case ke liye hum smjte hai ki value kaise assign hongi.
 
*/

console.log("----------------------------------------");

let val2;
val2 = null ?? 10 // Ab es case mai konsi value assign hogi ? null yaa 10
console.log("Output of val2 is...");
console.log(val2);

/* Output ==> Output of val2 is...
              10

Toh "val2" mai assign ho gya 10.

IMPORTANT NOTE: Toh ye jo "Nullish Coalescing Operator (??)" hai ye basically kaam kya karta hai ki
                agr "null" value aayi hai toh uska safety check karde. kyuki "null" ke basis pe ho 
                sakta hai kuch run naa kare yaa kuch error aa jaaye. 

                Toh badi carefully ye naya operator (??) design kiya gya hai ki agr koi value hai toh
                use assign kardo yaa agr kuch nhi hai toh "null" assign kardo.


val2 = null ?? 10 ==> Abhi yha pr hum 10 le rhe hai, lekin actual mai yha par 10 nhi hoga, Hum yha pr
                      ek complex function lga dete hai or us function ko koi database call kar rha hai
                      toh waha se value aa rhi hai. or agr value aa rhi hai toh theak hai varna "null"
                      assign kardo taaki us hisaab se hum aage ki situation ko handle karle. 
*/

console.log("----------------------------------------");

let val3;
val3 = undefined ?? 15 // Ab es case mai konsi value assign hogi ? null yaa 15
console.log("Output of val3 is...");
console.log(val3);

/* Output ==> Output of val3 is...
              15

***Important*** --> Ye jo "Nullish Coalescing Operator (??)" hai toh ye sirf "null"
                    or "undefined" ke liye bna hai
*/

console.log("----------------------------------------");

let val4;
val4 = null ?? 10 ?? 15            // Ab es case mai konsi value assign hogi ? null, 10 yaa phir 15
console.log("Output of val4 is...");
console.log(val4);

/* Output ==> Output of val4 is...
              10

Ab es case mai kya hoga ki jo "null" ke baad jo bhi first value ise milegi ye use print kar dega.
Yaani vo value "val4" mai assign ho jayegi.
*/

console.log("----------------------------------------");

// --------------------------------------------------------------------------------------------

/* ********************** Turnary Operator (condition ? true : false) ****************************** */

const iceTeaPrice = 100

console.log("Output of Turnary Operator");
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80"); 

/* Output ==> Output of Turnary Operator
              more than 80 


Note: "Nullish Coalescing Operator (??)" or "Turnary Operator(?:)" dono bilkul alg-alg hai.

*/