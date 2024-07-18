const accountId     = 144553
let accountEmail    = "ishan@gmail.com"
var accountPassword = "12345"
accountCity         = "Jaipur"
let accountState;

// -------------------------------------------------------------------------------
// Here we are trying to change the value of "accountId" which is already declared
// accountId = 2
// Emmit Shortcut ==>  write "log" and then enter
// console.log(accountId);
// Output is ==> Error, because we cannot change the value of "Const" variable
// -------------------------------------------------------------------------------

// Here we are reassigning the values in the above next variable
accountEmail    = "is@gmail.com"
accountPassword = "212121"
accountCity     = "Bangluru"

console.log(accountEmail);

/*
Prefer not to use "var" keyword for variable declaration because of issue in block scope and functional scope.
means "var" keyword se bane hue "variable" mai value phir se reassign ho sakti hai bhale hi vo kisi function yaa
loop ke andar hi kyu na declare hua ho. Aur function yaa phir kisi loop ka scope hi functional or block scope hota 
hai.

for example_1: function example { now this is a functional scope }
for example_2: for () { this is called a block scope}
*/ 

// Below is the method of printing more than one variable values simultaneouly in console
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])