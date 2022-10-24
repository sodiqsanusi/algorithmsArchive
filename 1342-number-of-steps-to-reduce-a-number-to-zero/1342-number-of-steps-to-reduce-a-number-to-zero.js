/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let final = 0
    while(num > 0){
        if(!(num % 2)){
            num = num / 2
        }else{
            num--
        }
        final++
    }
    return final
};