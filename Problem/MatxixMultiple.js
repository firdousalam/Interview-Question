function multiplyMatrices(A, B) {
    const rowsA = A.length, colsA = A[0].length;
    const rowsB = B.length, colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error("Number of columns in Matrix A must equal the number of rows in Matrix B.");
    }

    // Initialize the result matrix with zeros
   // const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
   let result = [];
   for(let i=0;i<rowsA;i++){
         let eachRow = [];
        for( let j=0; j<colsB;j++){
            eachRow.push(0);

        }
        result.push(eachRow);
   }

    console.log("result",JSON.stringify(result));
    // Perform matrix multiplication
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Example Usage
const A = [
    [1, 2, 3],
    [4, 5, 6]
];

const B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const result = multiplyMatrices(A, B);
console.log(JSON.stringify(result));
// Output: [[58, 64], [139, 154]]
