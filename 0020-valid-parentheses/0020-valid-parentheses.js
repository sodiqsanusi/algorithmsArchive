/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let start = '({[';
    let end = ')}]';
    let braces = s.split('');
    let final = []
    for(let brace of braces){
        if(start.includes(brace) && (final.every(c => start.includes(c) || final.length == 0))){
            final.push(brace)
        }else{
            let test = start.indexOf(final[final.length - 1])
            if(test == undefined || end[test] != brace)return false
            final.pop()
        }
    }
    if(final.length > 0) return false
    return true
};