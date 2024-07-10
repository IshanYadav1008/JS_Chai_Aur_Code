/* "arrow" function ko smjne ke liye "THIS" keyword samjna padega or this ko smjne ke liye hume wapus
   se object mai jaana padega 

   Toh ab hum arrow functions ko detail mai jante hai ki, arrow function kaise work karta hai.
*/

/* *************************************** this keyword ****************************************** 

 THIS keyword jo hai vo current context ke baare mai batata hai yaani current conxt ko refer karta hai. 

*/

/* Ab manlo ki hum apni website pr ek "user" ko register kar rhe hai toh uske liye hum ek "object"
   bna rhe hai. */ 

   const user = {
    username: "ishan", // Ab us user ka kuch name hoga
    price   : 999,      // AB es user ko apni website pr register karne ke liye hum kuch rupee bhi le rhe hai

    /* Ab hum use bol rhe hai ki, aap "login" bhi kariye or login krte time hum ek method bhi run kr rhe hai,
       jiske andar uska naam hai welcome, toh hum use "welcome message" de rhe hai login krte time or ye
       welcome message ek function hona chyiae.
    */

    welcomeMessage: function(){ // toh ye function humne bna diya es tarah se

    /* Ab hum chahte hai ki jo bhi user es function ke andar aaye use hi hum ye message pass kre.
    
       Kyuki upr jo username hai "ishan" vo change bhi ho sakta ha, ho sakta hai "user" object ko
       koi apne kaam mai le or uska username change karde. toh phir function ke andar ka username
       bhi wahi changes username ho jana chyiae.  
    */

    /* Ab maanlo ki hume es console mai upr waale username ko refer karna hai toh hum direct aise
      "${username}" refer nhi kar sakte. Hume jab bhi "current context" ko refer karna hai, 
      
       abhi hmara "current context" kya hai ? "User" object ke curly braces ke andar jitna bhi hai
       vo hmara current context hai.

       Toh jab bhi hum current context ko refer karna ho, jaise chaahe "username" ko "price" ko toh
       uske sath hum lagate hai "this" keyword. Toh ye this current context banata hai.
          
    */
      console.log(`${this.username}, welcome to website`);

    /*
      Toh chlo yha pr toh hume smj aa gya ki "this" ka mtlb hai current context. Yaani ki es(Object ke)
      scope ke andar jitne bhi varibles hai unhe access karne ke liye hum this laga denge
    */
    
    }

   }
    this
    /* Toh ab sawal ye hai ki ? Agr hum yha pr "this" lagate hai toh yha par bhi toh kuch current context
       hoga. Toh yha par vo current context hai kya ? toh vo hum baad mai smjhenge. 
    */ 

// Toh ab hum es program ko run krke dekhte hai
console.log("Output of this.username is...");
user.welcomeMessage()   
// Output ==> ishan, welcome to website

console.log("--------------------------------------");

// Ab maanlo ki agr koi Object ke username ki value change kar deta toh phir kya hoga ?
user.username = "sam"
console.log("Output of after changing object username is...");
user.welcomeMessage()
// Output ==> sam, welcome to website

/* Ab ye value "sam" kaise changed ho paayi ? kyuki humne "welcomeMessage" function ke andar value
   hardcode nhi kari thi. Humne kaha tha ki jo bhi current context hai or us curretn context ke andar 
   jo bhi username ki value hai usko print karwa do.
   
   user.welcomeMessage() ==> abhi jo current context the vo yha tak toh same tha.

   user.username = "sam" ==> Yha par humne context change kar diya or context ka mtlb hai simple "values"
                             uske andar hmre jo-jo variables hai vo kya hold akr rhe hai, toh vo context
                             humne cange kar diya or username change karke "sam" kar diya. toh vo context 
                             ab sam ho gya, ab hum sam ki baat kar rhe baat kre rhe hai. context mtlb kiske
                             baare mai baat ho rhi hai.

*/

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------\

