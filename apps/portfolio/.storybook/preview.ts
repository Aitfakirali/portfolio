import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import 'keen-slider/keen-slider.min.css';
import 'react-day-picker/dist/style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
