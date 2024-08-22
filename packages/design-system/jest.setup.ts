// require('@testing-library/jest-dom/extend-expect');
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    basePath: '',
  },
}));

global.ResizeObserver = require('resize-observer-polyfill');
