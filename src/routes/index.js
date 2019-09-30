import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
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
        try {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_LIST', to.name);
          // bus.$emit('end:spinner');
          next();
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: async (to, from, next) => {
        try {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_LIST', to.name);
          // bus.$emit('end:spinner');
          next();
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        try {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_LIST', to.name);
          // bus.$emit('end:spinner');
          next();
        } catch (error) {
          console.log(error);
        }
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
  ],
});
