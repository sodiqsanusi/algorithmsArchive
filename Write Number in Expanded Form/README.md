# Task:
You will be given a number and you will need to return it as a string in Expanded Form.

For example:
```javascript
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
```
**NOTE:** All numbers will be whole numbers greater than 0.
# Solution (JavaScript):
```javascript
function expandedForm(num) {
  // Your code here
  
let remainder = num % (10 ** (`${num}`.length - 1))
 if(remainder == 0){
   return `${num}`
 }if (num == 0){
   return '' ;
 } if(`${num}`.length == 1){
   return `${num - remainder}`;
 }return (`${num - remainder} + ${expandedForm(remainder)}`)
}
```
# Things Learnt:
Recursives again? Yes😂😂.
