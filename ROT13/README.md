# Task:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
# Solution (JavaScript):
```javascript
function rot13(message){
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
  let newNum = (char) => {
    return (alphabet.indexOf(char) + 13) > 25 ? (alphabet.indexOf(char) + 13) % 25 - 1 : (alphabet.indexOf(char) + 13)
  }
  let result = [...message].map(l => {
    if(/[^a-zA-Z]/.test(l)) return l;
    if (l == l.toUpperCase()){
      return alphabet[newNum(l.toLowerCase())].toUpperCase();
    }
    return alphabet[newNum(l)]
  })
  return result.join('')
}
```
# Things Learnt:
Saw a so so much better way to solve this using a very logical `regex` replace method.
```javascript
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
```
I'm feeling so dumb😭.
