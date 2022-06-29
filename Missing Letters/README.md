# Task:
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return `undefined`.
# Solution (JavaScript):
```javascript
function fearNotLetter(str) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let test = [...str]
  let num = alphabet.indexOf(test[0])
  for(let i = 0; i < test.length; i++){
    if(test[i] != alphabet[num]) return alphabet[num]
    num++
  }
  return undefined;
}
```
-------
## Test Cases:
```javascript
fearNotLetter("abce") // d.
fearNotLetter("abcdefghjklmno") // i.
fearNotLetter("stvwx") // u.
fearNotLetter("bcdf") // e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") // undefined.
```
# Things Learnt:
After solving the task, I checked on better ways to solve this and discovered the `.charCodeAt()` string method! This is a method that can prove to be very useful btw, will try using it in a task soon to experiment on ways it can be used. 
