const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const pkg = require('./package.json');
const path = require('path');
const resolve = require('path').resolve;
const libraryName= pkg.name;

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'A52Component.js',
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    plugins: [
        
        new WebpackShellPluginNext({
            onBuildStart:{
              scripts: ['echo "===> Starting packing with WEBPACK 5"'],
              blocking: true,
              parallel: false
            },
            onBuildEnd:{
              scripts: ['npm publish'],
              blocking: false,
              parallel: true
            }
          })    ],
    module: {
        rules : [
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options:{
                        fallback: "file-loader",
                        name: "[name][md5:hash].[ext]",
                        outputPath: 'assets/',
                        publicPath: '/assets/'
                    }
                }    
            ]
        },
        {
            test: /\.*css$/,
            use : ExtractTextPlugin.extract({
                fallback : 'style-loader',
                use : [
                    'css-loader',
                    'sass-loader'
                ]
            })
        },
        {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            include: resolve(__dirname, "src"),
            exclude: /node_modules/,
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: ["file-loader"],
        },
        {
            test: /\.(pdf|doc|zip)$/,
            use: ["file-loader"],
        }]
    },
    resolve: { 
        alias: { 
            'react': resolve(__dirname, './node_modules/react') ,
            'react-dom': resolve(__dirname, './node_modules/react-dom'),
            'assets': resolve(__dirname, 'assets')
        } 
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};