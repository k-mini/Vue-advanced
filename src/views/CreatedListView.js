import ListView from './ListView.vue';
import { h } from 'vue';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        created() {
            console.log('created!!!!');
            this.$emit('startSpinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    this.$emit('endSpinner');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        render() {
            return h(ListView);
        }
    }
}