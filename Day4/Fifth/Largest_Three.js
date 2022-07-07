// Declare function for largest of three integer
function max_of_three(a, b, c) 
{
  max_val = 0;
  if (a > b)
  {
    max_val = a;
  } 
  else
  {
    max_val = b;
  }
  if (c > max_val) 
  {
    max_val = c;
  }
  return max_val;
}

console.log(max_of_three(9,0,1));
console.log(max_of_three(0,-80,-150));
console.log(max_of_three(1024,512,256));
