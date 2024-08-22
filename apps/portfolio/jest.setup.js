// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock('next/router', () => require('next-router-mock'));
// eslint-disable-next-line no-undef
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    basePath: '',
  },
}));
