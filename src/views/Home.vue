<template>
  <div id="home">
    <imglist :list='list' dataName="home"></imglist>
  </div>
</template>

<script>
import imglist from '../components//imglist.vue';
export default {
  name: 'home',
  components:{imglist},
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    this.$http({
      // url:'/360img?%20c=WallPaper&a=getAppsByCategory&cid=7&start=4&count=200',
      url:'/360img',
      params:{
        "c":"WallPaper",
        "a":"getAppsByCategory",
        "cid":15,
        "start":4,
        "count":200,
      }
    }).then(
      res=>{
        console.log("1111", res.data.data);
        this.list  = res.data.data
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #home{
    width:100%;
    position: absolute;
  }
</style>

