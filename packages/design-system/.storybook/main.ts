import type { StorybookConfig } from '@storybook/react-webpack5';
// import type { StorybookConfig } from '@storybook/react-vite';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react-webpack5', // 👈
  core: {
    builder: '@storybook/builder-webpack5', // 👈
  },
  // webpackFinal: async (config) => {
  //   config.resolve.plugins = [
  //     ...(config.resolve.plugins || []),
  //     new TsconfigPathsPlugin({
  //       extensions: config.resolve.extensions,
  //     }),
  //   ];
  //   return config;
  // },
  // framework: {
  //   name: '@storybook/react-webpack5',
  //   options: {},
  // },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
