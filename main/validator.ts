/**
 * Validates a given matrix to determine if it is a Latin Square
 * @param matrix The matrix to validate
 * @returns True if the matrix is a Latin Square, false otherwise
 * 
 */
const validateLatinSquare = (matrix: number[][]): boolean => {
    const numberOfRows = matrix.length;

    // Validate rows are of equal length to the height
    for (let i = 0; i < numberOfRows; i++) {
        if (matrix[i].length !== numberOfRows) {
            return false;
        }
    }

    // Validate each row and column has no duplicates and contains 1:N.
    for (let i = 0; i < numberOfRows; i++) {
        const currentRow = matrix[i];
        const currentColumn = matrix.map(row => row[i]);

        if (!isValidLatinSquareRow(currentRow) || !isValidLatinSquareRow(currentColumn)) {
            return false;
        }
    }

    return true;
}

/**
 * Validates a given array to determine if it is a Latin Square row
 * @param array The array to validate
 * @returns True if the array is a Latin Square row, false otherwise
 */
const isValidLatinSquareRow = (array: number[]): boolean => {
    const values = [...array]
    values.sort()

    // Validate all of 1:N appear within each row and each column
    // This additionally implies that no duplicates exist within a row
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== i + 1) {
            return false;
        }
    }

    return true;
}

export default validateLatinSquare;