<template>
  <div id="footbar">
    <ul>
      <router-link tag="li" to="/home" active-class="active">
      <i class="iconfont icon-shouye" width="100"  height="100"></i>
      <a href="javascript:;">首页</a></router-link>
      <router-link tag="li" to="/classify" active-class="active">
      <i class="iconfont icon-classify_icon"></i>
      <a href="javascript:;">分类</a></router-link>
      <router-link tag="li" to="/carlist" active-class="active">
      <i class="iconfont icon-gouwuche-01"></i>
      <a href="javascript:;">购物车</a></router-link>
      <router-link tag="li" to="/user" active-class="active">
      <i class="iconfont icon-yonghu"></i>
      <a href="javascript:;">我的</a>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'footbar',
  data(){
    return{
      list:["凄凄切切群群"]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  #footbar{
    width:100%;
    height:1.6rem;
    background: $theme-color;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    z-index: 1000;
    ul{
    width:100%;
    height:.6rem;
    display: flex;
    justify-content: space-around;
      li{
      padding: 0 .2rem;
        i{
          display: block;
          width:1rem;
          height:1rem;
          &:before{
            width:1rem;
            height:1rem;
          }

        }
        a{
          height:.6rem;
          display:block;
          font:.24rem/.60rem "";
          color:#fff;
        }
      }
      .active{
        box-sizing:border-box;
        border-top:.04rem solid #CA0C16; 
        a{
          color:#666;
        }
      }
    }
  } 
</style>
