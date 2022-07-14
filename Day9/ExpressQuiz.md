# Express Quiz 

## **Theory Questions** 

_Q1._ What is NodeJS?<br>
_Ans._ Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

**For Example:**
```js
// Basic Hello World Program

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

_Q2._ What is V8 Engine?<br>
_Ans._V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.

_Q3._ What is Event Loop in NodeJS?<br>
_Ans._The event loop is what ***allows Node. js to perform non-blocking I/O operations*** — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
<p>When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.</p>

_Q4._ What is the use of tsconfig.json file?<br>
_Ans._The tsconfig. json file ***specifies the root files and the compiler options required to compile the project.*** JavaScript projects can use a jsconfig. json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

_Q5._ What are the methods provided by `fs` module to manipulate files?<br>
_Ans._ <h3>The Node.js fs module</h3>
* The `fs` module provides a lot of very useful functionality to access and interact with the file system.
* There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it below:

```js
const fs = require('fs');
```

Methods which `fs module` includes are:

* `fs.access()`: check if the file exists and Node.js can access it with its permissions
* `fs.appendFile()`: append data to a file. If the file does not exist, it's created
* `fs.chmod()`: change the permissions of a file specified by the filename passed. Related: `fs.lchmod()`, `fs.fchmod()`
* `fs.chown()`: change the owner and group of a file specified by the filename passed. Related: `fs.fchown()`, `fs.lchown()`
* `fs.close()`: close a file descriptor
* `fs.copyFile()`: copies a file
* `fs.createReadStream()`: create a readable file stream
* `fs.createWriteStream()`: create a writable file stream
* `fs.link()`: create a new hard link to a file
* `fs.mkdir()`: create a new folder
* `fs.mkdtemp()`: create a temporary directory
* `fs.open()`: opens the file and returns a file descriptor to allow file manipulation
* `fs.readdir()`: read the contents of a directory
* `fs.readFile()`: read the content of a file. Related: `fs.read()`
* `fs.readlink()`: read the value of a symbolic link
* `fs.realpath()`: resolve relative file path pointers (., ..) to the full path
* `fs.rename()`: rename a file or folder
* `fs.rmdir()`: remove a folder
* `fs.stat()`: returns the status of the file identified by the filename passed. Related: `fs.fstat()`, `fs.lstat()`
* `fs.symlink()`: create a new symbolic link to a file
* `fs.truncate()`: truncate to the specified length the file identified by the filename passed. Related: `fs.ftruncate()`
* `fs.unlink()`: remove a file or a symbolic link
* `fs.unwatchFile()`: stop watching for changes on a file
* `fs.utimes()`: change the timestamp of the file identified by the filename passed. Related: fs.futimes()
* `fs.watchFile()`: start watching for changes on a file. Related: `fs.watch()`
* `fs.writeFile()`: write data to a file. Related: `fs.write()`

_Q6._ What is API?<br>
_Ans._ API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software. **or** An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build or use such a connection or interface is called an API specification.

![image](https://user-images.githubusercontent.com/77887030/179026414-8f473837-4a36-4810-9968-07deaca00e60.png)


_Q7._ What is JSON format?<br>
_Ans._ JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
<p>It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). You'll come across it quite often, so in this article we give you all you need to work with JSON using JavaScript, including parsing JSON so you can access data within it, and creating JSON.</p>

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

_Q8._ Why we use JSON format for API?<br>
_Ans._ ***JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.*** It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs.

Here’s an example response from a blog that implements JSON:API:

```json
{
  "links": {
    "self": "http://example.com/articles",
    "next": "http://example.com/articles?page[offset]=2",
    "last": "http://example.com/articles?page[offset]=10"
  },
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!"
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/articles/1/relationships/author",
          "related": "http://example.com/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      },
      "comments": {
        "links": {
          "self": "http://example.com/articles/1/relationships/comments",
          "related": "http://example.com/articles/1/comments"
        },
        "data": [
          { "type": "comments", "id": "5" },
          { "type": "comments", "id": "12" }
        ]
      }
    },
    "links": {
      "self": "http://example.com/articles/1"
    }
  }],
  "included": [{
    "type": "people",
    "id": "9",
    "attributes": {
      "firstName": "Dan",
      "lastName": "Gebhardt",
      "twitter": "dgeb"
    },
    "links": {
      "self": "http://example.com/people/9"
    }
  }, {
    "type": "comments",
    "id": "5",
    "attributes": {
      "body": "First!"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "2" }
      }
    },
    "links": {
      "self": "http://example.com/comments/5"
    }
  }, {
    "type": "comments",
    "id": "12",
    "attributes": {
      "body": "I like XML better"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    },
    "links": {
      "self": "http://example.com/comments/12"
    }
  }]
}

