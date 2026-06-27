const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // плагин который будет выполнять настройку HTML;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); //проверка типов, вынесенная в отдельный процесс
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");

module.exports = (env) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const envFile = dotenv.config({ path: path.resolve(__dirname, ".env") }).parsed || {};

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
              presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        "@appFirebase": path.resolve(__dirname, "firebase.js"),
        "@features": path.resolve(__dirname, "src/features"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@entities": path.resolve(__dirname, "src/entities"),
        "@app": path.resolve(__dirname, "src/app"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@widgets": path.resolve(__dirname, "src/widgets"),

        "@creating": path.resolve(__dirname, "src/features/creating"),
        "@editing": path.resolve(__dirname, "src/features/editing/"),
        "@selecting": path.resolve(__dirname, "src/features/selecting"),
        "@questionnaire": path.resolve(__dirname, "src/features/questionnaire"),
        "@lib": path.resolve(__dirname, "src/shared/chadcn/lib"),
        "@ui": path.resolve(__dirname, "src/shared/chadcn/ui/"),
        "@store": path.resolve(__dirname, "src/store/"),
        "@reducers": path.resolve(__dirname, "src/store/reducers/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
      },
      extensions: [".tsx", ".ts", ".js"], // файлы с исходным кодом
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(envFile.FIREBASE_API_KEY),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(envFile.FIREBASE_AUTH_DOMAIN),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(envFile.FIREBASE_PROJECT_ID),
        "process.env.FIREBASE_APP_ID": JSON.stringify(envFile.FIREBASE_APP_ID),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"), //ссылка до нашего HTML файла, который ,будет исп-ся в кач шаблона, именно туда плагин будет подставлять путь до нашего бандла
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
      isDev &&
        new ForkTsCheckerWebpackPlugin({
          async: false, // Синхронная проверка (надежнее)
          typescript: {
            configFile: "tsconfig.json",
            diagnosticOptions: {
              semantic: true, // Проверка семантических ошибок
              syntactic: true, // Проверка синтаксических ошибок
            },
            mode: "readonly", // Безопасный режим для TypeScript 5+
          },
          logger: {
            infrastructure: "console", // Логи инфраструктуры
            issues: "console", // Логи ошибок типов
            devServer: true, // Показывать ошибки в devServer
          },
        }),
    ].filter(Boolean), //убираем из массива все null, undefined
    devServer: isDev
      ? {
          // позволяет сразу отражать все изменения в браузере без запуска build
          port: process.env.PORT || 0, // 0 означает "любой свободный порт"
          hot: true, // позволяет обновлять код без перезагрузки страницы
          open: {
            app: {
              name: "google-chrome",
            },
          },
          historyApiFallback: true,
        }
      : undefined,
    devtool: isDev && "inline-source-map", // карта исходного кода, помогает в отслеживании ошибок
  };
};
