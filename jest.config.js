module.exports = {
  moduleNameMapper: {
    '^~/components(.*)$': '<rootDir>/src/components$1',
    '^~/context(.*)$': '<rootDir>/src/context$1',
    '^~/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^~/icons(.*)$': '<rootDir>/src/icons$1',
    '^~/style(.*)$': '<rootDir>/src/style$1',
    '^~/types/(.*)$': '<rootDir>/src/types/$1',
    '^~/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~/test/(.*)$': '<rootDir>/test/$1',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
}