const user_1 = {
    username: "ishan", 
    price   : 999,  

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`);
        console.log(this); // Ab hum yha only "this" ko print karke dekhte hai ki kya output aata hai ?
    }

}

console.log("Output of current context values");
user_1.welcomeMessage() 

user_1.username = "sam"
console.log("Output of changed current context values");
user_1.welcomeMessage()

/* Output ==> 

ishan, welcome to website
{                            ==> Toh ye hai 1st current context jo ki hume "this" ne btaya
  username: 'ishan',         ==> Or es current context mai ye saari values hai.
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

sam, welcome to website     ==> fir humne current context change kr diya "sam"
{                           ==> Ab ye hai 2nd current context jo ki ab change ho gya hai.
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

IMPOPRTANT ==> "this" current context ki baat karta hai.
*/

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------\

const user_2 = {
    username: "ishan", 
    price   : 999,  

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

console.log(this); 
/* Output ==> {}  (empty current context)
    
  Ab current context hmare paas kya hai ? empty.
  
  kykui hum Node environment ke andar hai. Jab hum node environment ke andar hai toh hmara jo
  "this" hai vo refer kar rha hai ek empty object ({}) ko. kyuki abhi global-object ke andar
  koi context hi nhi hai isliye empty de rha hai.
*/

/* ******************************** MOST IMPORTANT *********************************
 
#   Goto Google ==> right click => inspect ==> console ==> type ==> console.log(this) ==> enter 

    ==> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

    Toh yha par hume "Window" dekhai de rha hai es ==> console.log(this) line ko run karne par

#   Lekin jab humne node environment mai ahi toh hume empry paranthesis ({}) dekhai de rhe hai.

    Toh ye sab aisa aa kyu raha hai ?

    Answer) Pehle ke time pe JS ko execute karne ka ek hi tarika tha browser ke ander. Toh jo engine 
            hai, jo JS ko execute karta tha vo engine simply ek hi jagah paya jata tha browser ke 
            andar.

            Abhi humne us engine ko nikala or phir usko alg-alg naam diye, kisi ne usko "Node" naam'
            diya, kisi ne usko "Deno" naam diya, kisi ne usko "Bun" naam diya toh ab hmare paas engine
            standalone hai.

            Toh brower ke andar jab bhi engine run hota hai toh sbse jyda jo "Global-Object" hai vo 
            "Window" Object hai. Toh browser ke andar jo global-object hai vo hai window object or 
            tabhi toh hum window ke saare events capture kar paate hai jaise "click" ho gya, "event"
            ho gya etc. jitne bhi sab hai vo hum DOM mai kaam mai lenge hi.
*/

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------\

function chai(){
    console.log(this);
}
chai()

/* Output ==> 

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}


Abhi humne code run kiya toh hmre paas bhut saari values aayi hai. Toh jab humne "this" ko
function ke bahar print karwaya tha tab toh theak hai lekin jb hum "this" ko function ke andar
print karwate hai Node environment ke andar toh hmre paas bhut saari values aa jaati hai as an
output.

Iska mtlb this ke andar kuch toh rakha hua hai or use hum access bhi kar sakte hai

*/

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------\

// Ab hum aisa karte hai :

function chai_1(){
  let username = "ishan"
  console.log(this.username); 
}
console.log("Output of chai_1() is");
chai_1()
/* Output ==> undefined

   Toh ye jo hmara context hai toh ye actually mai "Objects" ke andar hi kaam kar rha hai
   es tarah se functions ke andar hum "this" ko use nhi kar paa rhe hai.

*/

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------\

/* ****************************************** Arrow Function ******************************************

Ab hum dekhenge ki or kaise hum "functions()" ko declare kar skte hai "arrow()" functions ke through  */

const chai_2 = function(){
  let username = "ishan"
  console.log(this.username);
}
console.log("Output of chai_2() is");
chai_2()
// Output ==> undefined (Hum ye kya (this.username) ki baat kr rhe hai usko nhi pta.)

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------

// Ab "Arrow()" function banane ke liye hume kya krna hai ki :-

const chai_3 = () => {         // Hume arrow function banane ke liye isme bs "function" word ko remove karna hai
  let username = "ishan"       // or paranthesis "()" ke  baad arrow "=>" laga dena hai.

  console.log(this.username);  /* Ab interesting baat ye hai ki kya hum "arrow()" function ke andar es tarah se
                                  ye cheezen le sakte hai. */ 
}
console.log("Output of arrow function chai_3() is");
chai_3()
/*
Output of arrow function chai_3() is
undefined 
*/

console.log("--------------------------------------");

// -----------------------------------------------------------------------------------------------------------

const chai_4 = () => {         
  let username = "ishan"       

  console.log(this);  /* Ab agr hum yha par sirf "this" ko use karke dekhte hai toh kya hota hai ? */ 
}
console.log("Output of printing only 'this' in chai_4() is");
chai_4()
// Output ==> {}

console.log("--------------------------------------");

// ---------------------------------------------------------------------------------------------------------


// ===========*****========== Ab hum sirf "Arrow()" functions par baat karenge ===========*****===========

/* () = {} ---> Ye ho gya hmara "arrow()" function. An hum es arrow function ko ek variable ke andar bhi
                hold kar sakte hai. 
*/

const addTwo = (num1, num2) => {  /* humne hmre arrow() function ko "addTwo" ke andar hold akr liya hai or
                                     humne isme 2-Parameters pass kar diye. */
  return num1 + num2
}
console.log("Output of adding two numbers by using array function is...")
console.log(addTwo(3, 4))
/* Output ==> Output of adding two numbers by using array function is...
              7
   
   Ab ye ho gya hmara basic arrow function.
*/