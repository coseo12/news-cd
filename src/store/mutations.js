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
  },
  SET_NOWPAGE(state, payload) {
    state.nowPage = payload
  },
  SET_PAGING_DEFAULT(state) {
    state.totalItems = state.boardList.length;
    state.totalPage = Math.ceil(
      state.totalItems / state.pageRange,
    );
  },
  SET_TOKEN(state, payload) {
    state.tmp = payload;
    state.accessToken = payload.account.accessToken;
    state.refreshToken = payload.account.refreshToken;
  },
  SET_BOARD_LIST(state, payload) {
    state.boardList = payload.boardList.reverse();
  }
};
