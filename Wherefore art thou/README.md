# Task:
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is
```javascript
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
```
, and the second argument is 
```javascript
{ last: "Capulet" }
```
, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
# Solution (JavaScript):
```javascript
function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let lilac = Object.keys(source);
  for(let i = 0; i < collection.length; i++){
    for(let j = 0; j < lilac.length; j++){
      if(!(collection[i][lilac[j]] ==  source[lilac[j]])) break;
      if(j == lilac.length - 1){
      if(collection[i][lilac[j]] ==  source[lilac[j]]) arr.push(collection[i])
    }}
  }
  // Only change code above this line
  return arr;
}
```
# Things Learnt:
Whew! This was surprisingly hard to get, had to take a break after resetting my algorithms for like four(4) times. I pray I get better than this, this stuff is supposed to be easy nau😭😭. Will keep solving tho💪🏾💪🏾
