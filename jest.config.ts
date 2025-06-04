// jest.config.ts
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/tests/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ]
};

export default createJestConfig(customJestConfig);