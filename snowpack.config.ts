import type { SnowpackUserConfig } from 'snowpack';

const ci = !!process.env.CI;

export default <SnowpackUserConfig>{
  plugins: [
    [
      '@snowpack/plugin-babel',
      { presets: ['@babel/preset-typescript', ['@babel/preset-env', { modules: false }]] },
    ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-svelte',
  ],
  mount: {
    public: '/',
    src: '/_dist_',
  },
  scripts: {
    'run:tsc': 'tsc --noEmit',
    'run:tsc::watch': '$1 --watch',
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    baseUrl: '/',
    clean: ci,
    sourceMaps: ci,
  },
  installOptions: {
    treeshake: ci,
    sourceMap: ci,
  },
  experiments: {
    optimize: {
      bundle: ci,
      minify: ci,
      target: 'es2018',
    },
  },
};
