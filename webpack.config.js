const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // плагин который будет выполнять настройку HTML;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); //проверка типов, вынесенная в отдельный процесс
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  return {
    mode: env.mode ?? "development",
    entry: { path: path.resolve(__dirname, "src", "index.js") },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader", //умеет работать с JSX
              options: {
                transpileOnly: true, // увеличиваем скорость комиляции - убираем проверку типов
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"], // файлы с исходным кодом
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"), //ссылка до нашего HTML файла, который ,будет исп-ся в кач шаблона, именно туда плагин будет подставлять путь до нашего бандла
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
      isDev && new ForkTsCheckerWebpackPlugin(), //проверка типов, вынесенная в отдельный процесс
    ].filter(Boolean), //убираем из массива все null, undefined
    devServer: isDev
      ? {
          // позволяет сразу отражать все изменения в браузере без запуска build
          port: env.port ?? 5000,
          hot: true, // позволяет обновлять код без перезагрузки страницы
          open: true,
          historyApiFallback: true,
        }
      : undefined,
    devtool: isDev && "inline-source-map", // карта исходного кода, помогает в отслеживании ошибок
  };
};
