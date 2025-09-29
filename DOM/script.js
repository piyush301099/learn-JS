/*
Note:
- IMP:
    - when we write script tag in head tag then our JS script will load before body of the page, so in this case if we try to access body object like "document.body" will give you NULL, as body is not yet created when script load.
    - so if we want to access body elements in the JS we have to mention script tag in the body before closing tag.
- Good to Have:
    - console.log() is use to print things in the console
    - console.dir(obj); this is use to print methods and properties of special objects like "document"
        - eg: console.dir(window.document); // this will print all functions and properties of document object
- window object:
    - in JS we have one global object called "window".
    - this contain lots of methods and attributes like console.log(), alert(), prompt(), etc
    - we do not specify this object explicitly, browser will create this for us
    - it has global scope.
    - if you write window.alert("test"); this will not give error as alert is a part of window object, but in normal code we do not mention window in the statement, we directly write alert("test")

- DOM:
    - Document Object Model, this will be created by the browser when page loads in the browser.
    - so all the element defined in the HTML file can be accessed in the JS file by using one sub object in the "window" object called "document"
- access elements in the JS:
    - select element using id:
        - as per coding standards id of each element should be unique.
        - in css file to apply style for the id we use #myID{//your styling}
        - document.getElementById("myID"); // this will give you the element whose id is myID.
    - select element by class:
        - class usually used when you have to group the multiple elements for styling.
        - in css file to apply style for the class we use .myClass{// your style}
        - document.getElementByClassName("myClass");// this will give you all the elements whose class is myClass
    - select element by tag:
        - will use this when we want to get the HTMLCollection of all element using same tag, like all <p>, <h1>, etc.
        - document.getElementByTagName("p");
    - get elements by query selector:
        - to get 1st occurance of the element:
            - document.querySelector(id or class or tag);// this will give you the 1st occurred element which matches to the defined id or class or tag.
        - to get all the element which matched to the defined id or class or tag:
            - document.querySelectorAll(id or class or tag);
        - Note:
            - here when we mention class name then we have to use . as prefix eg .myClass.
            - ans when we mention id then wehave to use # as prefix eg #myID
    - Note:
        - we try to access id which is not there in the HTML code then will get null value.
        - we try to access class which is not there in the HTML then will get empty HTMLCollection.
- Properties:
    - tagName: this will return tag of the element
        - eg document.querySelector(".myClass").tagName;
    - innerText: this will return text of the element ans it's child
        - eg document.querySelector("div").innerText; // this
*/
let getElementsByID = document.getElementById("myID");
console.dir(getElementsByID);

let getElementsByClass = document.getElementsByClassName("myClass");
console.dir(getElementsByClass);

let firstIDElement = document.querySelector("#myID");
console.dir(firstIDElement);

let firstclassElement = document.querySelector(".myClass");
console.dir(firstclassElement);

let allElements = document.querySelectorAll("p");
console.dir(allElements);

console.dir(document.querySelector(".myClass").tagName); // this will return tagName of the element

console.log(document.querySelector("div").innerText);// this will return text content of the element
console.dir(document.querySelector("div").innerHTML); // this will return whole HTML structure if the element and it's child

