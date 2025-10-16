function ColimnWise(data){
    let row = data.length;
    let column = data[0].length;
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(i!=j){
                console.log(data[j][i]);
            }
            else{
                console.log(data[i][i]);
            }
        }

    }

}

console.log(ColimnWise([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));