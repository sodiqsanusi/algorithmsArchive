# Task:
Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.

Rules for a smiling face:
- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`
No additional characters are allowed except for those mentioned.

**Valid smiley face examples:** `:) :D ;-D :~)` </br>
**Invalid smiley faces:** `;( :> :} :]`

## Example
```javascript
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```
## Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
# Solution (JavaScript):
```javascript
function countSmileys(arr) {
  let lilac = arr.filter(lett => {
    return /^[:;][-~]?[D)]/g.test(lett)
  })
  return lilac.length;
}
```
-------
## Test Cases:
```javascript
  countSmileys([]) // 0
  countSmileys([':D',':~)',';~D',':)']) // 4
  countSmileys([':)',':(',':D',':O',':;']) // 2
  countSmileys([';]', ':[', ';*', ':$', ';-D']) // 1
```
# Things Learnt:
Used a regex engine for the first time ever😊💪🏾! It actually made writing regex easier and more fun
