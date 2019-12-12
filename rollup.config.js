import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import buble from 'rollup-plugin-buble';

const svelteConfig = require('./svelte.config');

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js',
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('public/bundle.css');
      },
      ...svelteConfig,
    }),
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    css({ output: 'public/bundle2.css' }),
    commonjs(),
    !production && livereload('public'),
    production && buble(),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
