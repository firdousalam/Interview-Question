function removeDuplicate(data){
    let unique = '';
    let Txt = {};
    for(let chr of data){
        if(Txt[chr]){
            delete Txt[chr]
        }
        else{
            Txt[chr] = true;
        }
       
    }
   
   let keyArray = Object.keys(Txt)
    
    return keyArray.join("")
}
console.log(removeDuplicate('abcabcdabtdjjfnfe'))
