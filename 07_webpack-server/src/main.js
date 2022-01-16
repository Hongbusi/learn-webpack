import './js/element';
import './js/test';

// 手动开启热更新监听
if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element updated');
  })
}

import App from './App.vue';
import { createApp } from 'vue';

const app = createApp(App);

app.mount('#app');
