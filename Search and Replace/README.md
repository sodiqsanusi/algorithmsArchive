# Task:
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

**Note:** Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word `Book` with the word `dog`, it should be replaced as `Dog`
# Solution (JavaScript):
```javascript
function myReplace(str, before, after) {
  let after1 = after;
  if(before[0] == before[0].toUpperCase()){
    after1 = after[0].toUpperCase(0) + after.slice(1)
  } else {after1 = after[0].toLowerCase(0) + after.slice(1)}
  return (str.replace(before, after1))
}
```
-------
## Test Cases:
```javascript
myReplace("Let us go to the store", "store", "mall") // Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") // I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") // This has a spelling error.
myReplace("His name is Tom", "Tom", "john") // His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") // Let us get back to more Algorithms.
```
# Things Learnt:
Just logic also. Been having power issues where I stay, with only two hours of electricity per day. This has affected how long I'm able to code daily. Working on moving to a better place, but that will be after June 10. 
