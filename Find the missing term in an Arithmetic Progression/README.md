# Task:
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
```javascript 
findMissing([1, 3, 5, 9, 11]) == 7
```
# Solution (JavaScript):
```javascript
var findMissing = function (list) {  
  let commonDifference = (list[list.length - 1] - list[0]) / list.length ;
  for(let i = 1; i < list.length; i++){
    if(!(list[i] == (list[i - 1] + commonDifference))){
      return list[i - 1] + commonDifference;
    }
  }
}
```
# Things Learnt:
Solving this was funny😂😂. I did the maths calculations first, derived the formula, then added some logic to create the algorithm. I'm still on FreeCodeCamp's algorithm course, will start learning on "Regular Expressions" soon
