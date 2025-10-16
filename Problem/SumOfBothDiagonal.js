function diagonalSum(matrix) {
    let n = matrix.length; //3
    let sum = 0;

    for (let i = 0; i < n; i++) { // 2
        // Add primary diagonal element
        sum += matrix[i][i];
        // Add secondary diagonal element
        if (i !== n - i - 1) {  // 2  3-2-1 
            sum += matrix[i][n - i - 1];
        }
    }

    return sum;
}

// Example usage:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix = [
    [1, 2],
    [4, 5]
];

console.log(diagonalSum(matrix1)); // Output: 25
