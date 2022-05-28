module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/src/',
    '<rootDir>/public/',
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
}
