function commonPrefix(data){
    if(data.length === 0) return '';
    let commonData = '';
    let commonPrefix = data[0].split('');
    for(let i=1;i<data.length;i++){
        let nextData = data[i].split('');
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

    }
    return commonData;
    

}
console.log(commonPrefix(["flower","flow","fflight"]));