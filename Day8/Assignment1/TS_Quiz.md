# Typescript quiz (Basic Level -1) 

## **Theory Questions :**

_Q1._ What are the basic data types in TypeScript?<br>
_Ans._ Some <b>Basic Data Types in TypeScript</b> are:

* <h3>Boolean -</h3>

    * The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

    ```TypeScript
    let isDone: boolean = false;
    ```
* <h3>Number -</h3>

    * As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint.

    ```TypeScript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```
* <h3>String -</h3>

    * Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

    ```TypeScript
    let carColor: string = "blue";
    carColor = 'red'
    ```
* <h3>Array -</h3>

    * TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

    ```TypeScript
    let list: number[] = [1, 2, 3, 4, 5, 6];
    ```
* <h3>Any -</h3>

    * In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:

    ```TypeScript
    declare function getValue(key: string): any;
    const str: string = getValue("myString");
    ```
* <h3>Void -</h3>

    * void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

    ```TypeScript
    function greetUser(): void {
    console.log("Hello Welcome to TypeScript");
    }
    ```
* <h3>Null and Undefined -</h3>
    * In TypeScript, both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

    ```TypeScript
    let u: undefined = undefined;
    let n: null = null;
    ```
* <h3>Object -</h3>
    * object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

    * With object type, APIs like Object.create can be better represented. For example:

    ```TypeScript
    create({ prop: 0 });
    create(null);
    create(undefined);

    //Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
    ```

_Q2._ What is Generic data type?<br>
_Ans._ According to TypeScript documentation Generics are explained as **“being able to create a component that can work over a variety of types rather than a single one.**

```TypeScript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

_Q3._ What is type inferring in TS?<br>
_Ans._ In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. 
**For example:**

```TypeScript
let a = 50;
```

```TypeScript
function Div(x: number, y: number) {
  return x / y;
}

let add: number = Div(10, 20); // Compiled.
let subtract: string = Div(10, 20); // Error Type 'number' is not assignable to type 'string'.
```

_Q4._ What are the possible ways to define typing for functions?<br>
_Ans._ There are multiple ways to define types for functions:

1. Method Signatures:

    * The method signature syntax is the most straight forward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

    ```TypeScript
    interface Date {
    toString(): string;
    setTime(time: number): number;
    }
    ```

2. Function Type Literals:

    * This type of function typing is typically used in the signature of a higher-order function i.e. a function which accepts functions as parameters or returns a function.

    ```TypeScript
    interface Array<T> {
    sort(compareFn?: (a: T, b: T) => number): this;
    }
    ```


3. Object Type Literals With Call or Construct Signatures:

    * This is same as the fact that functions in JS are just special objects that can be called again and again.

    ```TypeScript
    interface RegExpConstructor {
    (pattern: RegExp): RegExp;
    (pattern: string, flags?: string): RegExp;
    }
    ```

_Q5._ How to define Generic type for Classes?<br>
_Ans._ To do this we can use the generic type parameter in '< >' brackets.

**For example:**

```TypeScript
class StudentInfo<T, U> {
  private Id: T;
  private Name: U;

  setValue(id: T, mame: U): void {
    this.Id = id;
    this.Name = name;
  }

  display(): void {
    console.log(`Id = ${this.Id}, Name = ${this.Name}`);
  }
}

let student1 = new StudentInfo<number, string>();
student1.setValue(101, "Hardik");
student1.display();
```


***

## **Program -**
_Q1._ Define the types in typescript for the given following JavaScript code.Todo:
* Define type/interface for a single Todo object.
* Define type for each function.
* Do not use `any` (TS Data Type) type of typescript.

```JavaScript
var todos = [];
function add(eName, eId) {
  return todos.push({ eName: eName, eId: eId, done: false });
}
function remove(index) {
  return todos.splice(index, 1);
}
function list() {
  todos.forEach(function (todo, index) {
    console.log(index + " -" + todo.eName);
  });
}
function update(index, eName, eId) {
  todos[index].eName = eName;
  todos[index].eId = eId;
  return todos[index];
}
```

**Solution:**

```TypeScript
class Employee {
  eName: string;
  eId: number;
  done: boolean;
}

var todos: Employee[] = [];

function add(eName: string, eId: number): number {
  return todos.push({
    eName: eName,
    eId: eId,
    done: false,
  });
}

function remove(index: number): Employee[] {
  return todos.splice(index, 1);
}

function list(): void {
  todos.forEach(function (todo: Employee, index: number) {
    console.log(index + " - " + todo.eName);
  });
}

function update(index: number, eName: string, eId: number): Employee {
  todos[index].eName = eName;
  todos[index].eId = eId;
  return todos[index];
}

console.log(add("Update your profile by", 25)); //1
list();  // 0 - Update your profile by
```
