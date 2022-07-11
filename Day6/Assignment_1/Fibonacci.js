const num = parseInt(prompt('Enter the number: '));
let n1 = 0, n2 = 1, nextNum;

console.log('Fibonacci Series for given number is:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}