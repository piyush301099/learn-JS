/* To declare variables we have 3 keywords in JS
1. var: - this is old version to declare variables
        - using this variables can be redeclared and updated
        - global scope variable

2. let: - modern way of declaring variables
        - using this variables can not be redeclare but can be updated.
        - block level scope

3. const: - modern way of declaring constants.
          - using this variables can not be declare or updated.
          - block level scope.
*/
//var Example
console.log("var keyword example");
var fName = "Piyush";
console.log(fName);
var fName = "redeclare Piyush"; // here you can see we are redeclaring the fName variable using var
console.log(fName);

//let example
console.log("let keyword example");
let lName = "Bondre";
//let lName = "You can not redeclare" // this is wrong you can not redeclare let variables
console.log(lName);
lName = "Updated Bondre" // but you can update the variable decalre by let keyword
console.log(lName);

//const example
console.log("const keyword example");
const dob = "30-10-1999"
// const dob = "30-10-1998" // redeclaration not allowes
// dob = "33-10-1999" //updat is not allowed
console.log(dob);
/*
Note: 
if you declare object with const keyword then you can able to change the property values inside the object.
*/
//object decalration
console.log("const object declaration");
const student= {
        fName : "Piyush",
        lName : "Bondre",
        age : 25,
        marks: 100
};
console.log(student);
student["fName"] = "new Piyush";
//or you can access/update properties of object like below as well
student.lName = "new Bondre";
console.log(student);

/*
Note: as we know const keyword not allowed to update the variable it'll throw error, but as you see above const objects will not throw errors when we update it's properties. to get this error we need to update whole student object like below */

// student= {
//         fname : "piyush",
//         lName : "jsndf",
//         age : 23,
//         marks : 11
// }

/*
Operators
arithmatic : +, -, *, /, %, ** (this is exponantial operator like 5**2 is 5^2)
uniary operators: ++, --
assignment operators: +=, -=, *=, **=, /=, %= eg: a += 2 is nothing but a = a+2
compare operator: ==, !=, ===, !==, >, <, >=, <=
Note:
        - == is normal operator which just check values
                eg. let a = 5;
                    let b = "5";
                    // though both variables are of differnet type but == give us true because at backend JS will convert "5" to 5 and then check if it is equal to 5.
        - === This is strict compare operator where it'll comapre value as well as type; most of the time will use this === to compare values until and unless we want to ignore the type and just compare value, then we have to use ==
        - same thing goes with != and !==
*/

//this is use to take user input from users
prompt("Hi");   