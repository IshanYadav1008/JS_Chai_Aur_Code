// ******************* Comparison Operators ********************

console.log("Comparison Operators");
console.log(2 > 1);   // Output ==> true
console.log(2 >= 1);  // Output ==> true
console.log(2 < 1);   // Output ==> false
console.log(2 == 1);  // Output ==> false
console.log(2 != 1);  // Output ==> true
console.log("------------------------------")

// -----------------------------------------------------------------------------------

/* Comparision of Operators according to Data Types

   Type Script don't allow comparision between two different data type values */

console.log("Comparision of Operators according to Data Types");
console.log("2" >1 );  // Output ==> true
console.log("02" >1);  // Output ==> true
console.log("------------------------------")

// Note :- In the above examples the string values like "2" and "02" automatically converts into Integer.

/* -----------------------------------------------------------------------------------

/ Comparision of Operators with null   */

console.log("Comparison operators with null");
console.log(null > 0);    // Output ==> false (In this statement "null" will converts into 0(Zero) )
console.log(null == 0);   // Output ==> false (In this statement "null" means only "null")
console.log(null >= 0);   // Output ==> true  (In this statement "null" will converts into 0(Zero) )
console.log("------------------------------")

/* Note :- The reason is that an equility check "==" and comparisions (>,<,>=,<=) work differently
           Comparision convert "null" to a "number", treating  it as 0 (Zero).
           That's why (3). "null >= 0" is "true" and (1). "null>0"  is "false". */

/* ------------------------------------------------------------------------------------

/ Comparision of Operators with undefined */

console.log("Comparison operators with undefined");
console.log(undefined == 0);  // Output ==> false
console.log(undefined > 0);   // Output ==> false
console.log(undefined < 0);   // Output ==> false
console.log("------------------------------")

/* ------------------------------------------------------------------------------------

/ Comparision by using "===" operators */

console.log("2" === 2);       // Output ==> false

/* Note :- This comparision operator "===" compairs according to "Data Type" of values
           In the below example the type of both "2" is different, One is "String" and
           other is "Integer".
