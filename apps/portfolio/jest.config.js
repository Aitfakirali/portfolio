/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],

  testEnvironment: 'jest-environment-jsdom',

  /**
   * Absolute imports and Module Path Aliases
   */
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),

  // Coverage
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/hooks/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/utils/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/services/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/elements/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/elements/index.ts',
  ],
  // todo: to be defined
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
