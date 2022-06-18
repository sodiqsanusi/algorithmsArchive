# Task:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer `n` such that `sqrt(n)` is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)
```
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
```
# Solution (JavaScript):
```javascript
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  // A check to know if the input is a perfect square, if it isn't '-1' is returned
  if(!Number.isInteger(Math.sqrt(sq))){
   return -1; 
  }
  // After confirming that the present input is a perfect square, I got the square root, incremented it, then squared it again.
  if(Number.isInteger(Math.sqrt(sq))){
   return (Math.sqrt(sq) + 1)**2; 
  } 
}
```
# Things Learnt:
Still basic stuff.
