// function commonPrefix(data){
   /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if(strs.length === 0) return '';
    let commonData = '';
    let commonPrefix = strs[0].split('');
    for(let i=1;i<strs.length;i++){
        let nextData = strs[i].split('');
        commonData = '';
        for (let [index,char] of commonPrefix.entries()) {
             for(let [nxtIndex,nxt] of nextData.entries()){
                if(nxtIndex === index){
                    if(commonPrefix[index] === nextData[nxtIndex] ){
                        commonData = commonData + nxt;
                        
                    }
                }
             }


        }
        commonPrefix = commonData.split("")

    }
    return commonData;
};
    


console.log(longestCommonPrefix(["flower","flow","flight"]));