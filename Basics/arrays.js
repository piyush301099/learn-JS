/*
Note:
    - arrays are mutable.
    - we can careate array of same data type as well as mixing multiple data types
    - you can access element by array index
    - array.length will give you the length of the array

Question:
You have array of 5 prices you have to apply 10% off on them and resave it them in the arrays
*/

let prices = [200,100,150,120];
console.log(`Prices before discount ${prices}`);
for(let price of prices){
    prices[prices.indexOf(price)] = price - (price * 0.1);
}

console.log("Prices after discount");
for(let price of prices){
    console.log(price);
}
/*
arr.push(obj): to add element in array at the end and return updated length
arr.pop(): delete item from end and return the deleted item
arr.toString(): return array in the form of string
arr1.concat(arr2): this will return new array which is combination of 2 arrays
arr.unshift(obj): to add value at the begining of the array
arr.shift(): remove element from the begining and return the deleted element
arr.slice(start_index, end_Index): give you the sub array, end-index is non inclusive
arr.splice(start-index, num-of-element-to-delete, new-elements): this will star from start index then check the number of elements that we want to remove then it remove those and start adding new element after start-index. this will make changes in original arrya
*/

prices.push(1);
console.log(prices);
//you can push multiple items as well
prices.push(2,3);
console.log(prices);
let popedValue = prices.pop();
console.log(`poped value is = ${popedValue}`);
console.log(prices);
console.log(`string version of array = ${prices.toString()}`);

console.log(`sub array starting from 2 to 4 ${prices.slice(2,4)}`);
console.log(`want to delete 90 and add 100, 101 in the array so the result is ${prices.splice(1,1,100,101)}`);
console.log(prices);