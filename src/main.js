import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';
import awesome from './plugins/awesome';
import JwPagination from 'jw-vue-pagination';

Vue.component('jw-pagination', JwPagination);
Vue.use(awesome);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');