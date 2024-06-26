// ************************* Defining a Number **************************8

const score = 400    /* Yaha JS ne automatically detect kiya hai ki ye jo "score" 
                        hai iska type hai "number" */
console.log("Number Values");
console.log("-------------");                        
console.log(score);
// Output ==> 400

/* Goto Goolge page => right click => inspect => console 
   => paste above line of code (const score = 400)
   
Write this line of code   ==> const score = 400 
Then write this and enter ==> score
Output                    ==> 400

console.log(score) ==> enter
400                <== output

------------------------------------------------------------------------------------------
*/
  
/* Hum exclusively bhi define kar sakte hai ki hume toh "Number" data type hi chyiae */

const balance = new Number(100)
console.log(balance); // Output ==> [Number: 100] --> Iska mtlb hai ki ye jo "100" hai iska type hai "Number"

/* Goto Goolge page => right click => inspect => console => paste below line of code
   
Write this line of code   ==> const balance = new Number(100)
hen write this and enter  ==> console.log(balance);
Output                    ==> Number {100} --> (Toh ye Number ka type hume automatically "Number" bata raha hai)

Now Expand the Number means open the above output "Number {100}" 


Now Expand this line      ==> [[Prototype]]: Number 

Toh prototype the through hume "Numbers" ki jo bhi properties available hai vo hume milti hai.

Toh ab hum inmei se kuch properties ko use krke inka example dekh lete hai.
*/

console.log(balance.toString);            // Output ==> [Function: toString] (mtlb ye "toString" function hai)
console.log(balance.toString());          /* Output ==> 100 (mtlb ab ye "balance" string hai yaani "100" ab 
                                                        string mai convert ho gaya  hai) */
console.log(balance.toString().length);   // Output ==> 3 (mtlb "100" mai 3 characters hai)
console.log(balance.toString());          // Output ==> 100
console.log(balance.toFixed(2));          // Output ==> 100.00 (Mostly used in E-Commerce)
console.log("-------------------------");

// -------------------------------------------------------------------------------------

// Values by using Precision

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));   // Output ==> 23.9 (Doing Avogadro calculations)

const otherNumber_1 = 123.8966
console.log(otherNumber_1.toPrecision(3)); // Output ==> 124  (Doing Avogadro calculations)

const otherNumber_2 = 1123.8966
console.log(otherNumber_2.toPrecision(3)); // Output ==> 1.12e+3 (Value is showing in Exponential form)
console.log(otherNumber_2.toPrecision(4)); // Output ==> 1124
console.log("-------------------------");

// -------------------------------------------------------------------------------------

const hundreds = 1000000
console.log(hundreds.toLocaleString());        // Output ==> 1,000,000 (These commas(,) are applied in an USA standard)
console.log(hundreds.toLocaleString('en-IN')); // Output ==> 10,00,000 (Now value is printing acc. to Indian standard)
console.log("<=============================>");

// ***************************** Defining a Maths Values ********************************

console.log("Maths Library");
console.log("-------------");

// Note : Mathe library JS ke sath bydefault aati hai

console.log(Math);           /* Output ==> Object [Math] {} (Means "Math" apne aap mai ek Object hai, jiske 
                                           andar bhut saari properties hai. )   
                                           
                                           Iski detailed values hume yaha par nahi balki browser console par
                                           easily dikh jayengi yaa mil jayengi.

Goto Goolge page => right click => inspect => console => paste below line of code

Write this line of code   ==> console.log(Math) ==> Press Enter
Output                    ==> Math

Now Expand the "Math" means open the above output "Math", toh kuch values hume directly show ho rahi hai,
jinhe hum dot(.) laga kar use/access kar sakte hai.

*/

console.log(Math.abs(-4)); 
// "abs" means absolute value, Yaani vo value "-ve" mai hogi vo apne aap "+ve" mai convert ho jayegi.

console.log(Math.round(4.6));
// "round" means roundof, Yaani jo bhi values decimal mai hongi u ka roundof ho jayega.

console.log(Math.ceil(4.2));
/* "ceil" means ceiling, ceiling matlab top toh top wala number choose hoga. Agr decimal ke baad waali
   value 1 bhi hui tab bhi yeh uski value ko le kar upar pahucha dega yaani top value bana dega.
*/ 

console.log(Math.floor(4.2));
// "floor" matlb isme ye niche waali value lega, Decimal ke baad ki value nhi leta.

// ------------------------------------------------------------------------------------------------

console.log(Math.min(4, 3, 6, 8)); // Array mai se minimum value pta karne ke liye
// Output ==> 3

console.log(Math.max(4, 3, 6, 8)); // Array mai se maximum value pta karne ke liye
// Output ==> 8

/* -----------------------------------------------------------------------------------------------

*** IMPORTANT ***

"Math" library sabse jyda use kaha hoti hai or hum ise sbse jyda kaha use karenge
 Toh hum ise sabse jyda use karenge "Math.random" pe */

console.log("Using Math.random()");
console.log(Math.random()); 
/* 
Output ==> 0.22565616838650637
Output ==> 0.7429675170763255

Toh jitni baar hum apna code run karenge toh uthni baar iski value change hogi lekin
zero(0) or one(1) ke beech mai.
*/

console.log("Using Math.random() * 10");
console.log(Math.random() * 10 );
/*
Toh 10 se multiply karne par ek digit shift ho jayegi left mai.

Output ==> 2.238848331368799
Output ==> 4.297633913319174
*/

console.log("Using Math.random() * 10 + 1");
console.log(Math.random() * 10 + 1);
/* 
Ab isme "+1" karke humne us case ko remove kar diya jismei zero(0) value aa sakti thi.

Output ==> 7.582997702306783
Output ==> 4.254974263169772
*/

console.log("Using (Math.random() * 10) + 1");
console.log((Math.random() * 10) + 1);

console.log("Using Math.floor(Math.random() * 10) + 1");
console.log(Math.floor(Math.random() * 10) + 1);
// floor ise lowest value par roundup kar dega

// Ab hume manually value chyiae 10 se 20 ke beech mai lekin randomly
const min = 10
const max = 20
console.log("Using Math.floor(Math.random() * (max - min + 1)) + min")
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*
Output ==> 17
Output ==> 13

Toh ab jo values hai vo 10 se 20 ke beech mai aa rhi ahi roundof ho kar.
*/
