/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
   let final = []
   let lilac = [...mat].sort((a,b) => {
       return a.reduce((a,b) => a + b) - b.reduce((a,b) => a + b)
   })
   for(let i = 0; i < k; i++){
       let check = mat.indexOf(lilac[i])
       if(final.includes(check)){
           check = mat.slice(check).indexOf(lilac[i])
       }
       final.push(check)
   }
   return final
};