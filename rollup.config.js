import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts', // The entry point for your library
    output: {
      file: 'dist/index.js', // this should be the same as "main" in package.json
      format: 'esm',
      sourcemap: true,
      exports: 'named', // Ensures named exports work correctly
    },
    plugins: [
      peerDepsExternal(), // Automatically externalize peer dependencies
      resolve(), // Allows Rollup to find modules in node_modules
      commonjs(), // Converts CommonJS modules to ES6
      typescript({
        tsconfig: './tsconfig.json',
        outputToFilesystem: true, // Ensures that .d.ts files are output correctly
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(), // Minify the bundle
    ],
  },
  // Generate the .d.ts file
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  // Separate output for types
  {
    input: 'src/types.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
