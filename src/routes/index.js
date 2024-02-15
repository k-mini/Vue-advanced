import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreatedListView.js';
import { store } from '../store/index';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                // store.commit('startSpinner');
                store.commit('SET_LOADINGSTATUS', true);
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // console.log('fetched');
                        // this.$emit('endSpinner');
                        // store.commit('SET_LOADINGSTATUS', false);
                        // console.log('fetched 후');
                        // console.log(response);
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                store.commit('SET_LOADINGSTATUS', true);
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                store.commit('SET_LOADINGSTATUS', true);
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
});

