import _ from 'lodash-es';
import { sum } from './js/math';

import './css/style.css';
import './css/title.less';

console.log(sum(10, 20));

console.log(_.join(['a', 'b', 'c']));

const titleEl = document.createElement('div');
titleEl.className = 'title';
document.body.appendChild(titleEl);
