# Task:
Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

|Currency Unit|	Amount|
|-------------|--------|
|Penny|	$0.01 (PENNY)|
|Nickel|	$0.05 (NICKEL)|
|Dime|	$0.1 (DIME)|
|Quarter|	$0.25 (QUARTER)|
|Dollar|	$1 (ONE)|
|Five Dollars|	$5 (FIVE)|
|Ten Dollars|	$10 (TEN)|
|Twenty Dollars|	$20 (TWENTY)|
|One-hundred Dollars|	$100 (ONE HUNDRED)|

See below for an example of a cash-in-drawer array:
```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```
# Solution (JavaScript):
```javascript
function checkCashRegister(price, cash, cid) {
  let change = cash - price
  if(cid.reduce((a,b) => a + b[1], 0.01) == (change + 0.01)) {
   return {status: 'CLOSED', change: cid}
  }
  let ref = {
  PENNY: 0.01, NICKEL: 0.05, DIME: 0.1, QUARTER: 0.25, ONE: 1,   
  FIVE: 5, TEN: 10, TWENTY: 20, "ONE HUNDRED": 100 
  }
  let changeGiven = [];
  for(let i of cid.reverse()){
    if(change < ref[i[0]]) continue;
    let q = Math.floor((change / ref[i[0]]).toFixed(2))
    if(i[1] > q * ref[i[0]]) {
      changeGiven.push([i[0], q * ref[i[0]]])
      change -= q * ref[i[0]];
    } else{
      changeGiven.push([i[0], i[1]])
      change -= i[1]
    }
  }
  if(change > 0){
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  }
  return {
    status: 'OPEN',
    change: changeGiven
  }

}
```
-------
## Test Cases:
```javascript
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
```
# Things Learnt:
The last project in freeCodeCamp's course🤩🎉. It was tough though, and I feel the code isn't optimal also. 
Next thing I'm planning to do now is to  work on building some interfaces with Next.js, then get a DSA course to learn from. 
I'll keep solving tasks on Codewars, will try my best in documenting on how it goes over here too. Cheers Ade🎉🎉
