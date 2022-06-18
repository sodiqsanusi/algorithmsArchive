# Task:
Implement the function uniqueInOrder which takes an argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
```javascript
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```
# Solution (JavaScript):
```javascript
var uniqueInOrder=function(iterable){
//your code here - remember iterable can be a string or an array
let lilac = [...iterable]
let test = []
for(let i = 0; i< lilac.length ; i++){
  if(i == 0){
    test.push(lilac[i])
    continue;
  }if (lilac[i] == lilac[i -1]){
    continue;
  }else{
    test.push(lilac[i])
  }
}
return test;
}
```
# Things Learnt:
I'm still working on my basic knowledge, didn't really use any new method or statement in this solution. Although I saw a better way of solving the task later.
