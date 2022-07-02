# Task:
Convert the given number into a roman numeral.

| Roman numerals | Arabic numerals |
| ------------- | ------------- |
| M  | 1000  |
| CM  | 900  |
| D  | 500  |
| CD  | 400  |
| C  | 100  |
| XC  | 90  |
| L | 50  |
| XL  | 40  |
| X  | 10  |
| IX  | 9 |
| V  | 5 |
| IV  | 4 |
| I  | 1 |

All roman numerals answers should be provided in upper-case.

# Solution (JavaScript):
```javascript
function convertToRoman(num) {
  let violet = []
  while(num >= 1){
    let lilac = `${num}`.length - 1;
    violet.push(10 ** lilac);
    num -= 10 ** lilac
  }
  let numbers = [1000, 100, 10, 1]
  let roman = ['M', 'C', 'X', 'I']
  let test = violet.map( num => {
    return roman[numbers.indexOf(num)]
  }).join('');
  let newT = test.replace(/C{9}/g, 'CM').replace(/C{5}/g, 'D').replace(/C{4}/g, 'CD')
  .replace(/X{9}/g, 'XC').replace(/X{5}/g, 'L').replace(/X{4}/g, 'XL')
  .replace(/I{9}/g, 'IX').replace(/I{5}/g, 'V').replace(/I{4}/g, 'IV');
  
  return newT;
}
```
-------------
## Test Cases:
```javascript
convertToRoman(2) // II.
convertToRoman(3) // III.
convertToRoman(4) // IV.
convertToRoman(5) // V.
convertToRoman(9) // IX.
convertToRoman(12) // XII.
convertToRoman(16) // XVI.
convertToRoman(29) // XXIX.
convertToRoman(44) // XLIV.
convertToRoman(45) // XLV.
convertToRoman(68) // LXVIII
convertToRoman(83) // LXXXIII
convertToRoman(97) // XCVII
convertToRoman(99) // XCIX
convertToRoman(400) // CD
convertToRoman(500) // D
convertToRoman(501) // DI
convertToRoman(649) // DCXLIX
convertToRoman(798) // DCCXCVIII
convertToRoman(891) // DCCCXCI
convertToRoman(1000) // M
convertToRoman(1004) // MIV
convertToRoman(1006) // MVI
convertToRoman(1023) // MXXIII
convertToRoman(2014) // MMXIV
convertToRoman(3999) // MMMCMXCIX
```
# Things Learnt:
Was a bit hard to solve this first, did it nonetheless😅.
