import { store } from '../store/index';

// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    mounted() {
        store.commit('SET_LOADINGSTATUS', false);
    },
    // created() {
    //     // this.$emit('startSpinner');
    //     store.commit('SET_LOADINGSTATUS', true);
    //     store.dispatch('FETCH_LIST', this.$route.name)
    //         .then((response) => {
    //             console.log('fetched');
    //             // this.$emit('endSpinner');
    //             store.commit('SET_LOADINGSTATUS', false);
    //             console.log('fetched 후');
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
}