var path = require('path');

module.exports = {
    entry: {
        'app': "./src/game.ts",
        //'app.min': "./src/game.ts"
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all",
            minSize: 0,
            name: "shared"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            libraryTarget: "umd",
            library: "MathForGameDevelopers",
            umdNamedDefine: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map"
};