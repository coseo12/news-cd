import { fetchUser, fetchItem, fetchList } from '../api/index.js';

export default {
  async FETCH_USER({ commit }, payload) {
    try {
      const { data } = await fetchUser(payload);
      commit('SET_USER', data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, payload) {
    try {
      const { data } = await fetchItem(payload);
      commit('SET_ITEM', data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, payload) {
    try {
      const { data } = await fetchList(payload);
      commit('SET_LIST', data);
    } catch (error) {
      console.log(error);
    }
  },
};
