/*
as every language JS also have for, while and do while loops, nothing special as such

what new is for-of and for-in loops in JS.
    1. for-in:
        - this loop helps to iterate over a properties of the object
        - this will retrun keys of the object properties
        - or this will return index if you use this on iterable objects like string, arrays etc.
    2. for-of
        - this will iterate over a iterable objects like array, string, map, set.
        - this will return each item in object for eg each character in string, each item in array, etc.
    - these loops will iterate over a special datatypes like string and arrays.
    - we do not need to initialize or update the iterating variable, these loops will take care of that.
*/
// eg of for-of loop
let fName = "Piyush";
for(let i of fName){
    console.log(i);
}

//eg of for-in
let student = {
    fName : "Piyush",
    marks: 100,
    address: "haripur"
}
for(let i in student){
    console.log("key = ", i, "value =", student[i]);

}
let eg = "haripur"
for(let i in eg){
    console.log(i);
}

//Strings:
console.log("will look into string concepts")
let fName1 = "Piyush";
console.log(fName.length); // give us total length
console.log(fName[0]); //this will give us character at 1st place

/*
Note: we have special type of strings called TEMPLATE LITERALS:
    - which we decalre using "`" back tick
    - this helps to have embedded expressions in string.

    Strin Interpolation:
    - this is when we create string by doing substitution of placeholders which will included at a run time
    - these place holders can be any expression be it obj property, any arithmetic expression, this interpolation concept 1st evalulate that expression under ${} and then make that result as a part of string
    - eg. we do this in template literals like `this is ${obj.Propkey}` this will get the property value of that object and add it to the string.
*/
let student1 = {
    fName : "Piyush",
    lName : "Bondre",
    age : 25
}
let templateLiteral  = `My Name is ${student1.fName} and my age is ${student1.age}, I'll be turing ${student1.age + 1} this year`; // this is called as string interpolation
console.log(templateLiteral);

/*
Note: 
 when you add any escape characters like \n or \t those will be count as a single character while calculating string length
*/

let myName = "Piyush\tBondre";
console.log(`length of "${myName}" is ${myName.length}`); // this will count \t as a one character NOT 2

/*
Methods of string:
    - toUpperCase()
    - toLowerCase()
    - trim()
    - slice(start, end) : this will give you substring in string, it'll exclude character at end index
    - concat(str)
    - replace (searchStr, newStr): this will only replace 1st occurance of the searchStr
    - charAt(index): will return character at specific index
Note:
    - using string objects we can either get it's properties like str.lenght, or we can trigger string methods like str.toUpperCase(); her you observe while fetching property we do not apply any () but when we trigger methods we need to use ().
    - String are immutable in JS i.e we can not change.
    - so whichever methods you use on string object those will retrun new string object, they will not update original string.
*/

let lName = "This is Bondre";
console.log(`after using toUpperCase method will get uppercase string object like "${lName.toUpperCase()}" this is new object`);
console.log(`As above we alraedy used toUpperCase but if we print out original object it wont change as this "${lName}"`)

/*
Story:
    - get input from user as a full name and convert it to user name 
    - eg I/P Piyush Bondre 
    -    O/P @piyushbondre12 // her 12 is lenght of the string
*/

// let fullName = prompt("Enter your full name");
let fullName = "T"
console.log(fullName);
console.log(`your user name is @${fullName.replace(" ","").toLowerCase()}${fullName.length}`);

let fName2 = "Piyush";
console.log(1 / "0");