<template>
  <h3 id="top"  v-text="bt">
  </h3>
</template>

<script>
export default {
  name: 'top',
  props:["bt",'dataName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #top{
    width:100%;
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
   
  } 
</style>
