<template>
  <div id="navbar" class="wrapper">
    <ul :style="{width:navlist.length*.68+'rem'}" @mousemove="move($event)" class="content">
        <li v-for="(item,index) in navlist" :key="item.uid" active-class="active" @click="tabClick(index)" :class="{selected:index == tabIndex}">
          <a href="javascript:;" v-text="item.name"></a>
        </li>
    </ul>

  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  
  name: 'navlist',
  props:['navlist','dataName'],
  data(){
    return{
      tabIndex:0,
    }
  },
  methods:{
    move:function(){

    },
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
    position: relative;
    background: #fff;
    height:.48rem;
    overflow: hidden;
    ul{
    align-items: center;
    height:.48rem;
    position: absolute;
    top:0;
    bottom: 0;
    left:-1.3rem;
      li{
      float:left;
      height:.48rem;
      width:.48rem;
      padding:0 .1rem;
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
