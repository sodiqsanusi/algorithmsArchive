# Task:
Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.
# Solution (JavaScript):
```javascript
function convertHTML(str) {
  let norm = ['&', '<', '>', '"', "'"]
  let newNorm = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;']
  return str.replace(/[&|<|>|"|']/gi, c => newNorm[norm.indexOf(c)])
}
```
-------
## Test Cases:
```javascript
convertHTML("Dolce & Gabbana") // Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") // Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') // Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") // Schindler&apos;s List.
convertHTML("<>") // &lt;&gt;.
convertHTML("abc") // abc.
```
# Things Learnt:
I swear, regex is awesome😭🥺. I saw a search and replace function like this when I was solving a Codewars task, so I decided to try it here also. And it worked! In just three lines, crazy stuff to me.
