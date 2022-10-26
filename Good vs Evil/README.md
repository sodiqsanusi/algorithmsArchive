# Task:
[https://www.codewars.com/kata/52761ee4cffbc69732000738](https://www.codewars.com/kata/52761ee4cffbc69732000738)
# Solution (JavaScript):
```javascript
function goodVsEvil(good, evil){
  let goodMarks = [1,2,3,3,4,10]
  let evilMarks = [1,2,2,2,3,5,10]
  let totalGood = good.split(' ').map((num, index) => num * goodMarks[index]).reduce((a,b) => a + b)
  let totalEvil = evil.split(' ').map((num, index) => num * evilMarks[index]).reduce((a,b) => a + b)
  if(totalGood > totalEvil) return "Battle Result: Good triumphs over Evil"
  if(totalEvil > totalGood) return "Battle Result: Evil eradicates all trace of Good"
  return "Battle Result: No victor on this battle field"
}
```

# Things Learnt:
Couldn't get this when I first tried it due to lack of understanding the task itself. Time spent understanding a task is time well spent.
