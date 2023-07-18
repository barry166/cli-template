const common = require('./rollup.js');
const nodeResolve = require('@rollup/plugin-node-resolve');

// 默认common.js
module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        banner: common.banner,
    },
    plugins: [
        nodeResolve(),
        common.getCompiler()
    ]
};