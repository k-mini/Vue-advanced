<template>
  <div v-for="item in fetchedAsk" v-bind:key="item.id">
    {{ item.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    // 1번째 방법
    // ask() {
    //   return this.$store.state.ask;
    // },
    // 2번째 방법
    // ...mapState({
    //   ask: state => state.ask
    // }),
    // 3번째 방법
    ...mapGetters(['fetchedAsk'])
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style>
</style>