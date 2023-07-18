const nodeResolve = require('@rollup/plugin-node-resolve')
const { terser } = require('@rollup/plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')

const common = require('./rollup.js')

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  input: 'src/index.js',
  output: {
    file: prod ? 'dist/index.aio.min.js' : 'dist/index.aio.js',
    format: 'umd',
    name: common.name,
    banner: common.banner,
  },
  plugins: [nodeResolve(), commonjs(), common.getCompiler(), prod && terser()],
}
