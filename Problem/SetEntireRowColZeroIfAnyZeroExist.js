let data = [[1,1,1],
 [1,0,1],
 [1,1,1]];
 let cols = data[0].length;
 let rows = data.length;
 let alreadyExist = 0;

 for(let i=0;i< rows;i++){
    for(let j=0; j<cols;j++){
        if(data[i][j] == 0 && alreadyExist == 0){
            console.log(i,j);
            // change all row to 0
            let colChk = cols-1;
            let rowChk = rows;
          //  making row as zero
            let rw = 0;
            while(colChk>=0){
                data[i][colChk] = 0;
                colChk --;
            }
            console.log("row zero",JSON.stringify(data));
            // making column as zero
            let rwck = rows-1;
            while(rwck>=0){
                data[rwck][j] = 0;
                rwck --;
            }
             console.log("Column zero",JSON.stringify(data))
          //  break;
            alreadyExist =1;
        }
    }
 }
 console.log(JSON.stringify(data));