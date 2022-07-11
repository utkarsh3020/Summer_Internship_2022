// Declare two sets
const s = new Set([1,2,3]);
const t = new Set([4,5,6]);

t.forEach(s.add, s); //Adding set using forEach method
console.log(s);