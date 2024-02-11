import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(({ data }) => {
        context.commit('SET_JOBS', data);
      })
      .catch(err => console.log(err));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
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
  }
}