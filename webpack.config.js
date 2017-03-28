const webpack  = require("webpack");
const path = require("path");

const config = {
    entry: [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client",
        "./index",
    ],
    devServer: {inline: false},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                loaders:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=8192"
            }
        ]
    }
};

module.exports = config;