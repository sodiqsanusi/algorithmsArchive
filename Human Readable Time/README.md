# Task:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (`HH:MM:SS`)

- `HH` = hours, padded to 2 digits, range: 00 - 99
- `MM` = minutes, padded to 2 digits, range: 00 - 59
- `SS` = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (`99:59:59`)
# Solution (JavaScript):
```javascript
function humanReadable (seconds) {
  let hours = 0;
  let minutes = 0;
  while(seconds >= 3600){
    seconds -= 3600;
    hours++
  } while(seconds >= 60) {
    seconds -= 60;
    minutes++
  }
  // This converts the hours, minutes and seconds to "double-digit" strings
  hours = (hours).toLocaleString(undefined, {minimumIntegerDigits: 2});
  minutes = (minutes).toLocaleString(undefined, {minimumIntegerDigits: 2});
  seconds = (seconds).toLocaleString(undefined, {minimumIntegerDigits: 2})
  return `${hours}:${minutes}:${seconds}`;
}
```
# Things Learnt:
This is actually the first time I'm using the `.toLocaleString()` method, the docs on MDN has been very explanatory, a very useful tool.
