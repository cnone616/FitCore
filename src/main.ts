import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { storageManager } from './utils/storage/manager';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

// 初始化存储系统
storageManager.init().then(() => {
  console.log('存储系统初始化完成');
}).catch((error) => {
  console.error('存储系统初始化失败:', error);
});

app.mount('#app');
