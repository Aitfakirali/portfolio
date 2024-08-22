/** @type {import('jest').Config} */
const config = {
  // globals: {
  //   'ts-jest': {
  //     isolatedModules: true,
  //   },
  // },
  verbose: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  // setupFilesAfterEnv: [
  //   '@testing-library/jest-dom/extend-expect',
  //   '@testing-library/react',
  //   '@testing-library/jest-dom',
  // ],
  // modulePaths: ['<rootDir>/src'],
  // moduleDirectories: ['node_modules', '../../node_modules'],
  // transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // // moduleDirectories: ['node_modules', '<rootDir>/'],
  // testEnvironment: 'jest-environment-jsdom',
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  // },
  // transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // transformIgnorePatterns: [
  //   '/node_modules/(?!(foo|bar)/)',
  //   '/testing-library/react/',
  // ],
  // Coverage
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  collectCoverageFrom: [
    '<rootDir>/src/components/elements/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/hooks/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/utils/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/elements/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/elements/index.ts',
  ],
  // todo: to be defined
  coverageThreshold: {
    global: {
      branches: 56,
      functions: 55,
      lines: 59,
      statements: 59,
    },
  },
};

module.exports = config;
