## oneOf
  原理及作用：webpack在依次执行配置好的loader的时候，当有一个文件被（例：js）匹配到并处理了，这个时候webpack不会跳出，而是会继续往下匹配，所以这里就需要oneOf来包裹住想要执行只执行一次的loader配置啦，这样当默认文件被匹配到一次的时候，就会立刻跳出，相当于for循环种的break，提升构建速度 。 
## 缓存 （在写代码的时候我们写的js代码是最多的，结构和样式不是很多，就算很多我们也没办法做更多的处理）
  babel（js的兼容性处理）缓存：（优化打包速度）  
    使用及解释：假如我们有100个js模块，而我们改变了其中一个，那么只有这一个是需要改变的，其他都不需要改变（很想HMR功能，但是HMR却值时在开发环境种才能使用的），所以我们要开启babel缓存，把这一百个处理过的js文件都缓存下来，当我们改变文件的时候，去对比，一样则直接使用缓存。 

  ```
    options: {
      // 开启Babel缓存
      // 第二次构建时速度会更快一些
      cacheDirectory: true
    }
  ```

  资源缓存：（优化线上缓存）  
    原理：对于js，css这些强缓存资源做名字处理，加hash值，这样每次重新打包都会形成新的名字，就不会有强缓存的问题了
  ```
    output: {
      filename: 'js/built.[hash:10].js',
      path: resolve(__dirname, 'build')
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:10].css'
      }),
    ],
  ``` 
  问题：每次重新打包都会生成新的打包的时候的hash值，所以每次无论是否改变代码，都会改变文件名字（傻瓜式），有时候就因为改了一个文件重新导报一次，却导致所有的都缓存失效。而且，js和css的hash是一样的  
  chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样  
  问题：js和css的hash还是一样的
    因为css是在js中引入的，所以同属于一个chunk（所有根据一个entry入口文件（那个js）生成的资源都属于一个chunk）
  contenthash：根据文件的内容生成hash值。不同文件hash值一定不一样，每次改动都会生成新的，不改则不会生成新的hash。
  ```
    output: {
      filename: 'js/built.[contenthash:10].js',
      path: resolve(__dirname, 'build')
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:10].css'
      }),
    ],
  ``` 
  三者区别：每次都会，根据chunk，根据内容 
## tree shaking 树摇 （我们可以把我们写的应用程序想象成以可树，而我们在写程序的时候引入的一些第三方库就像书上面的一些树页。而我们的代码不可能使用库中的全部代码，这些没有使用的代码就像一些没有用的灰色叶子，这时候我们就要使用tree shaking去掉这些代码。）
  前提：1. 必须使用es6模块化 2. 开启production  
  作用：减少代码体积  
  问题：不同版本的tree shaking有时候会有一点点小问题。  
    有时候他会把css 文件当作为使用的代码给干掉了  
    在package.json中配置。  
    "sideEffects": false 所有代码都没有副作用（都可以tree shaking）  
    可能会把：css / @babel/polyfill （副作用）文件干掉  
  解决: 标记特殊文件，不让其处理  
    "sideEffects": ["*.css", "*.less"]  
## code split 代码分割（将打包输出的一个大的 bundle.js 文件拆分成多个小文件，这样可以并行加载多个文件，比加载一个文件更快）  
  作用：1. 并行加载
        2. 这是做vue路由懒加载必要条件(在vue中如果想实现路由懒加载就首先要实现代码分割)  
  方法一： 手动多入口入口进行代码分割  
  ```
    // 多入口（多页面应用需要这样开始写）
    entry: {
      // 多入口：多个入口，最终就输出一个bundle
      main: './src/js/index.js',
      print: './src/js/print.js'
    },
    output: {
      // name 去文件名 （上面entry中对象名）
      filename: 'js/[name].[contenthash:10].js',
      path: resolve(__dirname, 'build')
    },
  ```
问题：我们手动去指定多个入口，多了的话，不人性化。
方法二：optimization（可以和方法一结合用）
```
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
```
作用：
  其一：不论多入口还是单入口，其都会将node_modules中的代码单独打包（分隔了第三方的代码，默认条件是超过了某个大小30k）
  其二：多入口的配置，其会分析多入口的每个chunk有没有公共文件。如果有就会单独打包成一个chunk（比如两个模块都引入了jquery会被打包成单独的文件，默认条件是超过了某个大小30k）
方法三：import 动态导入语法
  