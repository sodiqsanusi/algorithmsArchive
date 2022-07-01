# Task:
Fill in the object constructor with the following methods below:
```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
# Solution (JavaScript):
```javascript
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let lilac = firstAndLast.split(' ')
  this.getFullName = function() {
    return lilac[0] + ' ' + lilac[1];
  };
  this.getFirstName = () => {
    return lilac[0]
  }
  this.getLastName = () => {
    return lilac[1]
  }
  this.setFirstName = (first) => {
    lilac[0] = first
  }
  this.setLastName = (last) => {
    lilac[1] = last
  }
  this.setFullName = (reset) => {
    let violet = reset.split(' ')
    lilac[0] = violet[0];
    lilac[1] = violet[1];
  }
};
```
-------
## Test Cases:
```javascript
// No properties should be added. Object.keys(bob).length should always return 6.
bob instanceof Person // true.
bob.firstName // undefined.
bob.lastName // undefined.
bob.getFirstName() // Bob.
bob.getLastName() // Ross.
bob.getFullName() // Bob Ross.
bob.getFullName() // Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName() // Haskell Curry after bob.setLastName("Curry").
bob.getFullName() // Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName() // Haskell after bob.setFullName("Haskell Curry").
bob.getLastName() // Curry after bob.setFullName("Haskell Curry").
```
# Things Learnt:
A simple practice of OOP programming.
