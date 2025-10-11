//Diagonal Traversal (Top-Left to Bottom-Right)

function diagonalTraverse(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let d = 0; d < rows + cols - 1; d++) {
        const diagonal = [];
        let row = d < cols ? 0 : d - cols + 1;
        let col = d < cols ? d : cols - 1;

        while (row < rows && col >= 0) {
            diagonal.push(matrix[row][col]);
            row++;
            col--;
        }
        result.push(diagonal);
    }

    return result;
}

// Example
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalTraverse(matrix));
// Output: [[1], [2, 4], [3, 5, 7], [6, 8], [9]]
