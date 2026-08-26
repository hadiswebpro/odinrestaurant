import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import favicon16 from "./src/favicon/favicon-16x16.png";
import favicon32 from "./src/favicon/favicon-32x32.png";
import appleTouchIcon from "./src/favicon/apple-touch-icon.png";
import android192 from "./src/favicon/android-chrome-192x192.png";
import android512 from "./src/favicon/android-chrome-512x512.png";
import faviconIco from "./src/favicon/favicon.ico";

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
            templateParameters: {
                favicon16,
                favicon32,
                appleTouchIcon,
                android192,
                android512,
                faviconIco,
            },
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

            {
                test: /\.ico$/i,
                type: "asset/resource",
            },
        ],
    },

    devtool: "eval-source-map",

    devServer: {
        watchFiles: ["./src/template.html"],
    },
};
