import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from "../api/index.js";

export default {
  // async FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       console.log('fetched 전 ');
  //       return 'hi';
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_JOBS(context) {
    // return fetchJobsList()
    //   .then(({ data }) => {
    //     context.commit('SET_JOBS', data);
    //   })
    //   .catch(err => console.log(err));
    try {
      const response = await fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    // return fetchAskList()
    //   .then(({ data }) => {
    //     commit('SET_ASK', data);
    //   })
    //   .catch(err => console.log(err));
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    // return fetchList(pageName)
    //   .then(({ data }) => {
    //     commit('SET_LIST', data)
    //     return 'list';
    //   })
    //   .catch(error => console.log(error));
    const response = await fetchList(pageName);
    console.log('FETCH_LIST : ' ,response);
    commit('SET_LIST', response.data);
    return response;
  },
  async FETCH_USERS({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(err => console.log(err));
  },
  async FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(err => console.log(err));
  },
}