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

// 可以在下一行禁用eslint检查,知道就行线上不要这样做
// eslint-disable-next-line
console.log(data);
