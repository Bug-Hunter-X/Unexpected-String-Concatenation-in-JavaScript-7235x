function foo(a, b) {
  //Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input'; //Handle non-numeric input
  }
}

console.log(foo(1, '2')); // Output: Invalid input
console.log(foo(1,2)); // Output: 3

//Alternative using type conversion
function foo2(a, b) {
  return Number(a) + Number(b);
}

console.log(foo2(1, '2')); // Output: 3
console.log(foo2('1','2')); // Output: 3
//Note that this conversion would lead to NaN if input is not convertible to number.