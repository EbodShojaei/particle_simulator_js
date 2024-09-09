const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Obfuscator = require('webpack-obfuscator');

module.exports = {
    entry: './app/init.js', // Path to your main JavaScript file
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Match CSS files
                use: [
                    'style-loader', // Injects CSS into the DOM
                    'css-loader' // Translates CSS into CommonJS modules
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false, // Remove comments
                    },
                    compress: {
                        drop_console: true // Remove console.log statements
                    },
                    mangle: true // Obfuscate variable and function names
                }
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }]
                }
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html', // Path to your HTML template file
            minify: {
                removeComments: true, // Remove HTML comments
                collapseBooleanAttributes: true, // Collapse boolean attributes
                collapseWhitespace: true, // Collapse white space
                removeAttributeQuotes: true, // Remove attribute quotes
                minifyCSS: true, // Minify CSS
                minifyJS: true // Minify JS
            }
        }),
        new Obfuscator({
            rotateStringArray: true,
            stringArray: true,
            selfDefending: true,
            deadCodeInjection: true,
            unicodeEscapeSequence: true,
        })
    ]
};
