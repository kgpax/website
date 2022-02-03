module.exports = {
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@icons(.*)$': '<rootDir>/src/icons$1',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
};
