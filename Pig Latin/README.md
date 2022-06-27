# Task:
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.
- If a word begins with a vowel, just add `way` at the end.
--------
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
# Solution (JavaScript):
```javascript
function translatePigLatin(str) {
  if(/a|e|i|o|u/.test(str[0])) return (str + 'way')
  let lilac = str.match(/^[^a|e|i|o|u]+/g).join('')
  return str.replace(lilac, '') + lilac + 'ay'
}
```
-------
## Test Cases:
```javascript
translatePigLatin("california") // aliforniacay.
translatePigLatin("paragraphs") // aragraphspay.
translatePigLatin("glove") // oveglay.
translatePigLatin("algorithm") // algorithmway.
translatePigLatin("eight") // eightway.
translatePigLatin("schwartz") // artzschway.
translatePigLatin("rhythm") // rhythmay.
```
# Things Learnt:
Regex is proving to be invaluable, although it's so so hard to comprehend sometimes, most times. I'll keep working to be better at it tho.
