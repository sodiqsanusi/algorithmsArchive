# Task:
The marketing team is spending way too much time typing in hashtags. 
Let's help them with our own Hashtag Generator!

Here's the deal:
- It must start with a hashtag (`#`).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return `false`.
- If the input or the result is an empty string it must return `false`.
## Examples
```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```
# Solution (JavaScript):
```javascript
function generateHashtag (str) {
// This runs a check to confirm if the input is not an empty string, the regex test is to make sure that strings that have spaces but are empty are also considered false
  if(!str || !(/[a-zA-Z]/.test(str))) return false;
// Split the input string into an array of words, then iterated through that array to capitalize each word.
  let lilac = str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  let finalWord = '#' + lilac.join('');
  if(finalWord.length > 140) return false ;
  return finalWord;
}
```
# Things Learnt:
I'm gradually getting to enjoy solving this problems, I think I've been so used to using JavaScript to manipulate a browser's DOM that I failed to recognize that the language itself isn't just for web programming. Will have to go through the docs on the `.split()` and the `.splice()` method again.
