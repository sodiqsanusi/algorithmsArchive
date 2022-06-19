# Task:
Welcome. In this task, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9² is 81 and 1² is 1.

Note: The function accepts an integer and returns an integer
# Solution (JavaScript):
```javascript
function squareDigits(num){
  let arrayOfNumbers = [...`${num}`];
  let total = [];
  for(let i = 0; i < arrayOfNumbers.length; i++){
    total.push(arrayOfNumbers[i]**2)
  }
  return parseInt(total.join(''));
}
```
# Things Learnt:
Still basic stuff, the fundamentals are important to learn I guess.
