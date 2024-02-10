import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

export default {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          console.log(response);
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
    }
  }