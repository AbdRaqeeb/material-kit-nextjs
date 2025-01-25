export default {
    '@/**/*.ts': () => ['pnpm run type:check'],

    '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': () => ['pnpm run ci'],
};
