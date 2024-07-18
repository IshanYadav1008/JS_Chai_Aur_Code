// *********************************************** for loop **************************************************

/* Structure/Syntax of for loop

for (let index = 0; index < array.length; index++) {  ==> Jaise hi ye curly-braces {} aaye iska mtlb ek block-scope
    const element = array[index];                         hmare paas aaya hai. Means jo bhi "for-loop" ke scope mai 
                                                          declare hoga (for loop ka scope mtlb for ke curly-braces
                                                          ke andar) vo iske bahar kaam mai nhi aayega.
}
*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}
/* Output ==> 0
              1
              2
              3
              4
              5
              6
              7
              8
              9
              10
*/

/* 
console.log(element);

Output ==>  element is not defined (kyuki ye "element" scope ke bahar defined hi nhi hai,
            or agr scope ke bahar defined nhi hai toh phir access bhi nhi hoga or hona 
            bhi nhi chyiae.)
*/

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------------------

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}

/* Output => 1
             2
             3
             4
             5 is best number
             5
             6
             7
             8
             9
             10
*/

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------------------

// ************************************* Nested for-loop **********************************************
console.log("Nesting in for-loop");
console.log("");

for (let i = 0; i <= 5; i++) { /* Yha hum phir se "i" le sakte hai. Ab aisa kyu ? kyuki jo "i" humne upr waale
                                   for-loops mai liye the, toh unka scope usi loop ke saath kthm ho gya. */

    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j < 5; j++) {
        console.log(`Inner loop value ${j} and inner loop value ${i}`); /*  Ab es andar waale "for" mai hmre paas 
                                                                            "i" ka access hai kyuki hum abhi bhi
                                                                            bahar waale "for" ke scope ke andar hi
                                                                            hai, isliye hum "i" ka use kar sakte
                                                                            hai. 
                                                                        */
    }
    console.log("");
}

/* Output ==>   Nesting in for-loop

                Outer loop value: 0
                Inner loop value 0 and inner loop value 0
                Inner loop value 1 and inner loop value 0
                Inner loop value 2 and inner loop value 0
                Inner loop value 3 and inner loop value 0
                Inner loop value 4 and inner loop value 0

                Outer loop value: 1
                Inner loop value 0 and inner loop value 1
                Inner loop value 1 and inner loop value 1
                Inner loop value 2 and inner loop value 1
                Inner loop value 3 and inner loop value 1
                Inner loop value 4 and inner loop value 1

                Outer loop value: 2
                Inner loop value 0 and inner loop value 2
                Inner loop value 1 and inner loop value 2
                Inner loop value 2 and inner loop value 2
                Inner loop value 3 and inner loop value 2
                Inner loop value 4 and inner loop value 2

                Outer loop value: 3
                Inner loop value 0 and inner loop value 3
                Inner loop value 1 and inner loop value 3
                Inner loop value 2 and inner loop value 3
                Inner loop value 3 and inner loop value 3
                Inner loop value 4 and inner loop value 3

                Outer loop value: 4
                Inner loop value 0 and inner loop value 4
                Inner loop value 1 and inner loop value 4
                Inner loop value 2 and inner loop value 4
                Inner loop value 3 and inner loop value 4
                Inner loop value 4 and inner loop value 4

                Outer loop value: 5
                Inner loop value 0 and inner loop value 5
                Inner loop value 1 and inner loop value 5
                Inner loop value 2 and inner loop value 5
                Inner loop value 3 and inner loop value 5
                Inner loop value 4 and inner loop value 5
*/

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------------------

// Printing Table using for loop

console.log("Printing Table by using for-loop");
console.log("");

for (let i = 1; i <= 5; i++) { 

    console.log(`Table of ${i} is...`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${j * i}`);             // This Syntax will print the table
        // console.log(i + ' * ' + j + ' = ' + i*j);       // And This will also print the table
    }
    console.log("");
}

// Output ==> THe table of 1 to 5 will print

console.log("---------------------------------------");

// --------------------------------------------------------------------------------------------------------

/* *********************************** Array using for-loop *****************************************

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} 

Agr hum for loop ka basic structure dekhe toh ye Array ke upr saara kaam karne ki kosis karta hai,toh ye bhi
hum dekhte hai.
*/

let myArray = ["Ram", "Laxhman", "Hanuman"] // Toh ab es "myArray" pr loop lag gya 

console.log('Length of myArray is ' + myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; // Yha Array ko access karne ke liye hume index value deni hoti hai.
    console.log(element);   
}

/*  Output ==> Length of myArray is 3
               Ram
               Laxhman
               Hanuman

    1) index = 0; --> Es Program mai, array ka "index" zero se start ho raha hai.

    2) index < myArray.length; --> Ab kab tk chalana hai hume es index ko ? jab tak ki ye index array ki
                                   length se chota rahe.

    

*/