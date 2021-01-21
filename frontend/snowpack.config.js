module.exports = {
  plugins: ['@snowpack/plugin-dotenv', '@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
  mount: {
    public: '/',
    src: '/_dist_',
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    baseUrl: '/pigeon-project',
    sourcemaps: true,
  },
  packageOptions: {
    sourcemap: true,
  },
  optimize: {
    treeshake: true,
    preload: true,
    minify: true,
    target: 'es2017',
  },
};
