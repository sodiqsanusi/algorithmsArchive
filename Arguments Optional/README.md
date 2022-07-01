# Task:
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.

Calling this returned function with a single argument will then return the sum:
```javascript
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) // 5.
```
If either argument isn't a valid number, return `undefined`.


# Solution (JavaScript):
```javascript
function addTogether(...lilac) {
  if(!lilac.every(l => Number.isInteger(l))) return undefined;
  if(lilac.length > 1) return lilac.reduce((acc, pre) => acc + pre);
  let newFunc = (y) => {
    if (!Number.isInteger(y)) return undefined
    return lilac[0] + y
  }
  return newFunc;
}
```
-------
## Test Cases:
```javascript
addTogether(2, 3) // 5.
addTogether(23, 30) // 53.
addTogether(5)(7) // 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // undefined.
addTogether(2, "3") // undefined.
addTogether(2)([3]) // undefined.
addTogether("2", 3) // undefined.
```
# Things Learnt:
Currying! First time using it in an algorithm.
