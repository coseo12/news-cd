import {
  fetchUser,
  fetchItem,
  fetchList,
  getAccessToken,
  getBoardList,
  deleteBoardOne,
  addBoardOne,
  putBoardOne
} from '../api/index.js';

export default {
  async FETCH_USER({ commit }, payload) {
    const { data } = await fetchUser(payload);
    commit('SET_USER', data);
  },
  async FETCH_ITEM({ commit }, payload) {
    const { data } = await fetchItem(payload);
    commit('SET_ITEM', data);
  },
  async FETCH_LIST({ commit }, payload) {
    const { data } = await fetchList(payload);
    commit('SET_LIST', data);
  },
  async FETCH_ACCESSTOKEN({ commit }, payload) {
    const { data } = await getAccessToken(payload);
    commit('SET_TOKEN', data);
  },
  async FETCH_BOARD_LIST({ commit }, payload) {
    const { data } = await getBoardList(payload);
    commit('SET_BOARD_LIST', data);
  },
  async DELETE_BOARD_ITEM({ commit }, payload) {
    const { data } = await deleteBoardOne(payload);
    console.log(data, commit);
  },
  async ADD_BOARD_ITEM({ commit }, payload) {
    const { data } = await addBoardOne(payload);
    console.log(data, commit);
  },
  async PUT_BOARD_ITEM({ commit }, payload) {
    const { data } = await putBoardOne(payload);
    console.log(data, commit);
  }
};
