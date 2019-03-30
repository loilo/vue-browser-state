import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/browser-state.js',
  output: {
    file: 'dist/browser-state.umd.js',
    format: 'umd',
    name: 'vueBrowserState',
    sourcemap: true
  },
  plugins: [terser()]
}
