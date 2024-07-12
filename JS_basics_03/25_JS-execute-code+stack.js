/* Es lecture mai hum dekhenge ki Code kaise execute hota hai, Jo call stack hote hai vo kaise
   execute hote hai. 
   
   Abhi hmare 1st topic ka naam hai "Execution Context". Two parts mai divide kiya jata hai ise:
   
1)  yaani ki tarah se jo poora code hota hai use kaise execute kiya jata hai.

2)  Or ek hota hai calls yaani call stack, mtlb hmare paas ek memory hai or us memory mai kaise
    functions jayenge ? kaise execute honge or kaise usse bahar aayenge ?

    Toh isko pta karne ki liye hum direct browser mai dekhenge: ki kaise hum direct browser ke 
    andar apni JS-files ko add kar sakte hai or wahi pe visualize karke dekh sakte hai ki kaise
    "call stack" wagarah use ho raha hai.
*/

// -----------------------------------------------------------------------------------------------

// ***************************** JavaScript Execution Context ************************************

/* Ques) Ab ye "JavaScript Execution Context" kya hota hai ?

    Ans) JS mai "Execution Context" ka mtlb ye hai ki humne jo bhi file bnai hai JS mai toh usko 
         JS run kaise karegi yaa usko execute kaise kregi.

         Ab file ko run karne ke liye JS kya karti hai hmre Programs ko 2-Phase mai run karti hai.
         
    Ab jab bhi JS ko hum koi bhi code dete hai toh, jaise manlo hmne JS mai koi code likha or hmre
    paas kuch code files hai jo bhi humne JS ko di :

    1)  Toh sbse pehle jo cheez bnti hai vo hoti hai "Global Execution Context". or jaha par bhi
        ye GEC banega toh isko es "this" variable dwara refer kiya jayega. Yaani ki es "this" 
        variable mai es "GEC" ko rekh diya jata hai.

        Ab GEC : Browser ka thoda sa alg hota hai, Node.JS environment ka bhi alag hota hai, 
                 Bun ka or Deno jo bhi es tarah ke environments hai toh in sbka "Execution
                 context" alg-alg hota hai.
                
    *   Ab browser ka GEC thoda important hota hai or iske andar "this" ki value "window" object 
        aati hai.

        Toh Global EC toh hoga hi hoga, isme ab value hai yaa nhi vo ek alg baat hai.

        JS-Code ==> Global Execution Context
*/

/*  Ab ye jo hai, toh ye poora ek thread ke andar execute hota hai. Kis tarah se single thread pr 
    work karte hai vo hum aage dekhenge.

    Imp*** JavaScript jo hai vo "Single Threaded" hai. Iske andar har cheez ek process hoti hai.

*/

/* Ab "Execution Context" kya hote hai ? vo hum smjte hai.

   Types of Execution Context:

   1) Global Execution Context

   2) Function Execution Context

   3) Eval Execution Context ==> Ye Mongoose mai use hota hai or ye  apne aap mai ek property hota
                                 hai "Global Object" ki. Yaani ek tarah se global hi hota hai.
*/

// ################################ Execution Of JS-Code #######################################

