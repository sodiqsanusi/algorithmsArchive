# Task:
You will be provided with an initial array (the first argument in the `destroyer` function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the `arguments` object.
# Solution (JavaScript):
```javascript
// Put all parameters that could be inputted in an array using the rest operator
function destroyer(arr, ...tbremoved) {
// filtered and removed
  return arr.filter(l => tbremoved.indexOf(l) < 0)
}
```
# Things Learnt:
Lol, used a one-liner here. I'm feeling like I should take a more advanced DSA course, maybe on Udemy. Later though.
