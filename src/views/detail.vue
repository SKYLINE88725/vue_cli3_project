<template>
  <div id="detail">
    <!-- <top :bt="bt" :dataName="bt"></top> -->
    <h3></h3>
    <iframe :src="newItem" id="Iframe" frameborder="0" scrolling="no" style="border:0px;"></iframe>
  </div>
</template>

<script>
import top from "../components/top.vue";
import {mapGetters,mapActions} from 'vuex';
import * as types from '../store/types';
export default {
  name: 'detail',
  // props:{bt,newUrl,dataName},
  components:{top},
  data(){
    return{
      list:[],
      bt:'购物车'
    }
  },
  mounted(){
  },
  computed:mapGetters([
    'bFoot','bLoading','newItem'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>

