/*
function defination:

function functionName(param1, param2){
    //your logic
    //params has local block scope, limited to the block of function
}
    you can return something using "return" keyword.
*/

function add(val1, val2){
    let sum = val1+val2;
    return sum;
}

console.log(`addition of 2 and 3 = ${add(2,3)}`);

/*
arrow functions are modern and shorter way of writting functions
*/

let arrowAdd = (val1, val2) => {
    console.log(`addition = ${val1+val2}`);
}

arrowAdd(3,4);

/* write function which can return count of vowels */

function numberOfVowels(val1){
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for(let i of val1){
        if(vowels.includes(i)){
            count++;
        }
    }
    return count;
}

console.log(`number of vowels in hello is = ${numberOfVowels("hellO ")}`);

/*
methods vs function:

- Functions are black box with set of instruction which can perform certain task when we call it, this does not bind with any object it can directly called without object
- methods are generally binds with some object for eg str.toUpperCase() this method need one string to work
*/

/*
Note:
    - in JS functions can pass as a parameter
    - CALLBACK Function is a function which is passed to other function as a parameter


below are some useful methods of arrays.
- forEach(callback function); This will iterate over a array and perfom some task on each array, call back function can take 3 parameters value, index, & array
- map(callback function); this will create a new array of the element which are returned from callback function; here also callback function will perfrom operation on each element and accept value, index & array as a parameter
- filter(callback function); this will create a new array of the element which gives true for certain conditions given in the callback function, callback function can accept value, index, arrya as a parameter
- reduce(callback function); when you have multiple imputs and you want to perfrom operations on it and return a single value then you can use reduce; eg find largest number from array.
*/
// eg of arr.forEach();
let arr = [1, 2, 3, 4, 5];
arr.forEach((val, index, piyush)=>{
    /*call back function can contain 2 attributes which you can name as you want
    1st represent element value
    2nd represent index of value
    3rd represent whole array
    */
    console.log(`Printing values ising callback function ${val} ${index} ${piyush}`);
})

/*
Q. what are higher order functions?
- the functions which accept other function as a parameter or return any other function as a value
- i.e any function which contain callback functions are called as higher order functions
- forEach(), map(), filter() is one of the highe order funciton
*/

//eg of arr.map(callback)

let egOfMap = arr.map((val)=>{
    return val * 2; //this will multiply each element by 2 and return to the map which will create a new array
})

console.log(`new array created by map funciton = ${egOfMap}`);

//eg of arr.filer(callback)
let egOfFilter = arr.filter((val)=>{
    return val % 2 === 0;
})

console.log(`new array returned from filter method = ${egOfFilter}`)

// eg of arr.reduce(callback function);
let largestNumber = arr.reduce((result, current)=>{
    /*this callback accept 2 parameter
    - 1st will be the result; after every iteration this elements holds updated value
    - 2nd will point to the current element in the iteration
    */
   return result > current ? result : current;
})

console.log(`largest element from arry using reduce method is = ${largestNumber}`);