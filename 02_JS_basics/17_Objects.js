/* Ab hum baat karenge ki hum Object ko Singleton kaise kar sakte hai.
   yaa phir Object ko Constructor ki help kaise declare kar sakte hai.
   
   Hum last lecture mai "Object Literals" ki baat kar chuke hai.
*/

const tinderUser = new Object()  // Ye ek Singleton Object hai, Hum yha empty object declare kar rhe hai.
console.log("Singleton Object");
console.log(tinderUser);
// Output ==> {} (Empty Object)

const tinderUser_1 = {}         // Or Ye ek Non-Singleton Object hai, or Hum yha pr bhi empty object declare kar rhe hai.
console.log("Non-Singleton Object");
console.log(tinderUser_1);
// Output ==> {} (Empty Object)

console.log("--------------------------");

// -------------------------------------------------------------------------------------------------------------

const tinderUser_2 = {}

// Ab hum es object mai kuch values add karenge. Like "id", "name" and "isLoggedIn".
tinderUser_2.id         = "123abc"
tinderUser_2.name       = "Sammy"
tinderUser_2.isLoggedIn = false

console.log(tinderUser_2);
// Output ==> { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log("--------------------------");

// ----------------------------------------------------------------------------------------------------------

// Ab hum "Object" ke andar "Object" declare karenge.

const regularUser = {
   email   : "some@gmail.com",
   fullname: {                    
      userfullname: {                 
         firstname: "ishan",         
         lastname : "yadav"         
      }
   }
}

/* 
   Toh upr hum "regularUser" naam ke object ke andar "fullname" naam ka object declare kar rhe
   hai or "fullname" naam ke object ke andar "userfullname" naam kaa object declare kar rhe hai,
   or aise hum kitni bhi nesting kar sakte hai.

   Ab en "nested objects" ko hum access kaise karenge ? toh vo bhi hum dot(.) notation se hi
   karenge.
*/

console.log("Nested Objects Value");
console.log(regularUser.fullname);
// Output ==> { userfullname: { firstname: 'ishan', lastname: 'yadav' } }

// Agr hume or iski nesting karni hai toh vo bhi hum kar sakte hai.
console.log(regularUser.fullname.userfullname);
// Output ==> { firstname: 'ishan', lastname: 'yadav' }

console.log(regularUser.fullname.userfullname.firstname);
// Output ==> ishan

/* NOTE

Ek yha par "optional chaining" naam ki bhi cheez jaati hai, jaise manlo ki "fullname" exist
nhi karta hai toh kya problem hai toh ye hum aage padenge.

console.log(regularUser.fullname?.userfullname.firstname); ==> Kayi baar hume aisa syntax bhi 
milega, toh ye thoda saa protection kar deta hai jaise maanlo "fullname?" exist hi nhi karta
ho toh? 

Kayi baar jab API se respone aata hai toh hume aisa(fullname?) syntax use karna padta hai, ki
agr ye value hai toh kariye varna hume "if-else" lagane padenge har jagah.
*/

console.log("--------------------------");

// ---------------------------------------------------------------------------------------------

// ******************************** Merging Objects *********************************

/* Ab jaise Arrays ko humne merge kiya tha, combine kiya tha vaise hi hum Objects ko bhi combine karenge */

//            Key Value
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//                    Key Value

const obj3 = { obj1, obj2 } /* Es tarah se agr hum denge toh wahi Array wali problem aayegi ki jaise
                               array ke andar array hota tha vaise hi Object ke andar Object ho jayega. */
console.log("Merging 2-Objects Normally");
console.log(obj3);
/* Output ==>  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
               Ab ye wahi ho gya ki sbse bahar wala curly braces ({}) object hai or uske andar
               "obj1" or "obj2" two objects hai. Toh ye wahi same array wali problem hai. 
               
               Toh es problem se bachne ke liye hum kaise print karwayenge. */

console.log("Merging 2-Objects using assign() method");
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);
// Output ==> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2)  /* Humne yha par empty paranthesis ({}) bhi dete hai toh isse
                                               kya hota hai ki ye ek optional parameter hota hai ise hum de
                                               yaa nhi de but isse dena accha hai kyuki ye jitni bhi values 
                                               hai jaise "obj1" and "obj2" ye combine ho jayengi or guranteed 
                                               hai ki result yhi ({}) aayega. */
console.log(obj5);
// Output ==> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Jaise suppose humre paas or bhi values ho sakti hai.

const obj_1 = {1: "a", 2: "b"}
const obj_2 = {3: "a", 4: "b"}
const obj_3 = {5: "a", 6: "b"}

