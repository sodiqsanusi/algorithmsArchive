# Task:
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`.

In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or `[]` notation.
# Solution (JavaScript):
```javascript
function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++){
    if(!collection[i][pre]) return false
  }
  return true
}
```
-------
## Test Cases:
```javascript
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") // false.
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name") // true.
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role") // false.
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number") // true.
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught") // false.
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number") // false.
truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username") // false.
truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users") // true.
truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data") // true.
truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id") // false.
```
# Things Learnt:
Nothing much actually. Just logic and vibes literally.
