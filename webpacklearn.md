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