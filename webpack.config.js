const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'client/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'dist/index.html'}),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      },
    module: {
        rules: [
            {
            use: [
                {
                    test: /\.jsx?/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: [],
                    }
                },
                {
                    test: /.(css|scss)$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.png|svg|jpg|gif$/,
                    use: ["file-loader"],
                },
            ],
         },
        ]
    },
};