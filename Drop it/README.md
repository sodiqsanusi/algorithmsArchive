# Task:
Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.
# Solution (JavaScript):
```javascript
function dropElements(arr, func) {
  let lilac = arr.filter(func)
  if(lilac.length == 0) return lilac;
  return arr.slice(arr.indexOf(lilac[0]));
}
```
-------
## Test Cases:
```javascript
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) // [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // [3, 9, 2].
```
# Things Learnt:
Finishing the freeCodeCamp certification is a priority now, expect more commits here.
