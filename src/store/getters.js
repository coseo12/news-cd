export default {
  fetchedUser(state) {
    return state.user;
  },
  fetchedItem(state) {
    return state.item;
  },
  fetchedList(state) {
    return state.list;
  },
  fetchedBoardList(state) {
    const totalPage = Math.ceil(state.totalItems / state.pageRange);
    const start = (state.nowPage - 1) * state.pageRange + 1;
    const end = state.nowPage === totalPage ? state.totalItems : start + (state.pageRange - 1);

    const func = (acc, cur, i) => {
      if (start <= i + 1 && end >= i + 1) {
        acc.push(cur);
        return acc;
      } else {
        return acc
      }
    }
    let items = state.boardList.reduce(func, []);
    // state.boardList = items;
    return items;
  },
  fetchedTotalPage(state) {
    return Math.ceil(state.totalItems / state.pageRange);
  },
  fetchedTotalItems(state) {
    console.log(state.boardList.length);
    return state.boardList.length;
  }
};
