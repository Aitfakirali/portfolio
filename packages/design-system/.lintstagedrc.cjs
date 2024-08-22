module.exports = {
  '*.{ts,tsx}': () =>
    'tsc --showConfig --project tsconfig.build.json --noEmit --noEmitOnError --outDir dist',
  '*.{js,jsx,ts,tsx}': ['prettier -w', 'eslint src'],
};
