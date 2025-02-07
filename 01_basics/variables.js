const accountId = 144553;
//constant(const) is a  block scope constant variable, means We can neither update its value nor redeclare it within the same scope.
//but in different scope we can do both.
//you can redeclare a const variable in a different scope in JavaScript, but you cannot update its value within the same scope.

let accountEmail = "aakash@google.com";
// Redeclaration (within the same scope): You cannot redeclare a variable with let within the same scope. This will result in a SyntaxError.
// Reassignment: You can reassign a new value to a variable declared with let. This is a crucial difference from const.

let accountState; 
// we can leave variables empty but it gives output undefine on console.log(variable_name).

var accountPassword = "12345";
/*
Redeclaration: You can redeclare a variable with var within the same scope without getting an error. This can sometimes lead to unintended consequences if you're not careful.
Reassignment: You can reassign a new value to a variable declared with var.
Nowadays in practice we don't use 'var' variable, it was in practice in old times.
Prefer not to use var because of issue in block scope and functional scope,
var can be considered as global variable due to this it causes unnecessary 
errors while declaring other variables of same name
prefer to use let due to its validity in block scope
*/


// accountId = 2 
// Not allowed beacuse we can't redeclare and reassign const variable value, it gives error.

accountCity="Modinagar";
accountEmail = "aakash@gmail.com";
accountPassword = "21212121";
accountState = "Uttar Pradesh";
// In JavaScript, if we don't define the data type of a variable, then JavaScript automatically defines its data type.


console.log("Account id is ->" ,accountId );
console.log("Account Email is ->" ,accountEmail );
console.log("Account Password is ->" ,accountPassword );
console.log("Account City is ->" ,accountCity );
console.log("Account State is ->" ,accountState );


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// console.table() is a handy method in JavaScript's console object that displays data in a tabular format in the browser's developer console.
// It's particularly useful for visualizing arrays of objects or simple objects.
