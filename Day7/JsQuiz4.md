# Javascript quiz  (Basic Level 4)

## <b>Theory Questions</b>

_Q1._ What are anonymous functions in JavaScript?<br>
_Ans._ Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

<b>Syntax:</b>

```JavaScript
function() {
    // Function Body
}
```
<p>Anonymous function can also declare using arrow function technique which is shown below:</p>

```JavaScript
( () => {
    // Function Body
} )();
```

***For Example:***

```JavaScript
const greets = function () {
    console.log("Welcome to JavaScript Programming!");
};
greets();
```

```JavaScript
const greets = () =>{
    console.log("Welcome to JavaScript Programming!");
}
greets();
```
**Output:** The Output of both will be same -
![1](https://user-images.githubusercontent.com/77887030/178469608-fad4f302-bb98-47b6-814c-f40e473f6d57.PNG)


_Q3._ Difference b/w arrow functions and regular functions?<br>
_Ans._ While both regular and arrow functions work in a similar manner, yet there are certain interesting differences between them, as discussed below.

* **Syntax :**

Syntax of regular functions:-

```JavaScript
let x = function function_name(parameters){
   // body of the function
};
```
Example of regular functions:

```JavaScript
let square = function(x){
  return (x*x);
};
console.log(square(9));
```

The syntax of arrow functions:

```JavaScript
let x = (parameters) => {
    // body of the function
};
```

Example of arrow functions:

```JavaScript
var square = (x) => {
    return (x*x);
};
console.log(square(9));
```

* **Use of this keyword :**
    * Unlike regular functions, arrow functions do not have their own this.
**For example:** 
```JavaScript
let user = {
    name: "JavaScript",
    xyz:() => {
        console.log("hello " + this.name); // no 'this' binding here
    },
    abc(){       
        console.log("Welcome to " + this.name); // 'this' binding works here
    }  
 };
user.xyz();
user.abc();
```

* **Availability of arguments objects :**
    * Arguments objects are not available in arrow functions, but are available in regular functions.

**Example using regular () :**
```JavaScript
let user = {      
    show(){
        console.log(arguments);
    }
};
user.show(1, 2, 3);
```

**Example using arrow () :**
```JavaScript
let user = {     
        show_ar : () => {
        console.log(...arguments);
    }
};
user.show_ar(1, 2, 3);
```

* **Using new keyword :**
    * Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. 
    * Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. 
    * Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.

**Example using regular function:**

```JavaScript
let x = function(){
    console.log(arguments);
};
new x =(1,2,3);
```

**Example using arrow function:**
```JavaScript
let x = ()=> {
    console.log(arguments);
};
new x(1,2,3);
```

_Q4._ What is Hoisting in JavaScript?<br>
_Ans._ JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

> <p>One of the advantages of hoisting is that it lets you use a function before you declare it in your code.</p>

```JavaScript
carName("Aston Martin");

function carName(name) {
  console.log("My car's name is " + name);
}
/*
The result of the code above is: "My car's name is Aston Martin"
*/
```

> <p>Without hoisting you would have to write the same code like this:</p>

```JavaScript
function carName(name) {
  console.log("My car's name is " + name);
}

carName("Aston Martin");
/*
The result of the code above is the same: "My car's name is Aston Martin"
*/
```

_Q5._ JavaScript is a garbage collected programming language, explain how?<br>
_Ans._ Some high-level languages, such as <b>JavaScript</b>, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

The majority of memory management issues occur when we try to release the allocated memory. The main concern that arises is the determination of unused memory resources. In case of the low-level languages where the developer has to manually decide when the memory is no longer needed, high-level languages such as <b>JavaScript</b> use an automated form of memory management known as <b>Garbage Collection(GC)</b>.

_Q6._ Explain Shallow copy vs Deep copy in Javascript?<br>
_Ans._ **Shallow Copy:** 
* When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. 
* In simple words, a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. 
* Means both the old and new reference variable point to the same object in memory. 
* As a result if the state of the object changes through any of the reference variables it is reflected for both. Let us take an example to understand it better.

```JavaScript
var employee = {
    eId: "405",
    eName: "John",
    eAddress: "America",
    salary: 90000
}
 
 
console.log("Employee=> ", employee);
var newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);
 
console.log("---------After modification----------");
newEmployee.eName = "Rahul";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.
```

**Deep Copy:** 
* Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object. 
* In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected.
* Also, if one of the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.

```JavaScript
var employee = {
    eId: "405",
    eName: "John",
    eAddress: "America",
    salary: 90000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.eName = "Bhavik";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```

_Q7._ What is Object.freeze?<br>
_Ans._ A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.

> freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

<b>Syntax:</b>
> Object.freeze(obj)

**For Example:**
```JavaScript
const obj = {
  num: 82
};

Object.freeze(obj);

obj.num = 52;
// Throws an error in strict mode

console.log(obj.num);
// expected output: 82
```

***


## <b>Program -</b>

_Q1._ Write a function that generates a random number between two ranges, -100 to 0 and800 - 900.

_Solution:_

```JavaScript
function radomInRange(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndNum1 = radomInRange(-100, 0);
const rndNum2 = radomInRange(800, 900);
console.log(rndNum1);
console.log(rndNum2);
```

**Output:** ![2](https://user-images.githubusercontent.com/77887030/178469542-6570d331-c341-4ac3-b789-423af1093b7e.PNG)
