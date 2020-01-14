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
import I18nTest from '../components/I18nTest.vue';
import TestingView from '../views/TestingView.vue';
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
        bus.$emit('start:spinner');
        let boardList = [
          {
            id: 1,
            title: 'title1',
            user: 'user1',
            time_ago: '2020.01.13',
            content: 'content1',
          },
          {
            id: 2,
            title: 'title2',
            user: 'user2',
            time_ago: '2020.01.13',
            content: 'content2',
          },
          {
            id: 3,
            title: 'title3',
            user: 'user3',
            time_ago: '2020.01.13',
            content: 'content3',
          },
          {
            id: 4,
            title: 'title4',
            user: 'user4',
            time_ago: '2020.01.13',
            content: 'content4',
          },
          {
            id: 5,
            title: 'title5',
            user: 'user5',
            time_ago: '2020.01.13',
            content: 'content5',
          },
          {
            id: 6,
            title: 'title6',
            user: 'user6',
            time_ago: '2020.01.13',
            content: 'content6',
          },
          {
            id: 7,
            title: 'title7',
            user: 'user7',
            time_ago: '2020.01.13',
            content: 'content7',
          },
          {
            id: 8,
            title: 'title8',
            user: 'user8',
            time_ago: '2020.01.13',
            content: 'content8',
          },
          {
            id: 9,
            title: 'title9',
            user: 'user9',
            time_ago: '2020.01.13',
            content: 'content9',
          },
          {
            id: 10,
            title: 'title10',
            user: 'user10',
            time_ago: '2020.01.13',
            content: 'content10',
          },
          {
            id: 11,
            title: 'title11',
            user: 'user11',
            time_ago: '2020.01.13',
            content: 'content11',
          },
          {
            id: 12,
            title: 'title12',
            user: 'user12',
            time_ago: '2020.01.13',
            content: 'content12',
          },
          {
            id: 13,
            title: 'title13',
            user: 'user13',
            time_ago: '2020.01.13',
            content: 'content13',
          },
          {
            id: 14,
            title: 'title14',
            user: 'user14',
            time_ago: '2020.01.13',
            content: 'content14',
          },
          {
            id: 15,
            title: 'title15',
            user: 'user15',
            time_ago: '2020.01.13',
            content: 'content15',
          },
        ];
        store.commit('SET_BOARD', boardList);
        store.commit('SET_PAGING_DEFAULT');
        // await new Promise(r => setTimeout(r, 1000));
        next();
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
