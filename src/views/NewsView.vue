<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';

export default {
  components: {
    ListItem,
  },
  created() {
    // bus.$emit('start:spinner');
    this.$emit('startSpinner');
    
    this.$store.dispatch('FETCH_NEWS')
      .then((response) => {
        console.log('fetched');
        this.$emit('endSpinner');
        console.log('fetched 후');
        console.log(response);
        // bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
    
    // bus.$emit('end:spinner');
  }
};
</script>
