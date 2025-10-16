function diagonalTraversal(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    // Traverse diagonals starting from the last column
    for (let col = cols - 1; col >= 0; col--) {
        let i = 0, j = col;
        const diagonal = [];
        while (i < rows && j >= 0) {
            diagonal.push(matrix[i][j]);
            i++;
            j--;
        }
        result.push(diagonal);
    }

    // Traverse diagonals starting from the second row
    for (let row = 1; row < rows; row++) {
        let i = row, j = cols - 1;
        const diagonal = [];
        while (i < rows && j >= 0) {
            diagonal.push(matrix[i][j]);
            i++;
            j--;
        }
        result.push(diagonal);
    }

    return result;
}

// Example Usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(JSON.stringify(diagonalTraversal(matrix)));
