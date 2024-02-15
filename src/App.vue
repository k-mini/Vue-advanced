<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page" >
      <!-- <router-view @startSpinner="startSpinner" @endSpinner="endSpinner"></router-view> -->
      <router-view ></router-view>
    </transition>
    <!-- <spinner-bar :loading="loadingStatus"></spinner-bar> -->
    <spinner-bar :loading="fetchedStatus"></spinner-bar>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerBar from './components/SpinnerBar.vue';
import { mapGetters } from 'vuex';
// import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    SpinnerBar,
  },
  // data() {
  //   return {
  //     loadingStatus: false,
  //   };
  // },
  methods: {
    // startSpinner() {
    //   this.loadingStatus = true;
    // },
    // endSpinner() {
    //   this.loadingStatus = false;
    // },
  },
  computed: {
    ...mapGetters(['fetchedStatus']),
  },
  created() {
    // bus.$on('start:spinner', this.startSpinner);
    // bus.$on('end:spinner', this.endSpinner);

  },
  beforeUnmount() {
    // bus.$off('start:spinner', this.startSpinner);
    // bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
