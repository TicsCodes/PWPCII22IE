//importantdo dependencia path
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const path = require ('path');

module.exports = {
    //paso 1. especificar el archivo de entrada
    entry: './client/index.js',
    // paso 2 especificar el archivo de salida
    output: {
        //2.1 ruta absoluta de la salida
        path: path.resolve(__dirname, 'public'),
        //2.2 npmbre del archivo de salida
        filename: path.join('javascripts', 'bundle.js'),
        //2.3 path publico
        publicPath: '/'
    }, 
    //3 Modules
    module: {
        rules: [
            //3.1 Regla de babel 
            {
                test: / \.js$/,
                exclude: /(node_modules)/,
                use: [
                    //3.1.1 Primer stage, Que le hara a las js
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                '@babel/preset-env', {
                                    modules: false,
                                    useBuildInst: 'usage',
                                    targets: '>0.25%, not dead',
                                    corejs: 3
                                }
                            ]
                        }
                    }
                ]
            },

            // 3.2 Reglas para Css
            {
                test: / \.css$/,
                use: [
                    MiniCssExtractPlugin.loader
                ]
            }
        ]
    },

    //4 Plugins
    plugins: [new MiniCssExtractPlugin({
        filename: path.join('stylesheets', 'styles.css')
    })]
};