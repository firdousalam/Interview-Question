
function rotateMatrix(matrix) {
     let rows = matrix.length;
  let cols = matrix[0].length;

    // Step 1: Transpose the matrix
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    //     }
    // }

    let transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

    // Step 2: Reverse each row to rotate 90 degree
    for (let i = 0; i < rows; i++) {
        transposed[i].reverse();
    }
    return transposed;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



console.log(JSON.stringify(rotateMatrix(matrix)));