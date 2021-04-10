console.log("\n------------------------------------------------\n")
var var1 = 1;
var var2 = 0;
var var3 = -0;

console.log("1 / 0 = " + var1 / var2); 
console.log("1 / -0 = " + var1 / var3); 
console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MAX_VALUE + 1 = " + Number.MAX_VALUE * 2);
console.log("MIN_VALUE = " + Number.MIN_VALUE);
console.log("MIN_VALUE - 1 = " + Number.MIN_VALUE - 1);
console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER = " + Number.MIN_SAFE_INTEGER);
console.log("SquareRoot(-1) = " + Math.sqrt(-1));
console.log("isSafeInteger(100) = " + Number.isSafeInteger(100));
console.log("\n------------------------------------------------\n")

/**------------------------------------------------------------- */

var firstString = "Hello, There.";
var secondString = "How're you?";
var thirdString = "c";
var fourthString = '"Wow!!!", she shouted.';

console.log(firstString);
console.log(secondString);
console.log(thirdString);
console.log(fourthString);
console.log("\n------------------------------------------------\n")

/**------------------------------------------------------------- */

// Number Data Type:
var firstVar = 1.5e5; 

// String Data Type:
var secondVar = 'Hello'; 

// Boolean Data Type:
var thirdVar = true; 

// Symbol Data Type:
var fourthVar = Symbol("some Symbol variable"); 

// Null Object:
var fifthVar = null; 

// Undefined Data Type:
var sixthVar; 

// Object:
var seventhVar = {a: 1, b: 2}; 

// NaN (It is a Number):
var eighthVar = Math.sqrt(-1); 

console.log(firstVar + " is a " + typeof firstVar);
console.log(secondVar + " is a " + typeof secondVar);
console.log(thirdVar + " is a " + typeof thirdVar);
console.log(fourthVar.toString() + " is a " + typeof fourthVar);
console.log(fifthVar + " is an " + typeof fifthVar);
console.log(sixthVar + " is an " + typeof sixthVar);
console.log(seventhVar + " is an " + typeof seventhVar);
console.log(eighthVar + " is a " + typeof eighthVar);
console.log("\n------------------------------------------------\n")

/**------------------------------------------------------------- */

function print() { 
    console.log(
        "someVariable(" + someVariable 
        + ") is a " + typeof someVariable
    );
    // Note: 'typeof' is explained later in this tutorial.
}

// Declare someVariable and initialize it to the number '5':
var someVariable = 5; 
print(someVariable);

// Assign the string "Hello" to someVariable:
var someVariable = "Hello"; 
print(someVariable);

// Assign the boolean value 'true' to someVariable:
var someVariable = true; 
print(someVariable);
console.log("\n------------------------------------------------\n")

/**------------------------------------------------------------- */

function print(name, variable) {
    console.log(
        name + "(" + variable 
        + ") is a " + typeof variable
    );
}

var someNumber = 10;
var someString = "Ten";
var someBoolean = false;

var sumOfNumberAndString = someNumber + someString;
var sumOfBooleanAndString = someBoolean + someString;
var sumOfNumberAndBoolean = someNumber + someBoolean;

print("sumOfNumberAndString", sumOfNumberAndString);
print("sumOfBooleanAndString", sumOfBooleanAndString);
print("sumOfNumberAndBoolean", sumOfNumberAndBoolean);
console.log("\n------------------------------------------------\n")