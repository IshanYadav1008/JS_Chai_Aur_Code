// *************** Dates ****************

// Date bhi JavaScript mai ek "Object" hi hai

let myDate = new Date()
console.log("Value of myDate");
console.log(myDate);     
// Output ==> 2024-06-26T10:32:29.011Z
console.log("-----------------");

console.log("Typeof of myDate");
console.log(typeof myDate);        
// Output ==> Object (toh Date jo hai vo ek Object hai)
console.log("-----------------");

// Ab hum date ko string mai convert kare dekhte hai
console.log("Value of ==> myDate.toString()");
console.log(myDate.toString()); 
// Output==>  Wed Jun 26 2024 10:33:55 GMT+0000 (Coordinated Universal Time)
console.log("-----------------");

/* Imp Note : "console.log(myDate.to" itna likhne ke baad hume "ctrl+space" press karna hai toh
              baaki ke saare methods bhi show ho jayenge.
*/
console.log("Value of ==> myDate.toDateString()");
console.log(myDate.toDateString()); 
// Output ==> Wed Jun 26 2024
console.log("-----------------");

console.log("Value of ==> myDate.toISOString()");
console.log(myDate.toISOString());
// Output => 2024-06-26T10:39:15.986Z
console.log("-----------------");

console.log("Value of ==> myDate.toJSON()");
console.log(myDate.toJSON());
// Output ==> 2024-06-26T10:39:44.554Z
console.log("-----------------");

console.log("Value of ==> myDate.toLocaleDateString()");
console.log(myDate.toLocaleDateString());
// Output ==> 6/26/2024
console.log("-----------------");

console.log("Value of ==> myDate.toLocaleString()");
console.log(myDate.toLocaleString());
// Output ==> 6/26/2024, 10:41:11 AM
console.log("-----------------");

console.log("Value of ==> myDate.toLocaleTimeString()");
console.log(myDate.toLocaleTimeString());
// Output ==> 10:41:48 AM
console.log("-----------------");

// -------------------------------------------------------------------------------

// Ab hume ek specific date declare karni hai
let myCreatedDate = new Date(2023, 0, 23)
console.log("Value of 'myCreatedDate' date is");
console.log(myCreatedDate);
// Output ==> 2023-01-23T00:00:00.000Z
console.log("-----------------");

console.log("Value of 'myCreatedDate.toDateString()' date is");
console.log(myCreatedDate.toDateString());
// Output ==> Mon Jan 23 2023
console.log("-----------------");

let myCreatedDate_1 = new Date(2023, 0, 23, 5, 3)
console.log("Value of 'myCreatedDate_1.toLocaleString()' is" );
console.log(myCreatedDate_1.toLocaleString());
// Output ==> 1/23/2023, 5:03:00 AM
console.log("-----------------");

let myCreatedDate_2 = new Date("2023-01-14") // YYYY-MM-DD
console.log("Value of 'myCreatedDate_2.toLocaleString()' is" );
console.log(myCreatedDate_2.toLocaleString());
// Output ==> 1/14/2023, 12:00:00 AM
console.log("-----------------");


let myCreatedDate_3 = new Date("01-26-2024") // MM-DD-YYYY
console.log("Value of 'myCreatedDate_3.toLocaleString()' is" );
console.log(myCreatedDate_3.toLocaleString());
// Output ==> 1/14/2023, 12:00:00 AM
console.log("-----------------");
console.log("\n");

// ***************************** Time *********************************

let myTimeStamp = Date.now()
console.log("The value of 'myTimeStamp' is");
console.log(myTimeStamp);
// Output => 1719403234283 (This is the milisecond value since 1st Jan,1970 to till now)
console.log("-----------------");

console.log("The value of 'myCreatedDate_3.getTime()' is");
console.log(myCreatedDate_3.getTime());
// Output ==> 1706227200000
console.log("-----------------");

console.log("This is the Present Date in Milliseconds");
console.log(Date.now());
// Output ==> 1719403827520
console.log("-----------------");

// Now we need to convert it in Seconds. How ?
console.log("Now the Present Date is converted in Seconds");
console.log(Date.now()/1000);
// Output ==> 1719403827.521
console.log("-----------------");

// Lekin Second mai convert karne ke baad values decimal mai aa rhi hai, lekin hume ye nhi chyiae.
console.log("Now the below value is in Seconds but not in decimal");
console.log(Math.floor(Date.now()/1000));
// Output ==> 1719403983
console.log("-----------------");

// ---------------------------------------------------------------------------

let newDate = new Date()
console.log("The value of 'newDate' is");
console.log(newDate);
// Output ==> 2024-06-26T12:16:29.727Z
console.log(newDate.getMonth());
// Output ==> 5
console.log(newDate.getDay());
// Output ==> 3
console.log(newDate.getMonth() + 1);
// Output ==> 6