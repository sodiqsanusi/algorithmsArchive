/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs){
    let final = ''
    for(let i = 0; i < strs[0].length; i++){
        if(strs.every(elem => {
            return elem[i] == strs[0][i]
        })){
            final += strs[0][i]
            continue;
        }   
        break;
    }
    return final
};