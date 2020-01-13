export default {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ITEM(state, payload) {
    state.item = payload;
  },
  SET_LIST(state, payload) {
    state.list = payload;
  },
  SET_BOARD(state, payload) {
    state.boardList = payload
  }
};
