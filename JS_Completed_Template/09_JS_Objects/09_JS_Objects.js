//creation of objects
var obj = {};

//Adding properties to objects
obj.name = 'John';
obj.age = 40;
obj.designation = 'Manager';
console.log(obj);

//Retrieving properties of objects
var objName = obj.name;
console.log(objName);

//declaring Object Literals
var employee = {
    name : 'Williams',
    age : 40,
    designation : 'Sales Manager'
};

console.log(employee);

//Access existing properties
var empName = employee.name;
console.log(empName);

//Access Non Existing Properties
var empSalary = employee.salary;
console.log(empSalary);

// Usage of Dot and [] notations
var empDesg1 = employee.designation;
var empDesg2 = employee['designation'];
console.log(empDesg2);

// use of [] notation where dot is not used for invalid identifiers
var student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    10 : 'India' // Invalid property '10'
};

var stdProp = student['10'];
console.log(stdProp); // India

// use of [] notation for accessing dynamic properties
var dynaProp = 'name';
console.log(student[dynaProp]); // Rajan

dynaProp = 'age';
console.log(student[dynaProp]); // 22

dynaProp = 'course';
console.log(student[dynaProp]); // Engineering

// nested Objects creation
var showroom = {
    name : 'Audi Hyderabad',
    estd : 1995,
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};

//Accessing them using dot notation
var showroomCity = showroom.address.city;
console.log(showroomCity); // Hyderabad

//Accessing them using mix of dot and [] notation
var showroomState1 = showroom.address.state;
console.log(showroomState1); // Telangana

var showroomState2 = showroom.address['state'];
console.log(showroomState2); // Telangana

// Add some properties to nested object and access them
showroom.address.street = 'Hitech City';
console.log(showroom.address);

// === operator demo for objects (if pointing to same location in memory)
var emp1 = {
    name : 'Naveen',
    desg : 'Tech Lead',
    company : 'Happiest Minds'
};
var emp2 = emp1; // both are pointing to same object
if(emp1 === emp2){
    console.log("Both are EQUAL");
}
else{
    console.log("Both are NOT EQUAL");
}

// deleting a property from an object
console.log(emp1);
delete  emp1.company;
console.log(emp1);
