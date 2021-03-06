const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 这个插件会把css从js中抽离出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css文件的插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 设置nodejs环境变量(就是运行的时候的一些临时变量)
process.env.NODE_ENV = 'development';

// optimize-css-assets-webpack-plugin

module.exports = {
  // 生产环境下webpack会自动压缩js代码。用的是UglifyJsPlugin这个插件
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        /* 
          js兼容性处理：babel-loader @babel/preset-env @babel/core
          1. 基本js兼容性处理 --> @babel/preset-env
            问题：只能转换基本语法，如promise就不能转换了
          2. 全部的js兼容性处理 --> @babel/polyfill
            问题：我只要就解决部分兼容性问题，但是将所有的兼容性代码全部引入，体积太大了~
          3. 需要做兼容性处理的就做：按需加载 --> corejs
        */
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { // 预设：指示 babel 做怎么样的兼容性处理 
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载 
                useBuiltIns: 'usage', // 指定 core-js 版本 
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器 
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      },
      {
        /*
          语法检查：eslint-loader eslint
          只检查自己写的源代码，第三方的的库是不用检查的
          设置检查规则：
            package.json 中 eslintConfig中设置
            airbnb --> eslint-config-airbnb-base eslint eslint-plugin-import
            "eslintConfig": {
              "extends": "airbnb-base"
            }
        */
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复
          fix: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 创建style属性，将样式放入
          // 这个loader取代style-loader。作用：提取js中的css成单独的文件
          MiniCssExtractPlugin.loader,
          'css-loader',
          /*
            css兼容性处理：postcss --> postcss-loader postcss-preset-env
            postcss-preset-env: 帮助postcss找到package.josn中browserslist里面的配置，通过配置加载指定的兼容性样式
            "browserslist": {
              // 开发环境 --> 设置环境变量：process.env.NODE_ENV = 'development'
              "development": [
                "last 1 chrome version", // 兼容最新的
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 生产环境：默认是生产
              "production": [
                ">0.2%", // 兼容所有版本中的前0.2
                "not dead", // 不兼容死掉的
                "not op_mini all" // 不兼容国内没人用的
              ]
            }
          */
          // 使用loader的默认配置
          // 'postcss-loader'
          // 修改loader的配置
          /* {
            loader: 'postcss-loader',
            ident: 'postcss',
            options: {
              postcssOptions: {
                plugins: () => {
                  // 或者将插件引入写道单独的配置中
                  // config: './config/postcss.config.js'
                  // postcss的插件
                  require('postcss-preset-env')();
                }
              }
            }
          } */
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
        },
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片：html-loader （负责引入img
        loader: 'html-loader',
      },
      {
        exclude: /\.(css|js|html|less|json|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      // 对输出的文件进行重命名
      filename: 'css/built.css',
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  },
};
