// number example
var num1 = 10;
var output = "Value : " + num1 + " DataType : " + typeof num1;
console.log(output);
document.getElementById('display').innerHTML = output;

// String Examples
var name = "John";
output = "Value : " + name + " DataType : " + typeof name;
console.log(output);
document.getElementById('display').innerHTML = output;

// boolean Examples
var isJSEasy = true;
output = "Value : " + isJSEasy + " DataType : " + typeof isJSEasy;
console.log(output);
document.getElementById('display').innerHTML = output;

// reassignment example of variables
var abc;
console.log(abc); // undefined

abc = 10;
console.log(abc); // 10

abc = 'Test';
console.log(abc); // Test

abc = true;
console.log(abc); // true

abc = null;
console.log(abc); // null

output = "The value of abc is : " + abc;
console.log(output);
document.getElementById('display').innerHTML = output;