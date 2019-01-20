<template>
  <div id="footbar">
    <ul>
      <router-link tag="li" to="/home" active-class="active">
        <a href="javascript:;">
          <i class="iconfont icon-shouye" width="100"  height="100"></i>
          <span>首页</span>
        </a>
      </router-link>
      <router-link tag="li" to="/classify" active-class="active">
        <a href="javascript:;">
          <i class="iconfont icon-classify_icon"></i>
          <span>分类</span>  
        </a>
      </router-link>
      <router-link tag="li" to="/carlist" active-class="active">
        <a href="javascript:;">
          <i class="iconfont icon-gouwuche-01"></i>
          <span>购物车</span>
        </a>
      </router-link>
      <router-link tag="li" to="/user" active-class="active">
        <a href="javascript:;">
          <i class="iconfont icon-yonghu"></i>
          <span>我的</span>
        </a>
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
    height:1.2rem;
    background: $theme-color;
    position:fixed;
    padding:.1rem;
    left:0;
    right:0;
    bottom:0;
    z-index: 1000;
    ul{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
      li{
      padding: 0 .2rem;
      height:100%;
        
        a{
          height:100%;
          display:block;
          font:.24rem/.40rem "";
          color:#fff;
          i{
          display: block;
          width:.8rem;
          height:.8rem;
          font:.8rem/1 '';
          color:#fff;
          }
          span{
            height:.4rem;
            display: inline-block;
          }
        }
      }
      .active{
        a{
          color:#CA0C16;
          i{
            color:#CA0C16;

          }
        }
      }
    }
  } 
</style>
