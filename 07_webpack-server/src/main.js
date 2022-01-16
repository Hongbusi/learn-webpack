import './js/element';
import './js/test';

if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element updated');
  })
}

import App from './App.vue';
import { createApp } from 'vue';

const app = createApp(App);

app.mount('#app');
