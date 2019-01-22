<template>
  <div id="detail" ref="detail">
    <top ref='top'></top>
    <h3></h3>
    <iframe :src="newItem" ref="iframe" id="iframe"  frameborder="0"  style="border:0px;"></iframe>
  </div>
</template>

<script>
import top from "../components/top_detail.vue";
import {mapGetters,mapActions} from 'vuex';
import * as types from '../store/types';
export default {
  name: 'detail',
  components:{top},
  
  data(){
    return{
      list:[],
      bt:'购物车'
    }
  },
  mounted(){
    this.$refs.iframe.width =  this.$refs.detail.offsetWidth;
    let topHeight = window.innerHeight;
    this.$refs.iframe.height = topHeight;
    console.log(this.$refs.top.offsetTop)
  },
  computed:mapGetters([
    'bFoot','bLoading','newItem'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #detail{
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    overflow: hidden;
    #iframe{
     position: absolute;
     top:.6rem;
     left:0;
     right:0;
     bottom: 0;
    }
  }
</style>

