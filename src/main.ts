import { createApp } from 'vue';
import { pinia } from './stores';
import './index.css';

import App from './App.vue';

import './assets/main.css';

const app = createApp(App).use(pinia);

app.mount('#app');
