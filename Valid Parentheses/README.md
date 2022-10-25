# Task:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return `true` if the string is valid, and `false` if it's invalid.

## Examples
```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```
## Constraints
`0 <= input.length <= 100`
# Solution (JavaScript):
```javascript
function validParentheses(parens) {
  let final = 0
  for(let char of parens){
    if(char == '('){
      final++
    }else{
      final--
    }
    if(final < 0) return false
  }
  return final > 0 ? false : true
}
```

# Things Learnt:
Not to doubt myself. Wasn't expecting the solution I came up with in my head to work, just decided to try it. Imagine my surprise when it actually passed all the test cases, in one trial!
