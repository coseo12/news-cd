import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../utils/CreateListView.js';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import BoardView from '../views/BoardView.vue';
import BoardItemView from '../views/BoardItemView.vue';
import WriteView from '../views/WriteView.vue';
import ChartView from '../views/ChartView.vue';
import AmChartView from '../views/AmChartView.vue';
import I18nTest from '../components/I18nTest.vue';
import TestingView from '../views/TestingView.vue';
import FileUploadView from '../views/FileUploadView.vue';
import AccessToken from '../views/AccessToken';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner');
        await store.dispatch('FETCH_LIST', to.name);
        // bus.$emit('end:spinner');
        next();
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner');
        await store.dispatch('FETCH_LIST', to.name);
        // bus.$emit('end:spinner');
        next();
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner');
        await store.dispatch('FETCH_LIST', to.name);
        // bus.$emit('end:spinner');
        next();
      },
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        if (store.state.accessToken !== '') {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_BOARD_LIST', store.state.boardList);
          next();
        } else {
          alert('토큰을 발급받으세요')
          next('/access');
        }
      },
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner');
        // await new Promise(r => setTimeout(r, 1000));
        next();
      },
    },
    {
      path: '/chartAm',
      name: 'chartAm',
      component: AmChartView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        // bus.$emit('start:spinner');
        // await new Promise(r => setTimeout(r, 1000));
        next();
      },
    },
    {
      path: '/file',
      name: 'file',
      component: FileUploadView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        // bus.$emit('start:spinner');
        // await new Promise(r => setTimeout(r, 1000));
        next();
      },
    },
    {
      path: '/access',
      name: 'access',
      component: AccessToken,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        bus.$emit('start:spinner');
        const params = {
          user_id: 'user1',
          user_pwd: 'user1',
          client_id:
            '82052969d824a3fe4fc2072989ec80dc2bb54e8ddb1bc973a09c6b00ba2c141b',
        };
        await store.dispatch('FETCH_ACCESSTOKEN', params);
        next();
      },
    },
    {
      path: '/i18n',
      name: 'i18n',
      component: I18nTest,
    },
    {
      path: '/write',
      name: 'write',
      component: WriteView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/board/:id',
      component: BoardItemView,
    },
  ],
});
