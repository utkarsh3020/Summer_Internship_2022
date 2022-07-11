//1. The join() method returns an array as a string.

//2. The join() method does not change the original array.

//3. Any separator can be specified. The default is comma (,).

const a = [ 1, 2, 3, 4, 5, 6 ]; 
let symbol = a.join('|');

console.log(symbol);
