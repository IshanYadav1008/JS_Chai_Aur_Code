/* Memory is of two types :

   1) Stack memory ==> Jitne bhi hmare "Primitive Types" hai waha pr Stack memory use hoti h.

   2) Heap memory  ==> jitne bhi hmare "Non-Primitive" type hai waha pr Heap memory use hoti h.

    Note: Jab bhi stack memory use hoti hai, toh jo bhi variable humne declare kiya hai toh uski 
          hume ek copy milti hai.
          
          or jab bhi memory heap mai define hoti hai toh yaani koi bhi Object yaa kuch bhi heap memory
          mai chla jata hai toh waha se hume milta hai reference original value ka toh jo bhi hum change
          karenge vo original value mai chage hoga.

----------------------------------------------------------------------------------------------------------          
*/

//  Example of Stack

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename

/* "myYoutubename" ko jab hum "anothername" variable mai assign kar rhe hai toh, "anothername" mai 
   "myYoutubename" ki copy jaa rahi hai naa ki uska "reference" isliye jab hum "anothername" ki value
    ko baad mai bhi change krenge toh "myYoutubename" ki value mai koi change nhi hoga. */

console.log("***** Stack *****");
console.log(anothername);

anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);
console.log("-----------------");

// -----------------------------------------------------------------------------------

//  Example of Heap

let userOne = {                  
    email: "user@google.com",
    upi: "user@ybl"
}

/* "userOne" ek Object hai or ye Heap mai chla gya hai. Yaani "userOne" hai toh variable hi jo ki 
   declare toh stack mai hi hua hai lekin iski values Heap mai chli gayi hai or ise apni values ka
   jo ki heap ke ander hai unka reference mil raha hai.  */

let userTwo = userOne    

/* "userTwo" variable bhi stack mai hi declare hua hai lekin ab isme "userOne" ki values assign nhi
    hui hai balki ise bhi heap ke andar jo "userOne" ki values rakhi hui hai unka reference mil raha
    hai. 
 
   "UserTwo" ko bhi "userOne" ki values ka reference mil raha hai toh ab jab hum "userTwo" mai koi
    hi change karenge toh vo change userOne ke liye bhi ho jayega  */

userTwo.email = "hitesh@google.com"

console.log("***** Heap *****");
console.log(userOne.email);
console.log(userTwo.email);


