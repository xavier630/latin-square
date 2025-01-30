import validateLatinSquare from "../main/validator";

const validCases = [
    [
        [1, 2],
        [2, 1]
    ],
    [
        [1, 2, 3],
        [2, 3, 1],
        [3, 1, 2]
    ],
    [
        [1, 2, 3, 4],
        [2, 3, 4, 1],
        [3, 4, 1, 2],
        [4, 1, 2, 3]
    ]
]

const invalidCases = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [1, 3],
        [1, 2]
    ],
    [
        [1, 2, 3],
        [2, 3, 1],
        [3, 1, 1]
    ],
    [
        [1, 2, 3, 4],
        [2, 3, 4, 1],
        [3, 4, 1, 2],
        [4, 1, 2, 4]
    ]
]

describe('validateLatinSquare', () => {
    it('should return true for valid Latin Squares', () => {
        validCases.forEach(grid => {
            expect(validateLatinSquare(grid)).toBe(true);
        });
    });

    it('should return false for invalid Latin Squares', () => {
        invalidCases.forEach(grid => {
            expect(validateLatinSquare(grid)).toBe(false);
        });
    });
});