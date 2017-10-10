const webpack = require('webpack');

module.exports = {
    entry: `${__dirname}/../src/index.js`,
    output: {
        path: `${__dirname}/../dist`,
        filename: 'drypot.js'
    }
 }