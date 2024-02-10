import { createStore } from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

export const store = createStore({
  state: {
    news: []
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  actions: {
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
        .then(response => {
          console.log(response);
          context.commit('SET_JOBS', response.data);
        })
        .catch(err => console.log(err));
    },
    FETCH_ASK(context) {
      fetchAskList()
      .then(response => {
        console.log(response);
        context.commit('SET_ASK', response.data);
      })
      .catch(err => console.log(err));
    }
  },
});