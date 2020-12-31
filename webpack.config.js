const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 这个插件会把css从js中抽离出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置nodejs环境变量(就是运行的时候的一些临时变量)
process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
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
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
          outputPath: 'imgs'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片：html-loader （负责引入img
        loader: "html-loader"
      },
      {
        exclude: /\.(css|js|html|less|json|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的文件进行重命名
      filename: 'css/built.css'
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
}