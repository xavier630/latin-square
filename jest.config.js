export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',  // This ensures Babel transforms JS files.
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',  // Ensure it uses the correct TypeScript config.
        },
    },
};
