<template>
  <div id="app">
     <footbar v-show="bFoot"></footbar>
     <loading v-show="bLoading"></loading>
     <!-- <home></home> -->
    <router-view/>
  </div>
</template>
<script>
import footbar from './components/footbar';
import {mapGetters,mapActions} from 'vuex';
import * as types from './store/types';
export default {
  name:'app',
  components:{footbar},

  // mounted:{},
  computed:mapGetters([
    'bFoot','bLoading'
  ]),
  watch:{
    $route:{//路由监听
      handler:function(to){
        let path = to.path;
        if(/home|classify|carlist|user/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/detail|login|reg/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
        if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
      },
      immediate:true
    }
  }
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
