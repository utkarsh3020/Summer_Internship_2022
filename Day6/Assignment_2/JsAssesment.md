# Javascript quiz  (Basic Level - 2)

### Theory Questions :

_Q1._ Why do we use functions in JavaScript?<br>
_Ans._ JavaScript provides functions similar to most of the scripting and programming languages. In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A JavaScript function can be defined using function keyword.

```JavaScript
//defining a function
function <function-name>()
{
    // code to be executed
};

//calling a function
<function-name>();
```

_Q2._ What is Function Invocation?<br>
_Ans._ The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function".

**For Example :**
```JavaScript
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);
```

_Q3._ Does a function behave like an object in Javascript? Prove it by an example.<br>
_Ans._ In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.

**For Example :**
```JavaScript
/* Declare the function 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "BMW";
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
const mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'BMW' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);
```
Output : ![5](https://user-images.githubusercontent.com/77887030/178276406-aecd0873-9cc2-4c88-8cfb-797410f1d9b9.PNG)


_Q4._ What are Events in Javascript?<br>
_Ans._ The change in the state of an object is known as an Event.JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.

```html
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
```
<p>In the example above, the JavaScript code changes the content of the element with id="demo".</p>

_Q5._ What is a string?<br>
_Ans._ A JavaScript string stores a series of characters like "John Doe".
A string can be any text inside double or single quotes:
```JavaScript
let carSports = "BMW M3";
let carLuxury = 'Land Rover';
```

_Q6._ What is an array? Is it static or dynamic in Javascript?<br>
_Ans._ An array is a special variable, which can hold more than one value:

```JavaScript
const cars = ["Audi", "Rollce Royes", "BMW"];
```
JavaScript by default gives array as dynamic with predefined functions.

_Q7._ Difference between Map and Set?<br>
_Ans._ <b>Map</b>
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

* Methods and properties are:

    * new Map() – creates the map.
    * map.set(key, value) – stores the value by the key.
    * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    * map.has(key) – returns true if the key exists, false otherwise.
    * map.delete(key) – removes the value by the key.
    * map.clear() – removes everything from the map.
    * map.size – returns the current element count.

<b>Set</b>
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

* Its main methods are:

    * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    * set.add(value) – adds a value, returns the set itself.
    * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    * set.has(value) – returns true if the value exists in the set, otherwise false.
    * set.clear() – removes everything from the set.
    * set.size – is the elements count.

_Q8._ What are array methods? List a few names?<br>
_Ans._ **Array Methods are :**
* <b>JavaScript Array length</b>
    * Returns the number of elements in an array

* <b>JavaScript Array reverse()</b>
    * Returns the array in reverse order

* <b>JavaScript Array sort()</b>
    * Sorts the elements of an array in specific order

* <b>JavaScript Array fill()</b>
    * Returns array by filling elements with given value

* <b>Javascript Array join()</b>
    * Concatenates the array elements to a string

* <b>Javascript Array toString()</b>
    * Returns the string representation of an array

* <b>JavaScript Array pop()</b>
    * Removes and returns the last array element

* <b>JavaScript Array shift()</b>
    * Removes and returns the first array element

* <b>JavaScript Array push()</b>
    * Adds elements to end of array & returns its length

* <b>JavaScript Array unshift()</b>
    * Adds elements to start of array and returns length

* <b>JavaScript Array concat()</b>
    * Returns array by merging given value and/or arrays

* <b>JavaScript Array splice()</b>
    * Returns an array by changing its elements in place

* <b>JavaScript Array lastIndexOf()</b>
    * Returns the last index of occurrence of an element

* <b>JavaScript Array indexOf()</b>
    * Returns the first index of occurrence of element

* <b>JavaScript Array of() Method</b>
    * Creates a new Array instance from given arguments

* <b>JavaScript Array slice()</b>
    * Returns a shallow copy of a portion of an array

* <b>JavaScript Array findIndex()</b>
    * Returns index of element that satisfies condition

* <b>JavaScript Array find()</b>
    * Returns first element that satisfies a condition

* <b>JavaScript Array includes()</b>
    * Checks if a value exists in an array

* <b>Javascript Array reduceRight()</b>
    * Reduces array to single value from right to left

* <b>Javascript Array reduce()</b>
    * Reduces array to single value from left to right

* <b>Javascript Array isArray()</b>
    * Checks if the given value is a JavaScript Array

* <b>Javascript Array filter()</b>
    * Returns array by filtering elements on given test

* <b>JavaScript Array map()</b>
    * Returns array by mapping elements using given func

* <b>Javascript Array forEach()</b>
    * Executes the given function on array elements

* <b>Javascript Array some()</b>
    * Tests if any element passes given test function

* <b>Javascript Array every()</b>
    * Tests if all elements pass the given test function

* <b>Javascript Array entries()</b>
    * Returns iterator containing key/value pair array

* <b>JavaScript Array keys()</b>
    * Returns an iterator containing keys of array items

* <b>JavaScript Array values()</b>
    * Returns iterator containing values of array items

* <b>Javascript Array.from()</b>
    * Creates a new Array from array-like object

* <b>Javascript Array constructor</b>
    * Returns the constructor function for the array

* <b>Javascript Array copyWithin()</b>
    * Copies and overwrites elements within the array

* <b>Javascript Array toLocaleString()</b>
    * Returns string representing the elements of array

* <b>JavaScript Array flat()</b>
    * Flattens the nested array to given depth

* <b>JavaScript Array flatMap()</b>
    * Returns new array by mapping and flattening array

_Q9._ In how many ways can we traverse through an array in Javascript?<br>
_Ans._ There are multiple ways one can iterate over an array in Javascript. The some are mentioned below.<br>
<b>Using for loop :</b>

```JavaScript
array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}
```

<b>Using while loop :</b>

```JavaScript
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
while (index < array.length) {
    console.log(array[index]);
    index++;
}
```

<b>Using forEach method :</b>

```JavaScript
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
array.forEach(myFunction);
function myFunction(item, index)
{
    console.log(item);
}
```

<b>Using every method :</b>

```JavaScript
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
const under_five = x => x < 5;
 
if (array.every(under_five)) {
    console.log('All are less than 5');
}
else {
    console.log('At least one element is not less than 5');
}
```
<b>Using map :</b>

```JavaScript
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
square = x => Math.pow(x, 2);
squares = array.map(square);
console.log(array);
console.log(squares);
```
<b>Using Using Filter :</b>

```JavaScript
array = [ 1, 2, 3, 4, 5, 6 ];
 
even = x => x%2 === 0;
evens = array.filter(even);
console.log(array);
console.log(evens);
```

<b>Using Using Reduce :</b>

```JavaScript
array = [ 1, 2, 3, 4, 5, 6 ];
 
const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);
 
console.log(array)
console.log(sum);
```
<b>Using Some :</b>

```JavaScript
array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
 
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}
```
