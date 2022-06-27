# Task:
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.
# Solution (JavaScript):
```javascript
function sumAll(arr) {
  let lilac = arr.sort((a,b) => a - b)
  let total = 0;
  for(let i = lilac[0]; i <= lilac[1]; i++){
    total += i
  }
  return total
}

sumAll([1, 4]);
```
# Things Learnt:
Haven't been solving algorithms lately because I've been trying to focus on finishing my freeCodeCamp algorithm course. I'm almost done with it at the moment, so hopefully I'll be contributing more🤞🏾🤞🏾
