# Javascript quiz  (Basic Level - 1) :

### Theory Questions

_Q1._ What is JavaScript?<br>
_Ans._ JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

_Q2._ What is the difference between let and var?<br>
_Ans._ var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

***Example for var :***

```JavaScript
console.log(x);
var x = 9;
console.log(x);
```
Output : ![1](https://user-images.githubusercontent.com/77887030/178274655-1545a317-969f-4c24-a1ee-97752a72107a.PNG)


<br>

***Example for let :***

```JavaScript
console.log(x);
let x = 9;
console.log(x);
```
Output :![2](https://user-images.githubusercontent.com/77887030/178274687-258fa149-fe41-4eca-8ec3-9888f83e21c3.PNG)



_Q3._ Why do we prefer const over var?<br>
_Ans._ Preference of const over var :
* var variables can be updated and re-declared within its scope. const variables can neither be updated nor re-declared.

_Q4._ What is the use of javascript in web browsers?<br>
_Ans._ JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.

_Q5._ What are Objects?<br>
_Ans._ JavaScript objects are containers for named values called properties.
In JavaScript, almost "everything" is an object.

* Booleans can be objects (if defined with the new keyword).
* Numbers can be objects (if defined with the new keyword).
* Strings can be objects (if defined with the new keyword).
* Dates are always objects.
* Maths are always objects.
* Regular expressions are always objects.
* Arrays are always objects.
* Functions are always objects.
* Objects are always objects.

_Q6._ What is an array and how is it different from an Object in Javascript?<br>
_Ans._ An array is a special variable, which can hold more than one value:

```JavaScript
const cars = ["Audi", "Rollce Royes", "BMW"];
```
Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

_Q7._ What is a function?<br>
_Ans._ A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

_Q8._ How can we implement call by value and call by reference in Javascript?<br>
_Ans._ **Call by Value :**

```JavaScript
var x = 8;
var y;

y = x;
x = 3;
console.log(x);
console.log(y);
```
Output: ![3](https://user-images.githubusercontent.com/77887030/178274727-0e33e587-0124-4926-aaa1-1497ce79c0c3.PNG)


**Call by Refrence :**

```JavaScript
var a = { greeting : 'Welcome' };
var b;

b = a;
a.greeting = 'Welcome to JavaScript';
console.log(a);
console.log(b);
```
Output: ![4](https://user-images.githubusercontent.com/77887030/178274779-13d7e6a1-3243-4521-82ff-09463eb5a5e0.PNG)


_Q9._ What are the primitive data types in Javascript?<br>
_Ans._ In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
There are 7 primitive data types: 
* string 
* number
* bigint
* boolean
* undefined
* symbol
* null

_Q10._ What is DOM?<br>
_Ans._ The DOM(Document Object Model) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.

_Q11._ Why do we need DOM?<br>
_Ans._ DOM is uses to interact web page. simply say it used when we need to interact with web pages like ADD/EDIT/DELETE contents on HTML Documents.<br>
The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. In the DOM specification, the term "document" is used in the broad sense - increasingly, XML is being used as a way of representing many different kinds of information that may be stored in diverse systems, and much of this would traditionally be seen as data rather than as documents. Nevertheless, XML presents this data as documents, and the DOM may be used to manage this data.
