module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testPathIgnorePatterns: [
      "<rootDir>/cypress/"
    ],
    moduleNameMapper: {
      '\\.(css|scss)$': 'jest-css-modules',
      '\\.(jpg|jpeg|png|gif|webp|svg|png)$': '<rootDir>/src/mocks/fileMock.js',
      '^@testing-library/jest-dom$': '<rootDir>/node_modules/@testing-library/jest-dom/dist/index.js',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  };
  