/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let lilac = []
    let check = 0
    let i = 1
    while(candies > 0){
        if(!lilac[check]){
          lilac[check] = i > candies ? candies : i
        }else if(i > candies){
          lilac[check] = lilac[check] + candies
        }
        else{
            lilac[check] = lilac[check] + i
        }
        check++
        candies -= i
        i++
        if(check == num_people){
            check = 0
        }
    }
    if(lilac.length < num_people){
      lilac = lilac.concat(Array(num_people - lilac.length).fill(0))
    }
    return lilac
};