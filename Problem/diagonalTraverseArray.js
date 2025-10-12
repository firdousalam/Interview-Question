function findDiagonalOrder(str) {
  // Step 1: Parse the string to get a 2D array
  const mat = JSON.parse(str);

  const m = mat.length; // total length
  const n = mat[0].length; // length of first array
  const result = [];

  // Step 2: Traverse all diagonals (m + n - 1)
  for (let d = 0; d < m + n - 1; d++) {  // 
    const intermediate = [];

    // Calculate starting row and column
    let r = d < n ? 0 : d - n + 1;
    let c = d < n ? d : n - 1;

    // Collect elements in current diagonal
    while (r < m && c >= 0) {
      intermediate.push(mat[r][c]);
      r++;
      c--;
    }

    // Reverse alternate diagonals for zigzag pattern
    if (d % 2 === 0) intermediate.reverse();

    result.push(...intermediate);
  }

  return result;
}

// Example usage:
const input = "[[1,2,3],[4,5,6],[7,8,9]]";
console.log(findDiagonalOrder(input));
console.log("New Function",findDiagonalOrder1(input));
// Output: [1,2,4,7,5,3,6,8,9]
function findDiagonalOrder1(data){
    let arr = JSON.parse(data);
    let m = arr.length;
    let n = arr[0].length;
    let result = [];

    for(let d=0; d<m+n-1;d++){
        let immediate = [];

        let r = d < n ? 0 : d-n+1;
        let c = d < n ? d : n-1;

        while(r<m && c>=0){

            immediate.push(arr[r][c])
            r++;
            c--;

        }

        if(d%2=== 0) {
            immediate.reverse();
        }
        result.push(...immediate);
    }

    return result;
}



