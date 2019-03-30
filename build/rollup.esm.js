import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/browser-state.js',
  output: {
    file: 'dist/browser-state.esm.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [terser()]
}
