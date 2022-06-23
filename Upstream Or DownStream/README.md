# Task:
Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

## Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

## Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.
# Solution (JavaScript):
```javascript
function time(distance,boatSpeed,stream){
//Write your own Code!
// Splitted the stream string so I could access the speed at which the stream was going and whether it was upstream or downstream
  let directionAndSpeed = stream.split(' ');
  if(directionAndSpeed[0] == 'Upstream'){
    let finalAnswer = distance / (boatSpeed - 1*directionAndSpeed[1])
    return Number.isInteger(finalAnswer) ? finalAnswer : 1*finalAnswer.toFixed(2)
  } 
  let finalAnswer = distance / (boatSpeed + 1*directionAndSpeed[1])
  return Number.isInteger(finalAnswer) ? finalAnswer : 1*finalAnswer.toFixed(2)
}
```
# Things Learnt:
Haven't been able to get much done lately, there has been a power outage for about three days now. Hopefully things will get better soon.
