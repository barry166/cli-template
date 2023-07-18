const nodeResolve = require('@rollup/plugin-node-resolve');
const common = require('./rollup.js');

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
        banner: common.banner,
    },
    plugins: [
        nodeResolve(),
        common.getCompiler()
    ],
};
