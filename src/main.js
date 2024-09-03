// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSplide from '@splidejs/vue-splide';



// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Bạn có thể chọn các bộ biểu tượng khác nếu muốn
import '@fortawesome/fontawesome-free/css/all.css';



// Thêm các biểu tượng vào thư viện
library.add(fas);


const app = createApp(App);
app.use(router);
// Đăng ký component FontAwesomeIcon
app.component('font-awesome-icon', FontAwesomeIcon);
app.use( VueSplide );


app.mount('#app');
