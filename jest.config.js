const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname),
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/**/*.ts', '!<rootDir>/**/*.d.ts'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/__mocks__/'],
  testMatch: [__dirname + '/__tests__/**/*.test.ts'],
  coverageDirectory: 'coverage/',
  coverageProvider: 'v8',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@t/(.*)': '<rootDir>/__tests__/$1'
  }
}
