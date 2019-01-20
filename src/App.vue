<template>
  <div id="app">
     <footbar></footbar>
     <loading></loading>
     <!-- <home></home> -->
    <router-view/>
  </div>
</template>
<script>
import footbar from './components/footbar';
export default {
  name:'app',
  components:{footbar},
  // mounted:{}
}

</script>

<style lang="scss">
body{ background:$bgcolor;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