const obj_4 = Object.assign({}, obj_1, obj_2, obj_3) /* Ye ==> {} hmare paas target hai or ye ==> obj_1, obj_2, obj_3 
                                                        act karenge as a source. Agr hum ise {} nhi denge toh hmari
                                                        saari values obj1 mai jayengi as a target 
                                                      
                                                        Jab hum ek naya object return kar hi rhe hai or vo memory
                                                        mai jaa hi raha hai toh ek empty object ({}) isko dedo or 
                                                        isi ko target manlo or inko (obj_1, obj_2, obj_3) source
                                                        manlo. toh isliye isko --> {} diya jata hai. */
console.log(obj_4);
// Output ==> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/*  
     *** Toh hum "assign" ko bhi kam hi use karenge, hum mostly use karenge "spread --> (...) operator"
         Or ye latest bhi hai or easy bhi hai.
*/

const obj6 = {...obj1, ...obj2}
console.log("Merging Objects using spread(...) operator");
console.log(obj6);
// Output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log("--------------------------");

// --------------------------------------------------------------------------------------------------

// Jab bhi "DATABASE" se values aayengi toh hum ye syntax use karenge.

/* Database the values kuch es tarah se aati hai. 
   
   Jaise suppose karte hai ki hmare paas "Users" aaye hai, toh users jab database se jyadatar hmre paas
   aayenge toh "array of objects" aayega.
*/

const users = [             // Ye hai array
   {                        // Ye array ke andar ek Object ho gya
      id  : 1,              // Ab user ki "id" hmre paas aayi hai "1". 
      emal: "i@gmail.com"   // Or ye user ka email hmre paas aaya hai database se
   },                       // Toh ye hai "array ka object" 

   {                       // Ab ye array ke andar dosra object hai or aise kitne bhi ho sakte hai                 
      id  : 1,              
      emal: "i@gmail.com"   
   },  

]

/* Array ke andar bhut saare objects hai hmare paas toh ab hume array ki value access karni hai
   yaani array ke andar jo objects hai unke andar ki values */

users[1].email  // Hum bol rhe hai ki hume users ki 1st value access karna hai or ye [1] users ka 1st object hai.


/* ***Important***  ==> AB hum yha par ek interesting cheez dekhenge or uske liye hum upe jo humne
                        objects "tinderUser_2" use kiya toh ise print karwayenge. */

console.log("tinderUser_2 Object Result");
console.log(tinderUser_2);
// Output => { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log("tinderUser_2 Object Keys");
console.log(Object.keys(tinderUser_2)); /* Iska mtlb hai ki hume "Object" ki "keys" dedo,
                                           ab konse Object ki keys ? toh "tinderUser_2" object ki.   */ 
                  
/* Output ==> [ 'id', 'name', 'isLoggedIn' ] ==> Ab ye jo Output value hai iska datatype "Array" hai. 
              toh humne saari keys ko liya or unko ek array mai rakh diya toh ab hum chaahe toh inke upr 
              loop laga sakte hai.  */

console.log("tinderUser_2 Object Values");
console.log(Object.values(tinderUser_2));
// Output ==> [ '123abc', 'Sammy', false ]  <==> Toh es tarah hum object ki values bhi nikal sakte hai.

console.log("tinderUser_2 Object Keys-Values output using entries() method");
console.log(Object.entries(tinderUser_2));
/* Output ==> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

              Isme hume array ke an array mila hai or jo har ek Key-Value pair hai
              use array mai bana diya jata hai.
*/


/* Kayi baar kya hoga ki hum Objects ke andar poora loop through kar rhe hai or loop karne ke baad values
   nikla rhe hai. Toh value nikalte time kya hota hai ki kayi baar vo value exist hi nhi karti hai or
   value exist nhi karti hai toh crash hone ke chances hai. Toh kya toh usko manuallu kar sakte hai yaa
   phir usse puch bhi sakte hai ki kya aapke paas ye vaise hai ? */

   console.log("Asking to 'tinderUser_2' object that 'has' tinderUser_2 'isLoggedIn' property");
   console.log(tinderUser_2.hasOwnProperty('isLoggedIn')); /* Toh yha hum "tinderUser_2" se puch rhe hai ki
                                                              kya aapke paas "isLoggedIn" naam ki koi value
                                                              hai kya ? */ 
   // Output ==> true

   console.log("Asking to 'tinderUser_2' object that 'has' tinderUser_2 'isLogged' property");
   console.log(tinderUser_2.hasOwnProperty('isLogged'));
   // Output ==> false