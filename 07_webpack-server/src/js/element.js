import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import '../font/iconfont.css';

import logo from '../img/logo.png';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'Hello World';

// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = 'image-bg';

// 设置 img 元素的 src
const imgEl = document.createElement('img');
imgEl.src = logo;

// i 元素
const iEl = document.createElement('i');
iEl.className = 'iconfont icon-ashbin';

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);

console.log('update');
