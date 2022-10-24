/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let final = []
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            final.push('FizzBuzz')
            continue;
        }else if(i % 5 == 0){
           final.push('Buzz')
           continue; 
        }else if(i % 3 == 0){
           final.push('Fizz')
           continue; 
        }
        final.push(`${i}`)
    }
    return final
};