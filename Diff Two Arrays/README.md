# Task:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
# Solution (JavaScript):
```javascript
function diffArray(arr1, arr2) {
// Joined both input arrays together, then removed all repeated values in it. Returned an array.
  let fullArray = [...new Set(arr1.concat(arr2))];
// Filtered through both input arrays individually to get elements that weren't in them, but was in the joint array
  let violet = fullArray.filter(l => arr1.indexOf(l) < 0)
  let lilac = fullArray.filter(l => arr2.indexOf(l) < 0);
// Returned the elements got from the filtering above in an array.
  return violet.concat(lilac);
}
```
# Things Learnt:
Still basic stuff.
