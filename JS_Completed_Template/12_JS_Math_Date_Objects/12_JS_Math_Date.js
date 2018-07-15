/*
        Math Object Examples

 */

// Math PI and Sqrt
var piValue = Math.PI;
console.log('The PI Value is : ' + piValue);

// Sqrt
var sqrt = Math.sqrt(256);
console.log('The sqrt of 256 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(10,50,46,89,78,96,5);
console.log('The Min value is  : ' + min);

// find the Max of 4 numbers
var max = Math.max(10,50,46,89,78,96,5);
console.log('The Max value is : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var power = Math.pow(2,4);
console.log('2 ^ 4 is : ' + power);

// generate the random numbers from 0 to 100000
var random = Math.round(Math.random() * 100000);
console.log("Random Value : " + random);
document.getElementById('display').innerHTML = "Random Value : " + random;

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log(today);

// get a normal date
var date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
console.log(date);

// get full day of the week using switch statement
var day = today.getDay();
var fullDay = "Today is : ";
switch(day){
    case 0:
        fullDay += 'Sunday';
        break;
    case 1:
        fullDay += 'Monday';
        break;
    case 2:
        fullDay += 'Tuesday';
        break;
    case 3:
        fullDay += 'Wednesday';
        break;
    case 4:
        fullDay += 'Thursday';
        break;
    case 5:
        fullDay += 'Friday';
        break;
    case 6:
        fullDay += 'Saturday';
        break;
    default:
        fullDay += 'No Value';
        break;
}
console.log(fullDay);

// Display a Digital Clock on the web page
function indianTime() {
    var today = new Date();
    var options = {timeZone : "Asia/Kolkata" };
    var time = today.toLocaleTimeString('en-US',options);
    document.getElementById('display').innerHTML = "Indian Time : " + time;
}
setInterval(indianTime,1000);

 // US Time
function usTime() {
    var today = new Date();
    var options = {timeZone : "America/New_York" };
    var time = today.toLocaleTimeString('en-US',options);
    document.getElementById('clock').innerHTML = "US Time : " + time;
}
setInterval(usTime,1000);

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/


// String Examples

// Length of a string
var greet = "Good Morning";
console.log('Length of greet is : ' + greet.length);

// Substring
var subStr = greet.substring(0,4);
console.log(subStr); // Good
var remString = greet.substring(5);
console.log(remString); // Morning

// toLowercase()
var str = "GOOD MORNING";
console.log("str : " + str.toLowerCase());

// toUpperCase()
var str1 = "good morning";
console.log("str1 : " + str1.toUpperCase());

// charAt()
console.log("char At index 5 : " + str1.charAt(5));

// Number Example
console.log("Max Value in JS : " + Number.MAX_VALUE);
console.log("MIn Value in JS : " + Number.MIN_VALUE);

// parseInt
var strNum1 = "123";

var num1 = parseInt(strNum1);
console.log("num1 : " + num1 + " Type : " + typeof num1);

// isNaN()
var myStr = "test";

if(isNaN(parseInt(myStr))){
    console.log("It is Not a Number");
}
else{
    console.log("It is a Number");
}


