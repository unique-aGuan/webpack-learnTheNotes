### index.js ：webpack 入口起点文件
  1. 运行指令：
      + 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
        + webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到./build/built.js 整体打包环境是开发环境
      + 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
        + webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到./build/built.js 整体打包环境是生产环境
  2. 结论（零配置）：
      + webpack能处理js/json资源，不能处理css/img等其他资源
      + 生产环境和开发环境将ES6模块化编译成能识别的模块化~
      + 生产环境比开发环境多压缩了js代码。
### HMR：hot module replacement 热模块替换/模块热替换
  作用：一个模块发生变化，只会；重新打包这一个模块（而不是所有模块）

    极大提高构建速度

    样式文件：可以使用HMR功能：因为style-loader内部实现了 
    js：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
      注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
    html文件：默认不能使用HMR功能，同时会导致问题：html文件不能热更新了（不能刷新浏览器了,所以他不需要做HMR）

    解决：修改entry入口，将html文件引入