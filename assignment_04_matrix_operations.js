// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");


// Input matrix
function inputMatrix(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question("Enter row " + (i + 1) + ": ");
        matrix.push(row.split(" ").map(Number));
    }

    return matrix;
}


// Display matrix
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}


// Transpose matrix
function transpose(matrix) {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];

        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }

        result.push(row);
    }

    return result;
}


// Add two matrices
function addMatrix(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        let row = [];

        for (let j = 0; j < a[i].length; j++) {
            row.push(a[i][j] + b[i][j]);
        }

        result.push(row);
    }

    return result;
}


// Multiply two matrices
function multiplyMatrix(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        result[i] = [];

        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;

            for (let k = 0; k < b.length; k++) {
                sum = sum + (a[i][k] * b[k][j]);
            }

            result[i][j] = sum;
        }
    }

    return result;
}


// Main function
function main() {

    // PART A
    console.log("PART A: TRANSPOSE");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let columns = readlineSync.questionInt("Enter number of columns: ");

    let matrix = inputMatrix(rows, columns);

    console.log("\nOriginal Matrix:");
    printMatrix(matrix);

    console.log("\nTransposed Matrix:");
    printMatrix(transpose(matrix));


    // PART B
    console.log("\nPART B: ADD MATRICES");

    console.log("Enter first matrix:");
    let matrixA = inputMatrix(rows, columns);

    console.log("Enter second matrix:");
    let matrixB = inputMatrix(rows, columns);

    console.log("\nAdded Matrix:");
    printMatrix(addMatrix(matrixA, matrixB));


    // PART C
    console.log("\nPART C: MULTIPLY MATRICES");

    let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    let columnsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    console.log("Enter Matrix A:");
    let A = inputMatrix(rowsA, columnsA);


    // Rows of B must equal columns of A
    let columnsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    console.log("Enter Matrix B:");
    let B = inputMatrix(columnsA, columnsB);


    console.log("\nResult of Multiplication:");

    printMatrix(multiplyMatrix(A, B));

}


main();


