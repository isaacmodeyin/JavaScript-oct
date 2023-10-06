var message = "This is the repeated text value";
message = "goodnight";
// alert(message);
let tax = 10.78;
// let fax = 66.53;
var goodnight = "goodnight";
const isaac = "Coding guruu";
tax = 7;

console.log(isaac);
console.log(message);
console.log(tax);

function sayHello() {          //declare a function
    console.log("message me");
};

sayHello();  //Call the function or invoke the function

function myName() {
    console.log("My name is ISAAC");
};

myName();

document.getElementsByTagName("div").innerHTML = "how are you doing";

function sayHello(name) {
    if (name == "kemi") {
        console.log("You are not welcome");
    } else {
        console.log("Hello " + name);
    }
}

sayHello("kemi");


//Arithmetic Operators
// + - * / % =

//Bitwise operators
// || && ! == === !=
let age = 1;
let parentIsParent = true;
let hasDriverLicense = true;
if (age > 15 || parentIsParent) {
    console.log("Allowed to watch movie");
}

if (age > 17 && hasDriverLicense) {
    console.log("Allowed to drive");
}

if (age === "21") {
    console.log("Matches desired Age");
}

if (age !== "22") {
    console.log("Nope");
}

if (parentIsParent == false) {
    console.log("Matches");
}

if (!hasDriverLicense) {
    console.log("Matches");
}

function verifyYourIdCard() {
    if (hasDriverLicense) {
        console.log("valid")
    } else if (haveNin) {
        console.log("valid")
    } else {
        console.log("Invalid")
    }
}

//Tenery operator and switch statement

hasDriverLicense === true ? alert("Correct") : console.log("Incorrect")
//OR
if (hasDriverLicense === true) {
    alert("correct")
} else {
    console.log("Incorrect")
}

nameIsIsaac = true;

nameIsIsaac === false ? alert("You are welcome") : console.log("Please leave!")


//Post and Pre increment
console.log(tax++);
console.log(tax);
console.log(++tax);

// ++age
console.log(age);
console.log(`Happy ${age++}st birthday`);
console.log(age);


switch (age) {
    case 1: console.log(`Age is: 1`);
        break;
    case 2: console.log(`Age is: 2`);
        break;
    case 18: console.log(18);
        break;
    default: console.log("no case was met");
}