// import '@babel/polyfill'; // 可以直接引入使用

import data from '../media/data.json';
import '../css/index.css';
import '../css/index.less';

// 打包其他资源
// 样式资源
import '../iconfont/iconfont.css';

function add() {
  return console.log(10);
}

add();

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
