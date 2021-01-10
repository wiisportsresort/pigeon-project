import type { SnowpackUserConfig } from 'snowpack';

const prod = !!process.env.CI || process.env.NODE_ENV === 'production';

export default <SnowpackUserConfig>{
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv', '@snowpack/plugin-svelte'],
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
    baseUrl: prod ? '/pigeon-project' : '/',
    clean: prod,
    sourceMaps: prod,
  },
  installOptions: {
    treeshake: prod,
    sourceMap: prod,
  },
  experiments: {
    optimize: {
      preload: true,
      minify: true,
      target: 'es2017',
    },
  },
};
