<template>
  <div id="app">
    <p>111111111</p>
     <navbar></navbar>
     <footbar></footbar>
     <loading></loading>
     <!-- <home></home> -->
    <router-view/>
  </div>
</template>
<script>
import navbar from './components/navbar';
import footbar from './components/footbar';
import home from './views/home';
export default {
  name:'app',
  components:{navbar,footbar,home},
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
