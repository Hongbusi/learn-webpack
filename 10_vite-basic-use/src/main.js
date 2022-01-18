import _ from 'lodash-es';
import { createApp } from 'vue';
import { sum } from './js/math';
import mul from './ts/mul';
import App from './vue/App.vue';

import './css/style.css';
import './css/title.less';

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(_.join(['a', 'b', 'c']));

const titleEl = document.createElement('div');
titleEl.className = 'title';
document.body.appendChild(titleEl);

// vue
createApp(App).mount('#app')
