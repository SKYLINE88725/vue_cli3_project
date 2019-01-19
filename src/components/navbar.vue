<template>
  <div id="navbar">
    <ul>
      <router-link tag="li" to="/home" active-class="active"><a href="javascript:;">主页</a></router-link>
      <router-link tag="li" to="/flow" active-class="active"><a href="javascript:;">关注</a></router-link>
      <router-link tag="li" to="/user" active-class="active"><a href="javascript:;">用户</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #navbar{
    width:100%;
    height:.6rem;
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 998;
    background:#5bd8ff;
    // background: linear-gradient(90deg, #5bd8ff 33.33%,#9578ff 66.66%, #ff0000 100%);
    ul{
    width:100%;
    height:.6rem;
    display: flex;
    justify-content: space-around;
      li{
      padding: 0 .2rem;
        a{
          height:.6rem;
          display:block;
          font:.24rem/.60rem "";
          color:#fff;
        }
      }
      .active{
        box-sizing:border-box;
        border-bottom:.04rem solid #CA0C16; 
        a{
          color:#666;
        }
      }
    }
  } 
</style>
