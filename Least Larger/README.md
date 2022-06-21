# Task:
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or `-1` if there is no such index.

## Notes
Multiple correct answers may be possible. In this case, return any one of them. <br>
The given index will be inside the given array. <br>
The given array will, therefore, never be empty.

## Example
```javascript
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
```
# Solution (JavaScript):
```javascript
function leastLarger(a,i) {
// This filters the input array and selects the array elements that are greater than the element specified with the index.
  let lilac = a.filter(num =>  num > a[i])
// The new array of selected items are sorted in ascending order. I then selected the first element of that array
  let leastLarger = lilac.sort((a, b) => a - b)[0];
// Checked the selected number's index in the input array, then returned it.
  return a.indexOf(leastLarger);
}
```
# Things Learnt:
The `Array.prototype.sort()` method. I didn't know it converted the elements to string before sorting them out in order. This created a bug for me, and I solved it by using a compare function that sorted the elements in the right order I wanted. 
