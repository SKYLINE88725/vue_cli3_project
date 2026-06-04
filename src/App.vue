<template>
  <div id="app">
    <footbar v-show="bFoot"></footbar>
    <loading v-show="bLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import footbar from './components/footbar';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { footbar },
  computed: {
    ...mapGetters(['bFoot', 'bLoading'])
  },
  watch: {
    $route: {
      handler(to) {
        const path = to.path;
        if (/home|classify|carlist|user/.test(path)) {
          this.$store.dispatch('setFoot', true);
        }
        if (/detail|login|reg/.test(path)) {
          this.$store.dispatch('setFoot', false);
        }
        if (/user/.test(path)) {
          this.$store.dispatch('setFoot', true);
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
body { 
  background: $bgcolor;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
