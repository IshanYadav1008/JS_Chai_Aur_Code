// ************************************************ Switch Case **********************************************

/* "switch-case" syntax:

switch (key) {
    case value:
        
        break;

    default:
        break;
}
        
*/

// ------------------------------------------------------------------------------------------------------------

const month = 3

console.log("Compairing case with numbers");

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}

/* Output ==> Compairing case with numbers
              March
      
   Agr hum "break" nhi lagayenge toh hmre code ka control flow break ho jayega mtlb agr humne
   kisi case statement baad "break" nhi lagaya toh fir uske aage ke sabhi case statement print
   ho jaynge sirf "default" ko chor kar. 
*/

console.log("-----------------------------------------------");

// ------------------------------------------------------------------------------------------------------------

// Ab hum "switch-case" mai string value ko match krke dekhte hai.

const month_1 = "feb"

console.log("Compairing case with String");

switch (month_1) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feburary");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}

/* Output ==> Compairing case with String
              Feburary
*/