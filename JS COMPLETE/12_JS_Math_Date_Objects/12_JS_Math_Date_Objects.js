
/*
    Math Object Examples

 */

// Math PI and
var piValue = Math.PI;
console.log('The PI Value is :' + piValue);

//Sqrt
var sqrt = Math.sqrt(256);
console.log("The sqrt of 256 is : " + sqrt);


// find the min of 4 numbers
var min = Math.min(15, 25, 5, 10, 69, 75, 23);
console.log('The min value is : ' + min);


// find the Max of 4 numbers
var max = Math.max(15, 25, 5, 10, 69, 75, 23);
console.log('The max value is : ' + max);


// find the 'x' to the power of 'y' value, ex: 2^4
var power = Math.pow(2,3);
console.log('The 2 to the power of 3 is : ' + power);


// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 10000);
console.log('Random Value : ' + random);
document.getElementById('display').innerHTML = 'Random Value : ' + random;


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
var date = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
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
        fullDay += 'Thrusday';
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
    var options = { timeZone : "Asia/Kolkata" };
    var time = today.toLocaleTimeString('en-US', options);
    document.getElementById('display').innerHTML = 'Indian Time is : ' + time;
}
setInterval(indianTime, 1000);

// US Time
function americanTime() {
    var today = new Date();
    var options = { timeZone : "America/New_York" };
    var clock = today.toLocaleTimeString('en-US', options);
    document.getElementById('clock').innerHTML = 'American Time is : ' + clock;
}
setInterval(americanTime, 1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

//String examples

// Length of a string
var greet = "Good Morning";
console.log("Length of Greet is : " + greet.length);


// substring
var subStr = greet.substr(0, 4);
console.log(subStr);// Good
var remString = greet.substr(5);
console.log(remString);// Morning


// toLowerCase
var str = "GOOD MORNING";
console.log('str : ' +str.toLowerCase());


//toUpperCase
var str1 = "good morning";
console.log('sttr1 : ' + str.toUpperCase());


//charAt()
console.log("char at index 5 is : " + str.charAt(5));


//Number Example
console.log("Max Value is : " + Number.MAX_VALUE);
console.log("Min Value is : " + Number.MIN_VALUE);


//Parselist
var strnum1 = "123";

var num1 = parseInt(strnum1);
console.log("num1 : " + num1 + " Type : " + typeof num1);


//isNaN()
var myStr = "Test";
if(isNaN(parseInt(myStr))){
    console.log("It is not a number");
}
else{
    console.log("It is a number");
}






