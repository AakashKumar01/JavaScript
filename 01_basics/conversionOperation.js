// JavaScript Type Conversion Operations

// String to Number Conversion
let userName = "aakash";
console.log(typeof userName);        // Output: "string"

let valueInNumber = Number(userName); 
console.log(typeof valueInNumber);   // Output: "number"
console.log(valueInNumber);          // Output: NaN (Not a Number)

// Examples:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


// Boolean Conversion
let isLoggedIn = "aakash";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);      // Output: true

// Conversion Examples:
// 1 => true; 0 => false
// "" => false
// "aakash" => true


// Number to String Conversion
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);              // Output: "33"
console.log(typeof stringNumber);       // Output: "string"


// Implicit Type Conversion (Type Coercion)

// Implicit type conversion (or coercion), is when JavaScript automatically converts a value from one type to another without explicit instructions from the programmer. 
// This usually happens in operations involving different data types.

console.log("5" - 2);   // Output: 3  (String is converted to Number)
console.log("5" + 2);   // Output: "52" (Number is converted to String)
console.log("5" * 2);   // Output: 10 (String is converted to Number)
console.log("5" / 2);   // Output: 2.5 (String is converted to Number)
console.log("5a" - 2);  // Output: NaN  (Invalid conversion)


// Null and Undefined Conversion
console.log(Number(null));       // Output: 0
console.log(Number(undefined));  // Output: NaN
console.log(Boolean(null));      // Output: false
console.log(Boolean(undefined)); // Output: false


// Array to String Conversion
let array = [1, 2, 3];
console.log(String(array));      // Output: "1,2,3"
console.log(array.toString());   // Output: "1,2,3"


// Object to String Conversion
let obj = { name: "Aakash" };
console.log(String(obj));        // Output: "[object Object]"
console.log(JSON.stringify(obj)); // Output: '{"name":"Aakash"}'


// Date to Number/String Conversion
let date = new Date();
console.log(Number(date));       // Output: timestamp in milliseconds
console.log(String(date));       // Output: date string


// Explicit BigInt Conversion
let bigIntValue = BigInt(100);
console.log(bigIntValue);        // Output: 100n
console.log(typeof bigIntValue); // Output: "bigint"
                               