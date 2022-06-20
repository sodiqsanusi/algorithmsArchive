# Task:
## Introduction
**The Robber Language** (Rövarspråket) is a Swedish _cant_ used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

The idea is that every consonant in a sentence is duplicated, with an `o` inserted in between (`b` becomes `bob`). Vowels are left untouched (`a` remains an `a`). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

## Example
In this example, the consonants `f`, `b` and `r` are modified. The vowels `o` and `a` are left untouched.

`'foo bar' => 'fofoo bobaror' ('fof-o-o bob-a-ror')`

**Note:** The dashes `-` in the example are added for readability and should not be included in the output.

## The Assignment
Your task is to implement a function `function robberEncode(sentence)` which takes in a string `sentence` and returns the result, converted into **robber language**, as a string.

## Notes
- Only consonants should be modified; leave all other characters unchanged.
- Both upper and lower case characters will be tested.
- The case of the `o` character and the neighboring consonants should match (`F => FOF` and `f => fof`).
- For the purpose of this kata, a character is considered a **consonant** if it's equal to one of the letters `BCDFGHJKLMNPQRSTVWXYZ`.
## Testing
The tests will challenge your function with sentences of **length 0-255**, ASCII characters between **32-126** and *_nothing else_*.
# Solution (JavaScript):
```javascript
function robberEncode(sentence) {
  // yoyouror cocodode hoherore
  let robberLanguage = [...sentence].map((letter) => {
   // To eliminate adding 'o' to an empty string
   if (!letter) return '';
   // Runs a check to make sure vowels (both upper and lower case) as well as special characters aren't affected by the robber language syntax
   if((['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(letter)) || !(/[a-zA-Z]/.test(letter))){
     return letter;
   // Runs a last check to know if consonant is uppercase, if true it uses the uppercase 'O' instead of 'o'
   } if (letter.toUpperCase() == letter){
     return `${letter}O${letter}`
   }
    return `${letter}o${letter}`
 })
  return (robberLanguage.join(''))
}
```
# Things Learnt:
Checking the best solutions on the platform, it was clear that the cleanest solutions used JavaScript Regular Expressions (`RegExp`), I'm done with the `ES6` section of the FreeCodeCamp algorithm course, so I'll start learning on how to use regular expressions.
