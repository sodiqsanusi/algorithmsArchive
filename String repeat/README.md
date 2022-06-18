# Task:
Write a function that accepts an integer `n` and a string `s` as parameters, and returns a string of `s` repeated exactly `n` times.

Examples (input -> output)
```
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
```
# Solution (JavaScript):
```javascript
function repeatStr (n, s) {
  //Practicing with recursive functions😅
  if(n < 1){
    return ''
  } else{
    return repeatStr(n-1, s) + s;
  }
}
```
# Things Learnt:
Lol, there is an easier way of solving this, decided to practice on writing recursive functions, it's funny right?