```

_Q9._ What is a Framework?<br>
_Ans._ **A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.**

<h2>Why do we use frameworks?</h2>
Using frameworks saves time and reduces the risk of errors. You don't need to write everything from the ground up, so there's less chance of introducing errors. Plus, frameworks have already been tested, so there's less to worry about. Other advantages include:

* More secure code
* Simpler testing and debugging
* Avoiding duplicate code
* Clean and easily adaptable code
* Able to focus on writing code specific to the project
* Can be extended
* Types of frameworks
* Frameworks can be used for developing websites, mobile applications, data science, and more. Here are some of the more popular frameworks:

**<h3>Web application frameworks</h3>**
* `AngularJS` is a front-end JavaScript framework. It's one of the most popular web frameworks and is backed by an enthusiastic community.

* `AngularJS` was developed and is supported by Google. It includes features like two-way data binding, which reduces development time, and dependency injections, making it easier for different pieces of code to interact with each other.

* `Django` is an open-source web development framework supported by the Django Software Foundation. It's written in Python, a popular programming language, and is designed to encourage "rapid development and clean, pragmatic design." It's fast, secure, and scalable.

* `Rails` is also an open-source framework. It's written in the Ruby programming language, which was designed for ease of use. Rails is designed to involve less code and less repetition and is supported by a large community. It's been used to develop sites like Airbnb, Twitch, and Hulu.

* `Express` is a back-end framework for Node.js that allows you to start and configure a server with very little overhead. It's free, open-source, and is written in JavaScript. Express has a reputation for being extremely flexible. It's fairly minimalist, and developers have created middleware packages to address web development issues.

**<h3>Mobile development frameworks</h3>**
* `Flutter` is Google's open-source framework. It supports iOS and Android and has fully customizable widgets.

* `Flutter` is designed to speed up app development and create attractive, user-friendly apps. It uses a thin layer of C/C++ code, but most of its system is in Dart.

* `Xamarin` is a popular .NET-based framework by Microsoft. It also supports iOS and Android and has a community of 60,000 contributors.

* `React Native` was developed by Facebook. It's open-source, cross-platform, and written in JavaScript. It's used in many popular apps, including Discord, Instagram, and Shopify.

* `NativeScript` is an open-source, cross-platform framework. NativeScript apps are built using JavaScript, and it supports other JavaScript frameworks like Angular and Vue. It's popular for its robust back-end support.

* `Ionic` is another open-source, cross-platform framework. It uses JavaScript, HTML, and CSS, and it includes a library of mobile-optimized UI components, gestures, and tools. Ionic builds fast apps and integrates with front-end frameworks like Angular and Vue.


_Q10._ How an HTTP Communication works?<br>
_Ans._HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.

<p>Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. Client devices send requests to servers for the resources needed to load a web page; the servers send responses back to the client to fulfill the requests. Requests and responses share sub-documents -- such as data on images, text, text layouts, etc. -- which are pieced together by a client web browser to display the full web page file.</p>
https://cdn.ttgtmedia.com/rms/onlineimages/whatis-how_http_works.png


_Q11._ What is Middleware in ExpressJS?<br>
_Ans._ **Middleware** functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

The following figure shows the elements of a middleware function call:
![image](https://user-images.githubusercontent.com/77887030/179026473-a4a7abf1-d49d-4412-9c67-dc07afa13bab.png)
