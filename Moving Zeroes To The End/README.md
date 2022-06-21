# Task:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
```javascript
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```
# Solution (JavaScript):
```javascript
function moveZeros(arr) {
// Duplicated all the zeroes into an array of their own
  let arrayOfZeroes = arr.filter(element => element === 0)
// Then removed the redundant zeroes 
  let normalArray = arr.filter(element => element !== 0)
// Joined the array of zeroes to the end of the array with all zeroes removed
  return normalArray.concat(arrayOfZeroes);
}
```
# Things Learnt:
I'm enjoying this `.filter()` array method😅😅.
