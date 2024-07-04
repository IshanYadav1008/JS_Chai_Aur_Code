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

// ----------------------------------------------------------------------------------------------------------------------

const tinderUser_2 = {}

// Ab hum es object mai kuch values add karenge. Like "id", "name" and "isLoggedIn".
tinderUser_2.id         = "123abc"
tinderUser_2.name       = "Sammy"
tinderUser_2.isLoggedIn = false

console.log(tinderUser_2);
// Output ==> { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log("--------------------------");

// ----------------------------------------------------------------------------------------------------------------------

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

