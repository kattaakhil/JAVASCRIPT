// Closures Concept

var a = 10;
function outer(){
    var b = 20;
    var inner = function(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    };
    return inner;
}
var innerFn1 = outer();
innerFn1(); // 11 21

var innerFn2 = outer();
innerFn2(); // 12 21


// Module Pattern
function createStudent() {
    var firstName = 'Arjun';
    var lastName = 'Reddy';
    var stdObj = {
        getFirstName : function() {
            return firstName;
        },
        getLastName : function() {
            return lastName;
        },
        setFirstName : function(name) {
            firstName = name;
        },
        setLastName : function(name) {
            lastName = name;
        }
    };
    return stdObj;
}
var student = createStudent();

var firstName = "FirstName : " + student.getFirstName();
document.querySelector('#display1').innerHTML = firstName;

var lastName = "LastName : " + student.getLastName();
document.querySelector('#display2').innerHTML = lastName;

student.setFirstName('Amarendra');
student.setLastName('Bahubali');

document.querySelector('#display1').innerHTML = student.getFirstName();
document.querySelector('#display2').innerHTML = student.getLastName();
