import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';
import awesome from './plugins/awesome';
import JwPagination from 'jw-vue-pagination';
import chartjs from './plugins/ChartPlugin';
import i18n from './i18n'

Vue.component('jw-pagination', JwPagination);
Vue.use(awesome);
Vue.use(chartjs);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
