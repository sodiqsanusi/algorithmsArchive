# Task:
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
# Solution (JavaScript):
```javascript
function uniteUnique(...arr) {
  let test = new Set(arr.flat())
  return [...test]
}
```
-------
## Test Cases:
```javascript
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) // [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]) // [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) // [1, 3, 2, 5, 4].
```
# Things Learnt:
This was surprisingly easy to do, progress maybe?
