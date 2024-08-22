import resolveConfig from 'tailwindcss/resolveConfig';

import { TailwindThemeConfig } from './tailwind.config';
const config = resolveConfig(TailwindThemeConfig);
const { theme } = config;
export default config;
export { theme };
