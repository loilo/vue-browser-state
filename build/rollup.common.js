import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/browser-state.js',
  output: {
    file: 'dist/browser-state.common.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [terser()]
}
