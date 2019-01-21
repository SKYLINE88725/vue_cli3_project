<template>
  <div id="navbar" class="wrapper">
    <ul  class="content">
        <li v-for="(item,index) in navlist" :key="item.uid" active-class="active" @click="tabClick(index);CHANGE_NAVINDEX(item.py)" :class="{selected:index == tabIndex}">
          <a href="javascript:;" v-text="item.title"></a>
        </li>
    </ul>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import * as types from '../store/types';
export default {
  
  name: 'navlist',
  props:['navlist','dataName'],
  data(){
    return{
      tabIndex:0,
    }
  },
  methods:{
    ...mapActions([types.CHANGE_NAVINDEX]),
    tabClick:function(index){
      this.tabIndex = index
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #navbar{
    
    width:100%;
    top:.6rem;
    position: fixed;
    background: #fff;
    height:.48rem;
    z-index: 980;
    overflow: hidden;
    ::-webkit-scrollbar {display: none !important }
    ul{
    display: flex;
    height:.48rem;
    overflow: auto;
    position:absolute;
    top: 0px;
    
      li{
      font-size: .16rem;
      text-align: center;
      flex-shrink: 0;
      padding:0 .2rem;
        a{
          text-align: center;
          display: block;
          color:#f4f9;
          margin-top:.06rem;
          font:.24rem/.40rem "";
        }
      }
      .selected{
        a{
          border-bottom: solid .02rem $theme-color;
        }
      }
    }
  } 
</style>
