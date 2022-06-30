# Task:
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
# Solution (JavaScript):
```javascript
function binaryAgent(str) {
  let lilac = str.split(' ').map(l => parseInt(l, 2));
  return String.fromCharCode(...lilac);
}
```
-------
## Test Cases:
```javascript
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // Aren't bonfires fun!?
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // I love FreeCodeCamp!
```
# Things Learnt:
First time using the `.fromCharCode()` method, JavaScript has lots and lots of methods😭. Though I know it's not possible to memorize ALL of them, I still feel my knowledge of JavaScript methods is sub-level. Will try my best in working on that tho.
