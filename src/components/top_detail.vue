<template>
  <div id="top_detail" >
    <a href="/home" class="to-home">
      <i class="iconfont icon-shouye" ></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'top_detail',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #top_detail{
    width:100%;
    box-sizing: border-box;
    padding:0 .2rem;
    height:.6rem;
    line-height: .6rem;
    font-size: .4rem;
    color:#ff0;
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 998;
    // background:#5bd8ff;
    background: linear-gradient(90deg, #5bd8ff 33.33%,#9578ff 66.66%, #ff0000 100%);
    .to-home{
      float:right;
      display: block;
      height: .6rem;
      width: .4rem;
      color:$theme-color;
      font:.4rem/.6rem '';
      .iconfont{
        font:.4rem/.6rem '';
      }
    }
   
  } 
</style>
