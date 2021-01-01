// import '@babel/polyfill'; // 可以直接引入使用

import data from '../media/data.json';
import print from './print';
import '../css/index.css';
import '../css/index.less';

// 打包其他资源
// 样式资源
import '../iconfont/iconfont.css';

console.log('index.js被加载了');

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('1');
  });
});

myPromise.then((res) => {
  console.log(res);
});

// 可以在下一行禁用eslint检查,知道就行线上不要这样做
// eslint-disable-next-line
console.log(data);

print();
if (module.hot) {
  // 一旦module.hot 为 true ，说明开启了HMR功能。 --> 让HMR功能代码生效
  module.hot.accept('./print.js', () => {
    // 方法会监听print.js文件的变化，一旦发生变化，其他默认不会重新打包构建。
    // 会执行后面的回调函数
    console.log('print.js发生变化');
    print();
  });
}
