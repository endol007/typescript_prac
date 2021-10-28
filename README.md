# typescript 게시판 만들기
 - 첫 번째: react+ redux + redux-saga
 - 두 번째: react+ mobx + postcss + tailwindcss

## react, typescript, babel, webpack 기본 개발 환경세팅

#### babel config
~~~
{
    "presets": [
        "@babel/preset-env", 
        "@babel/preset-react", 
        "@babel/preset-typescript" //프리셋
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-arrow-functions",
        ["@babel/plugin-proposal-class-properties", { "loose": false }]
    ],
    "assumptions": {
        "setPublicClassFields": false
    }
}
~~~
#### webpack config
~~~
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  resolve: { extensions: ['.js', '.json', '.ts', '.tsx'] },
  devServer: {
    http2: true,
    host: 'localhost',
    compress: true,
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
    client: {
      progress: true,
    },
  },
  stats: {
    cachedModules: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: 'images/[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader' , 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  plugins: [new HtmlWebPackPlugin({ template: './public/index.html' })],
};
~~~
#### typescript config
~~~
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["dom", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020"],
    "allowJs": true,
    "jsx": "react",
    "outDir": "./dist",
    "isolatedModules": true,
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true
  },
  "include": ["../src/**/*"],
  "exclude": ["../node_modules"]
}
~~~
#### react 실행명령어 세팅
~~~
"scripts": {
    "build": "webpack --config ./config/webpack.config.js",
    "start": "webpack serve --config ./config/webpack.config.dev.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint './src/**/*.{ts,tsx,js,jsx}'",
    "lint:fix": "eslint --fix './src/**/*.{ts,tsx,js,jsx}'"
  },
~~~
