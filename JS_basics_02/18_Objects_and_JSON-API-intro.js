/* ***************************** "De-Structuring of Objects" ******************************

  Vaise De-Structuring "Arrays" ki bhi hoti hai lekin vo hum baad mai dekhenge or ye bhut hi rare
  conditon mai use hota hai.
*/

const course = {
    coursename         : "JS in Hindi",
    price              : "999",
    courseInstructor   : "ishan"
}

//  Ab hume en values ko use karna hai toh kaise karenge ?

course.courseInstructor /* Ye tarika bhi sahi lekin agr hume isi same line ko ek se jyda baar
                           print karwana hoga toh kya karenge ? es tarike ke se toh hum ise
                           baar-baar repeat karke likha padega same line ko.
                           
                           Lekin ek dosra tarika bhi hai. */

const {courseInstructor} = course
console.log("Output before De-Structure the Object");
console.log(courseInstructor);
// Output ==> ishan

/* Ab agr manlo ki hume ye "courseInstructor" naam kaafi bada lag rha hai toh hum ise
   De-Structure bhi kar sakte hai. */

const { courseInstructor: instructor } = course // Ab ab "courseInstructor" ki jagah "instructor" bolege
console.log("Output After De-Structure the Object");
console.log(instructor); // Ab yha pr hume courseInstructor" ki jagah pr "instructor" ko call karwana hai.
// Output ==> ishan


/* *********************************************** API's ***********************************************
   *********************************************** INTRO *********************************************** */

/* Ab API kuch nhi hai, hmare paas kuch values aati hai backend se toh un values ko kasie hum likhte hai.

   Pehle ye values aati thi "XML" structure mai toh vo bhut hi complex hota tha. Lekin ab hmare paas values
   mostly aati hai "JSON" mai.

   Ab JSON kaisa dikta hai toh JSON bhut hi easy hai ?

   {} ==> Toh ye hmara JSON hai, haan ye Object hi hai. Lekin filhal iska koi naam nhi hai. 

   Ab hum ismei kuch values lete hai.
  */

  //  {
  //   name       : "ishan",
  //   coursename : "JS in Hindi"
  //   price      :"free"
  //  }

  /* Ab aisa likhne par hmre paas error aa rhe reh hai kyuki ye bol rha hai ki aise toh nhi likha jata
     kyuki ye Object nhi hai, Object ka toh kuch naam hota hai.
     
     Toh sirf agr humne aisa likha hai toh ise almost JSON ki tarha treat kiya jata hai. Lekin agr hume
     proper ek JSON ka Structure chyiae toh phir hum isme "Key" bhi string hoti hai or uski "Value" bhi
     ek string hoti hai. */

     {
      "name"       : "ishan",
      "coursename" : "JS in Hindi"
      "price "     :"free"
     }

    /*  Ab ye yha par abhi bhi error show kar rha hai, lekin ye bilkul sahi hai.
        Yha apr humne ise bs apne smjne ke liye likha hai ki kaise hota hai. Ye
        ekdum perfect syntax hai. */

  // ---------------------------------------------------------------------------------------------

    /* 
      Ab hum dekhenge hai ki actually mai JSON se jab API call hoti hai toh hota kya hai ?
      or milta kaisa hai ? 
       
      Toh Sir hume ek URL suggest kar rhe hai.

      URL: https://api.github.com/users/hiteshchoudhary ==> GoTo this URL

      Toh es URL mai hum dekh sakte hai ki same response aaya hai hmare paas ki,
      Ek Object hai jiska koi naam nahi hai or "Keys" or "Values" dono strings mai
      hai bs number direct aa sakt hai bina string ke or "True/False" bhi direct aate
      hai bina string ke.

      Toh isi tarah se hmare paas API's call aati hai. 
       
      Toh karna kya hai ? Hume sikhna hai ki APi's ke andar yaa JavaScript ke andar 
      "fetch()" method kaise use kar sakte hai. "fetch()" method se hum ye 
      wala URL "https://api.github.com/users/hiteshchoudhary" call karenge toh 
      "response" mai hume ye wala data mil jayega. Toh es tarah se hume api's mai
      value milti hai.

      AB kyuki hume "Object" smj aata hai toh hum es data ko convert kar lenge "Object" ke
      andar or fir isme se ek-ek value nikal lenge toh bs itna hi kaam hai api's ka.

      */

    // ---------------------------------------------------------------------------------------------


    /* Ab kayi baar hume API's Array ke format mai bhi milti hai. Toh array ke format mai jab
       milti hai toh us array ke andar kaafi es tarah ke "Objects" hote hai.
    */

       [      // Toh Ye ek array hai.
        {},   // or es array ke andar ye {} kayi saare objects hai
        {},
        {}
       ]

    /* Toh es time pr jo data hai, jo humne sikha hai abhi tak ki kaise hum Arrays mai loop
       laga sakte hai or uske baad objects ke andar kaise ek-ek values ko le sakte hai, toh
       ye sab hum aage sikhenge. */

/* GoTo Goolge ==> TYPE ==> randomuser me api ==> open the first link (https://randomuser.me/)
   
   ==> Results ==> Copy code (Ye code ek sample response hai) ==> Ab es response ko copy krke

   online JSON formator mai paste kar denge ==> jsonformatter.org ==> paste the api ==> we will

   error in line no. 13 ==> remove comma from this line ==> "name": "Valwood Pkwy", ==>
   
   "name": "Valwood Pkwy" ==> click ==> Format/Beautify


   Now Goto Right Side result Page ==> Navbar ==> dropdown ==> click over code ==> choose Tree

   Ab humne tree mai convert kar diya hai toh ab hume samaj aane laag hai ki accha, hmare paas
   jo response aa rha hai usme 2-Objects mil rhe hai.

   1) 1st "result [1]" hai      ==> Ab hume results mai se kuch chyiae toh ye bata rha hai ki ye
                                    array hai, toh hum array ki tarah ise handle karenge, fir array 
                                    ki jo 1st value hai vo object hai or iske andar further or options
                                    hai or hum baad mai en values ko bhi access karna sikhenge.
   2) or "second info {4}" hai
   
   Important ==> Toh jarori nhi hai ki jab bhi hum bole ki API hai toh uska mblb ye nhi hai ki hume 
                 isi tarah se "Object"  hi milega. Usually milta hai

                  {
                   "name"       : "ishan",
                   "coursename" : "JS in Hindi"
                   "price "     :"free"
                  }

                  Lekin ho sakta hai ki hume es tarah ka "Array" mile
                  
                   [     
                    {},   
                    {},
                    {}
                   ]


                   Toh isliye humne itna time spend kara hai datatypes ko smjne ke liye.

                   JSON jo hai vo simply "JavaScript Object Notation" hai. 

*/