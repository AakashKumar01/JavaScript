"use strict"; // treat all JS code as newer version

/*                       ************* Primitive Data Types (Value Types) ****************

 These types hold the actual value directly in memory. When you work with primitive values, you're working directly with the value itself.

 Number:
 Range -(2^53 - 1), which is -9007199254740991. to 2^53 - 1, which is 9007199254740991 
 Represents numeric values, including integers and floating-point numbers.
 JavaScript has only one number type, not separate types for integers and floats like some other languages.      */
let age = 30;
let price = 99.99;

/* String: 
    Represents textual data. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks ().      */
let name = "Alice";
let message = "Hello, world!";
let templateString = `My name is ${name}`; // Template literals (using backticks)

/* Boolean: 
  Represents logical values: true or false.
  For boolean values the aplhabet must be written in lowercase.   */
let isLoggedIn = true;
let isAdult = false;

/* Null: 
  Represents the intentional absence of a value. It's different from undefined. 
  It signifies that a variable has been explicitly assigned the value null.
  It's datatype is Object. */
let user = null; // User object is currently null

/* Undefined:
  Represents the absence of a value when a variable has been declared but not yet assigned a value.
  It's datatype is undefined.  */
let city; // city is undefined

/* BigInt:
  Represents integers of arbitrary precision, which can be useful for calculations with very large numbers that the Number type can't accurately handle.
  It's denoted by appending n to the number. */
let largeNumber = 1234567890123456789012345678901234567890n;

// Symbol (ES6):
// Represents unique and immutable values, often used as keys for object properties.
let mySymbol = Symbol("description");


/*                   ***************** Non-Primitive Data Type (Reference Type): ****************
 
 There's one main non-primitive data type is Object.
 
 Object:
 Represents collections of key-value pairs (properties). Objects can be used to model complex data structures.  */
let person = {
  name: "Bob",
  age: 25,
  city: "New York",
};

let colors = ["red", "green", "blue"]; // Arrays are also a type of object in JavaScript.

/* Key Differences between Primitive and Non-Primitive Types are:  Storage and parameter passing.
 
 Storage: Primitive types store the actual value directly in memory.
          Non-primitive types (objects) store a reference to the value's location in memory.
 
 Pass by Value VS Pass by Reference: When you assign a primitive value to a variable, you're working with a copy of the value.
                                     When you assign an object to a variable, you're working with a reference to the same object in memory.
                                     This has implications for how changes to objects affect other parts of your code.
 
 Mutability: Primitive values are immutable, meaning their values cannot be changed after they are created.
             Objects are mutable—you can change their properties.  */

// You can use the typeof operator to check the data type of a value or a variable:
let age1 = 30;
console.log(typeof age); // Output: "number"

let name1 = "Alice";
console.log(typeof name); // Output: "string"

let person1 = { name: "Bob" };
console.log(typeof person); // Output: "object"

let colors1 = ["red", "blue"];
console.log(typeof colors); // Output: "object"  (Arrays are a type of object)

let nothing = null;
console.log(typeof nothing); // Output: "object" (This is a historical quirk)

let undef;
console.log(typeof undef); // Output: "undefined"

let bigNum = 123n;
console.log(typeof bigNum); // Output: "bigint"

let sym = Symbol("example");
console.log(typeof sym); // Output: "symbol"

// Understanding data types is fundamental to programming in JavaScript.
// Choosing the right data type for your data is essential for writing efficient and correct code.
