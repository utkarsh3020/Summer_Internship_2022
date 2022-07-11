const num = [12,5,19,2,55];

// For Ascending
var asc = num.sort(function(a, b){return a-b});
console.log("The numbers after Ascending", asc);

// For Descending
var desc = num.sort(function(a, b){return b-a});
console.log("The numbers after Descending", desc);