/* Ab JS ka code execute kaise hota hai ? vo dekhte hai:

   JS-Code ==> Maanlo ye hmara JS-Code hai toh ye actually mai 2-phases mai "run" hoga:

   1) Toh 1st phase hai "Memory Creation Phase" yaa phir "Memory Phase" bhi bolte hai.

      JS-Code ==> Memory Creation Phase

   2) Or 2nd hota hai "Execution Phase".

   Ab en dono mai difference kya hota hai ?

============================================================================================================

*** 1) Memory Allocation Phase
   
    "Memory Creation Phase" mai jo bhi humne "Vaiables" declare kiya hai toh unke liye "Memory allocate" 
    hoti hai. Unka execution nhi kiya jata hai. jo bhi humne likhe hai jaise Mathematical functions()
    like : Addition, Subtraction etc. aisa kuch nhi hota hai. Toh ye saara kaam execution phose mai hoga.
    Yaani es phase mai sirf memory allocate hoti hai.

    Ab isme values kaise rakhi jaati hai yaa kya define kari jaati hai vo hum example se smjhenge.

*/

   let val1 = 10
   let val2 = 5

   function addNum(num1, num2){
    let total = num1 + num2
    return total
   }
   let result1 = addNum(val1, val2)
   let result2 = addNum(10, 2)

   /* Toh ab humara code run kaise hoga vo hum smjhenge:
   
   1) Global-Execution / Global-Environment ==> Toh sbse hmare paas aata hai global-execution or ise hum
                                                global-environment bhi bolte hai. Toh hume koi saa bhi 
                                                code run karna ho vo bada ho yaa chota ho toh vo global-
                                                execution se run hota hai. or ise sbse pehle allocate kiya
                                                jata hai "this" ke andar. So ye toh hona hi hona hai, kuch 
                                                bhi karo ye toh hoga hi hoga. Toh ye ho gya hmara basic 
                                                global execution context.
    Global-Execution ==> this
        
   2) Memory Creation Phase ==> Ab isme kya hota hai ki saare jitne bhi variables hai unhe ekhatta(collect) 
                                kiya jata hai or un sabko ko rakha jata hai apne paas mai.

    a)  Toh memory phase mai sbse pehle kya hoga ? manlo hmre paas ek variable hai jiska naam hai
        "val1" toh es val1 mai kya jayega "undefined". Haan g toh sbse pehle yhi hota hai "memory
        creation phase" ke andar ki sbse pehle sabhi "variables" ke naam liye jaate hai or unke 
        andar rakha jata hai "undefined" ko.
  
        val1 = undefined

        let val1 = 10

    b)  Isi tarah se hmre paas code mai ek or varibale hai "val2" naam se toh iske andar bhi kya
        rakha jayega ? undefined.

        val2 = undefined

        let val2 = 5

    c) Ab hmre upr program ki 3rd line mai kya likha hai ?

       function addNum(num1, num2)

       Toh es line mai hmare paas "addNum" aaya, ab isme humne koi value toh assign ki nhi hai,
       toh es "addNum" mai jayegi "definition", isme undefined nhi jayega. Kyuki Abhi kuch
       execution toh ho hi nhi raha hai hume sirf function declare hi toh kiya hai or function
       ko declare karne ka mtlb use execute karna toh hota nhi hai. 

       addNum = definition ==> toh "addNum" mai cli jayegi function ki poori definition

    d) Ab hmre program ki next jo lines hai unmei bhi "undefined" chla jayega :

       result1 = undefined
       result2 = undefined

       toh ye "result1" or "result2" mai undefined chla jayega.

    Toh ye "Memory Creation Phase / Memory Allocation Phase" ho gya hai toh bolenge program 
    execution ka 1st cycle or ye 1st cycle hoga hi hoga hmesha.

   */

// ==================================================================================================

