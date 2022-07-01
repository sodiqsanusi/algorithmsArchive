# Task:
According to Kepler's Third Law, the orbital period **_T_** of two point masses orbiting each other in a circular or elliptic orbit is:

$$ **T**= 2\pi\sqrt{a^3 / \mu} $$
 
- $a$  is the orbit's semi-major axis
- $\mu=GM$  is the standard gravitational parameter
- $G$  is the gravitational constant,
- $M$  is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is $6367.4447 km$, and the **GM** value of earth is $398600.4418 km^3s^{-3}$.
# Solution (JavaScript):
```javascript
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let calculate = (alti) => {
    let a = (earthRadius + alti) ** 3
    let lilac = (Math.PI * 2) * Math.sqrt(a / GM)
    return Math.round(lilac)
  }
  let violet = arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: calculate(obj.avgAlt)
    }
  })
  return violet;
}
```
-------
## Test Cases:
```javascript
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) // [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
```
# Things Learnt:
Wheww! Nothing new learnt here sha, logic and formulas again.
