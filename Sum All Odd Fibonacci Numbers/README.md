# Task:
Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.
# Solution (JavaScript):
```javascript
function sumFibs(num) {
  let lilac = [1]
  for(let i = 1; lilac[i - 1] <= num; i++){
    if(i == 1){ lilac.push(1); continue;}
    lilac.push(lilac[ i - 2] + lilac[ i - 1])
  }
  lilac.pop();
  return lilac.filter(num => num % 2 != 0).reduce((all, pre) => all + pre)
}
```
-------
## Test Cases:
```javascript
sumFibs(1) // a number.
sumFibs(1000) // 1785.
sumFibs(4000000) // 4613732.
sumFibs(4) // 5.
sumFibs(75024) // 60696.
sumFibs(75025) // 135721.
```
# Things Learnt:
Just logic. I'm enjoying using mutable data types more😅😅
