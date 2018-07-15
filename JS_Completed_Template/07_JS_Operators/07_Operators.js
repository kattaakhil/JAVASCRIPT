// Assignment operator =
var num1 = 10;
var output = "The value of num1 is : " + num1;
console.log(output);

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
output = "The Sum of a , b is : " + sum;
console.log(output);

// Short hand math += , -= , *= , /=
var x = 10;
var y = 20;
var add = 0;

add = add + (a + b);
add += (a + b); // Shorthand math

output = "The value of add is : " + add;
console.log(output);

// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age >= 18){
    output = "You are Major";
}
else{
    output = "You are Minor";
}
console.log(output);
document.getElementById('display').innerHTML = output;

// Unary Operator ++ , -- (pre , post)
var abc = 10; // 10
abc = abc + 1; // 11
abc += 1; // 12
abc++; // 13
output = "The value of abc is : " + abc;
console.log(output);
document.getElementById('display').innerHTML = output;

// Logical operators AND (&&) , OR (||)
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    output = "Get Marry Soon";
}
else{
    output = "Wait until the parents Agreed";
}
console.log(output);
document.getElementById('display').innerHTML = output;

// String Concatenation Operator (+)
var str = 1 + 3 + "1" + 4 + 2;
console.log(str);
document.getElementById('display').innerHTML = str + "";

// Ternary operator (? :)
age = 15;
(age >= 18)? output = "You are Major" : output = "You are Minor";
console.log(output);
document.getElementById('display').innerHTML = output;

// typeof operator
var xyz; // undefined , undefined

xyz = 10; // 10 , number

xyz = 'test'; // test , string

xyz = true; // true , boolean

xyz = null; // null , object

output = "value : " + xyz + " data type : " + typeof xyz;
console.log(output);
document.getElementById('display').innerHTML = output;

// == operator
a = 10;
b = "10";
if(a == b){
    console.log("Both are Equal from ==");
}
else{
    console.log("Both are NOT Equal from ==")
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log("Both are Equal from ===");
}
else{
    console.log("Both are NOT Equal from ===")
}