/* Toh ab cycle-2 kya hoga ? Execution Phase

*** 3) Execution Phase

   Ab es phase mai kya hoga ? 
   
   a) val1 = 10 ------> "val1" mai "10" value assign ho jayegi
   b) val2 = 5  ------> "val2" mai "5" value assign ho jayegi

   c) addNum ---------> Ab es line mai kya hoga ? kuch nhi hoga kyuki yha pr execution krne k
                        liye kuch hai hi nhi. kyuki humne yah pr definition ko hold karke rakh
                        diya hai toh execution abhi hoga nhi.

   d) let result1 = addNum(val1, val2) ----> Ab hum es line mai aate hai, toh "result1" mai kya jayega ?
                                             "result1" mai toh jaana tha "addNum" lekin addNum toh 
                                             function hai.

      addNum(num1, num2) --> Toh ab hum aa jayenge es "addNum" function pe. Toh ye addNum apna ek alg 
                             execution context banata hai.

                             Ab ek or executional context ban kar tayiar ho gya hai yaani hum ise ek box
                             ki tarah maan sakte hai. Or Es executional context mai hmare liye banega 
                             "new variable environment" or ek "Execution Thread".

      --------------------------------------------------------------------------------------------------                    
      addNew ==> Ek " Global executional context" bana ==> "new variable environment + execution thread"
      --------------------------------------------------------------------------------------------------

      NOTE: Toh jitni baar bhi functions execute hote hai toh utni baar ek naya box create hota hai, 
            jise bolte hai "New Executional Context". or es context ke andar kya hota hai ?
            Variables ka ek alg se environment ka poora "sandbox" hmre liye bnaya jata hai or ek
            execution thread bhi hmre liye bnaya jata hai, Jisse saare hmre jitne bhi kaam hai or 
            jitna bhi execution hai vo hona hai.

      Ab yha pr interesting baat kya hai ? Kyuki yha pr ek poora new sandbox hmare liye tayiar ho gya 
      hai toh ab es box ke hone se yha par kya hoga ki vo jo 2 kaam the vo ab wapus se honge.
      
      Ab vo 2 kaam kya the ?

      a) Memory Creation Phase

      b) Execution Phase

      Memory Creation Phase / Memory Phase
      ------------------------------------
 
      val1  = undefined ==> Isme bhi "undefined" jayega
      val2  = undefined ==> or isme bhi
      total = undefined ==> isme bhi 

      Execution Phase / Execution Context
      -----------------------------------

      Ab hm jayenge "execution context" ke andar. Ab jab hum execution context mai jaate hai tab 
      actually mai prcessing hoti hai yaa phir hume bole ki execution hota hai, jo bhi hmare
      mathematical variables hai yaa jo bhi data manipulate karna hai toh vo saara kaam yha 
      execute hota hai.

      Toh execution ke dauraan sbse phle kya hoga ?

      num1  = 10 -----> num1 mai value jayegi 10
      num2  = 5  -----> or num2 mai value jayegi 5
      total = 15 -----> total mai calculate ho kar chli jayegi 15

      Phir jo "total" hai vo apne "parent executional context" par return ho jayega. Vaise hum ise 
      ye bhi bolte hai ki humne ise yaani "total" ko uske "global executional context" mai return 
      ho gya hai.

      Or obvious hai ki koi function execute hone ke baad kuch "return" kar rha hai "value" toh vo
      apne "global executional context" mai hi return karega.


      Toh ab itna saara kaam hone ke baad jo upr "Executional Context" bna tha toh vo ab "Delete"
      ho jayega.

      ------------------------------------------------------------------------------------------------------                     
      addNew ==> Ek "Global executional context" bana ==> "new variable environment + execution thread"
            
             ==> ab "Delete" ho jayega
      ------------------------------------------------------------------------------------------------------

      Toh ye jo "Global Executional Context" bna tha toh vo ab delete ho jayega.
 
      result1 = 15 ----> Toh return hone ke baad ab "result1" mai value aa gyi hai "15".


   e) let result2 = addNum(10, 2) 

   Ab es "result2" mai bhi ek function execute ho rha hai, toh phir wapus se same process repeat hogi.
   Same "d" wala point repeat hoga.

   --------------------------------------------------------------------------------------------------                    
   addNew ==> Ek " Global executional context" bana ==> "new variable environment + execution thread"
   --------------------------------------------------------------------------------------------------

   let result2 = addNum(10, 2) ----> Ab hum es line mai aate hai, toh "result1" mai kya jayega ?
                                     "result1" mai toh jaana tha "addNum" lekin addNum toh function
                                     hai.

   let result2 = addNum(10, 2) ---> Toh ab hum aa jayenge es "addNum" function pe. Toh ye addNum apna ek alg 
                                    execution context banata hai toh ab phir se ek naya "global execution
                                    context" ban jayega.

                                    Ab phir se ek naya Global executional context ban kar tayiar ho gya hai 
                                    yaani hum ise ek box ki tarah maan sakte hai. Or Es executional context
                                    mai hmare liye banega "new variable environment" or ek "Execution Thread".

      Ab yha pr interesting baat kya hai ? Kyuki yha pr ek poora new "Sandbox" hmare liye tayiar ho gya 
      hai toh ab es box ke hone se yha par kya hoga ki vo jo 2 kaam the vo ab wapus se honge.
      
      Ab vo 2 kaam kya the ?

      a) Memory Creation Phase

      b) Execution Phase

      Memory Creation Phase / Memory Phase
      ------------------------------------
 
      val1  = undefined ==> Isme bhi "undefined" jayega
      val2  = undefined ==> or isme bhi
      total = undefined ==> isme bhi 

      Execution Phase / Execution Context
      -----------------------------------

      Ab hm jayenge "execution context" ke andar. Ab jab hum execution context mai jaate hai tab 
      actually mai prcessing hoti hai yaa phir hume bole ki execution hota hai, jo bhi hmare
      mathematical variables hai yaa jo bhi data manipulate karna hai toh vo saara kaam yha 
      execute hota hai.

      Toh execution ke dauraan sbse phle kya hoga ?

      num1  = 10 -----> num1 mai value jayegi 10
      num2  = 2  -----> or num2 mai value jayegi 2
      total = 15 -----> total mai calculate ho kar chli jayegi 12

      Phir jo "total" hai vo apne "parent executional context" par return ho jayega. Vaise hum ise 
      ye bhi bolte hai ki humne ise yaani "total" ko uske "global executional context" mai return 
      ho gya hai.

      Or obvious hai ki koi function execute hone ke baad kuch "return" kar rha hai "value" toh vo
      apne "global executional context" mai hi return karega.


      Toh ab itna saara kaam hone ke baad jo upr "Executional Context" bna tha toh vo ab "Delete"
      ho jayega.

      ------------------------------------------------------------------------------------------------------                     
      addNew ==> Ek "Global executional context" bana ==> "new variable environment + execution thread"
            
             ==> ab "Delete" ho jayega
      ------------------------------------------------------------------------------------------------------

      Toh ye jo "Global Executional Context" bna tha toh vo ab delete ho jayega.
 
      result2 = 12 ----> Toh return hone ke baad ab "result2" mai value aa gyi hai "12".
*/

// ------------------------------------------------------------------------------------------------------------

// ************************************* call stack ********************************************


