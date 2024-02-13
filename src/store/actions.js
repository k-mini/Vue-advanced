import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from "../api/index.js";

export default {
  async FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        console.log('fetched 전 ');
        return 'hi';
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
      .then(({ data }) => {
        context.commit('SET_JOBS', data);
      })
      .catch(err => console.log(err));
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(err => console.log(err));
  },
  FETCH_USERS({ commit }, name) {
    fetchUserInfo(name)
    .then(({ data }) => {
      commit('SET_USER', data);
    })
    .catch(err => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
    .then(({data}) => {
      commit('SET_ITEM', data);
    })
    .catch(err => console.log(err));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data) )
      .catch(error=>console.log(error));
  }
}