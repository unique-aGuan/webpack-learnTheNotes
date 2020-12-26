/* 
  webpack.config.js webpack 的配置文件
  作用：指示webpack 干哪些活（当你运行 webpack 指令的时候，会加载里面的配置）
  
  所有的构建工具都是基于nodejs平台运行的 ~模块化默认采用commonjs

  loader: 1、 下载  2、使用（配置loader）
  plugin：1、下载   2、引入  3、使用
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loder处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader的执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件编程commonjs模块加载到js文件中，里面内容是字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        // use要使用多个loader就要放到数组中
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件WS
          // 需要下载less 和 less-loader
          'less-loader'
        ]
      },
      {
        // 问题：默认处理不了html中的img图片
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader,直接是一个字符串
        // 需要下载 url-loader file-loader 因为url-loader依赖于file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，就会被base64处理 8~12kb
          // 优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1023,
          // 问题：因为url-loader默认使用es6模块化，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs
          esModule: false,
          // 给图片进行重命名
          // [hash:10]去图片的hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片：html-loader （负责引入img
        loader: "html-loader"
      },
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less|json|jpg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  // plugin的配置
  plugins: [
    // 详细plugin配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html'文件，并自动引入打包输出的所有资源
      template: './src/main.html'
    })
  ],
  mode: 'development',
  // mode: 'productiong';

  // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~~）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：webpack-dev-server
  devServer: {
    // contentBase 项目运行的目录，一般要用绝对路径
    contentBase: resolve(__dirname, 'build'),
    // 开启gzip压缩 更小 更快
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器 
    open: true
  }
}