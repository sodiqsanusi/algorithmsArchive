/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let lilac = [...magazine]
    for(let char of ransomNote){
        if(lilac.indexOf(char) >= 0){
            lilac[lilac.indexOf(char)] = ''
            continue
        }
        return false
    }
    return true
};