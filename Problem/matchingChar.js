/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}

 test case 162
 s =
"mississippi"
p =
"mis*is*ip*."
true


147

s =
"mississippi"
p =
"mis*is*p*."
false


 */
 /*
var isMatch = function(s, p) {
    let isMatchDta = '';
    let Data = s.split("");
    function matString(arr,matchLetter,beforeWord,s){
        if(beforeWord ==''){
            beforeWord = matchLetter
        }
        const count = arr.filter(item => item === beforeWord).length;
       
        console.log("match",count)
        if(matchLetter == '*' && beforeWord!=''){
            console.log("in *")
            if(count>=0){
                if(isMatchDta != false || isMatchDta == ''){
                isMatchDta = true 
            }
              //  return true;
            }
        }
        else if(matchLetter == '.'){
            console.log("in .")
            if(count>0){
                isMatchDta = true
               
            }else{ 
                if(isMatchDta != true){
                    isMatchDta = false;
                }               
            }
        }else{

            if(s == beforeWord && isMatchDta != false){
                console.log("match")
                if(arr.length != beforeWord.length-1){
                  if(isMatchDta != false){
                     isMatchDta = true 
                  }else{
                    isMatchDta = true;
                  }
                }
            }
        }
        console.log("matchfun",isMatchDta);
     return isMatchDta   
    }
    for(let i=0;i<p.length;i++){

        let beforeMatch = p.substr(0,i).split("");
        if(isMatchDta != true){
            if(matString(Data,p[i],beforeMatch.join(""),s)){
                isMatchDta = true;
            }
        }
        
    }
    return isMatchDta
};
*/

var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
    dp[0][0] = true;
    
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    
    return dp[m][n];
};