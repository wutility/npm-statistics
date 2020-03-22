import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: [
    {
      name: 'NpmStats',
      file: 'build/index.umd.js',
      format: 'umd'
    },
    {
      file: 'build/index.js',
      format: 'cjs'
    },
    {
      file: 'build/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [terser()]
};

