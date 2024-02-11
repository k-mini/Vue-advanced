import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  // mutations: mutations,
  mutations,
  actions,
});