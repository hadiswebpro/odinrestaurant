import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            favicon: "./src/favicon/favicon.ico",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            },
        ],
    },

    devtool: "eval-source-map",

    devServer: {
        watchFiles: ["./src/template.html"],
    },
};
