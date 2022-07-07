// Declare variables for sides
var a = 5; 
var b = 6; 
var c = 7; 

// for semi perimeter
var s = (a + b + c)/2;

// for area
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));

console.log(area);
