# Task:
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input `GCG`, return `[["G", "C"], ["C","G"], ["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
# Solution (JavaScript):
```javascript
function pairElement(str) {
  let checkPair = (base) => {
    switch(base) {
      case 'A': return 'T'; break;
      case 'T': return 'A'; break;
      case 'G': return 'C'; break;
      case 'C': return 'G'; break;
    }
  }
  return [...str].map(l => {
    return [l , checkPair(l)]
  })
}
```
-------
## Test Cases:
```javascript
pairElement("ATCGA") // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
```
# Things Learnt:
Regex can do this instead of the switch statement, will brush up on my knowledge of regular expressions again.
