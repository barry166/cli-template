const { babel } = require('@rollup/plugin-babel');

const pkg = require('../package.json');

const version = pkg.version;

const banner =
    `/*!
 * ${pkg.name} ${version} (https://github.com/barry166)
 * API 
 * Copyright 2017-${(new Date).getFullYear()} All Rights Reserved
 * Licensed under MIT
 */
`;

function getCompiler(opt) {
    return babel({
        babelrc: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    'targets': {
                        'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                        'node': '0.10'
                    },
                    'modules': false,
                    'loose': false
                }
            ]
        ],
        plugins: [
            ['istanbul'],
            [
                '@babel/plugin-transform-runtime',
                {
                    regenerator: true,
                }
            ],
        ],
        babelHelpers: 'runtime',
        exclude: 'node_modules/**'
    });
}

exports.name = 'clone';
exports.banner = banner;
exports.getCompiler = getCompiler;