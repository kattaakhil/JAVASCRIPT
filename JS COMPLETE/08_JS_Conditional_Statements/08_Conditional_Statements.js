// If Else condition Example
var courseCompleted = false;
var practiceCompleted = false;
var output = "";
if(courseCompleted && practiceCompleted){
    output = "You will get a job soon";
}
else if(courseCompleted && !practiceCompleted){
    output = "Start Practicing";
}
else{
    output = "Please join any Course";
}
console.log(output);
document.getElementById('display').innerHTML = output;


// For loop Example to display from 1 - 10 values
output = "";
for(var  i = 1; i <= 10; i++){
    if(i <= 9){
        output += i + ' , ';
    }
    else{
        output += i;
    }
}
console.log(output);
document.getElementById('display').innerHTML = output;

// While loop Example to display from 1 - 10 values
i = 1;
output = "";
while(i <= 10){
    if(i <= 9){
        output += i + ' - ';
    }
    else{
        output += i;
    }
    i++;
}
console.log(output);
document.getElementById('display').innerHTML = output;

// Do while loop Example to display from 1 - 10 values
i = 1;
output = "";
do{
    if(i <= 9){
        output += i + ' ^ ';
    }
    else{
        output += i;
    }
    i++;
}
while(i <= 10);
console.log(output);
document.getElementById('display').innerHTML = output;

// Switch Statement Example to display full Day
output = "Today is : ";
var today = new Date().getDay();
console.log(today);
switch(today){
    case 0:
        output += 'Sunday';
        break;
    case 1:
        output += 'Monday';
        break;
    case 2:
        output += 'Tuesday';
        break;
    case 3:
        output += 'Wednesday';
        break;
    default:
        output += 'Not Sure';
        break;
}
console.log(output);
document.getElementById('display').innerHTML = output;