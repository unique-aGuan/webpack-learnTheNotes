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
### source-map：一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射关系可以追踪到源代码的错误）
  写法：
    [inline-|hidden-|eval-][nosources-][cheap-[module]]source-map 
    
    0. source-map 
      生成位置：外部 
      提示方式：可以提示到错误代码准确信息 和 源代码的错误位置 
    1. inline-source-map 
      生成位置：内联sourcemap文件 就是在打包完成后的js文件内部生成了'一段'base64代码 
      提示方式：可以提示到错误代码准确信息 和 源代码的错误位置（与source-map的不同是，他是内联） 
    2. hidden-source-map 
      生成位置：外部 
      提示方式：可以提示到错误代码的错误原因，但是没有错误位置。不能追踪到源代码错误，只能提示到构建后代码的错误位置。（要用这个，必须要对源代码非常熟悉） 
    3. eval-source-map 
      生成位置：内联sourcemap文件 就是在打包完成后的js文件内部生成了'N段'base64代码，对应N个js文件，并且都在eval函数中（所以叫做eval..） 
      提示方式：可以提示到错误代码准确信息 和 源代码的错误位置（只不过多了一个hash值在文件名字后面） 
    4. nosources-source-map 
      生成位置：外部 
      提示方式：可以提示到错误代码的错误原因，但是没有任何源代码信息（和hidden一样可以隐藏源代码，防止程序员通过调试查看并泄露源代码）
    5. cheap-source-map 
      生成位置：外部 
      提示方式：可以提示到错误代码准确信息 和 源代码的错误位置 （与其他的区别是，他只能精确到行，其他的能精确到行和列） 
    6. cheap-module-source-map 
      生成位置：外部 
      提示方式：可以提示到错误代码准确信息 和 源代码的错误位置 

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内部构建速度更快 

    上面七种还可以差分组合出其他的 
    开发环境：速度快，调试更友好 
      速度块（eval>inline>cheap>...) 
        eval-cheap-source-map(选择最快的eval并且去掉精确到列cheap，这样更快) 
        eval-source-map(次快) 
      调试更友好 
        source-map (最友好)
        cheap-module-source-map （因为他加上了包括loader在内的所有js相关的东西） 
        cheap-source-map 
      结论是： 
        eval-source-map（脚手架中开发环境默认是由精确到行的） / eval-cheap-module-source-map 
    生产环境：源代码要不要隐藏？调试要不要更友好 
        内联会让代码体积增加，所以在生产环境不用内联 
        nosources-source-map 全部隐藏
        hidden-source-map 隐藏源代码

        结论（不隐藏，如果想隐藏的话，就加上隐藏，ps：注意顺序）：source-map / cheap-module-source-map