<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.id">
      <router-link v-bind:to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small> {{ item.time_ago }} by {{ item.user }} </small>
    </p>
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