# Task:
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1. your referral bonus, and

2. the price of a beer can

For example:
```javascript
beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
```
# Solution (JavaScript):
```javascript
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
// Got the number of beer cans possible to get from the input given
  let noOfCans = bonus / price;
  let level = 1;
// The loop checks if the available cans of beer can build a level in the pyramid. 
// If true, it subtracts the number of cans needed for the present pyramid level from the total number of pyramids. 
  while((level ** 2) <= noOfCans){
    noOfCans -= (level ** 2)
    level++
  }
  return level - 1;
}
```
# Things Learnt:
Just used logic here, was fun😊😊.
