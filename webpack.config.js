const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
    },
    // module: {
    //     // rules: [
    //     //     {
    //     //         test: /\.jsx?$/,
    //     //         exclude: /node_mmodules/,
    //     //         use: ["style-loader", "css-loader"]
    //     //     },
    //     // {
    //     //  test: /\.(png|svg|jpg|gif)$/,
    //     //  exclude: /node_modules/,
    //     //  use: ["file-loader"]   
    //     // }

    //     // ]
    // }
};