<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // mounted() {
  //   store.commit('SET_LOADINGSTATUS', false);
  // }
  // created() {
  //   this.$emit('startSpinner');
  //   this.$store.dispatch('FETCH_NEWS')
  //     .then((response) => {
  //       console.log('fetched');
  //       this.$emit('endSpinner');
  //       console.log('fetched 후');
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
};
</script>
