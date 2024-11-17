const accountId = 144553
let accountEmail = "aakash@google.com"
var accountPassword = "12345"
accountCity ="Modinagar"
let accountState;

// accountId = 2 // not allowed beacuse we can not redeclared and updated const variable value


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log("Account id is ->" ,accountId );
console.log("Account Email is ->" ,accountEmail );
console.log("Account Password is ->" ,accountPassword );
console.log("Account City is ->" ,accountCity );
console.log("Account State is ->" ,accountState );

/*
Prefer not to use var
because of issue in block scope and functional scope, var can be considered as global variable due to this it causes unnecessary 
error while declaring ohter variables of same name
prefer to use let due to its validity in block scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])