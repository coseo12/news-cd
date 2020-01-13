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
        next();
      },
    },
    {
      path: '/write',
      name: 'write',
      component: WriteView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        next();
      },
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
