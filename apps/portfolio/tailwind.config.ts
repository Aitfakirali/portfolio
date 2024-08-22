import { TailwindThemeConfig } from '@portfolio/tailwind-config';

const projectConfig = {
  ...TailwindThemeConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@portfolio/ui/src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@portfolio/core/src/**/*.{js,jsx,ts,tsx}',
  ],
};

export default projectConfig;
