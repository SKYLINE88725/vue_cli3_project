<template>
  <div id="classify">
    <top :bt="bt" dataName="home"></top>
    <!-- <slider></slider> -->
    <!-- <navbar :navlist='navlist' dataName="home"></navbar>
    <main></main> -->
    <imglist :list='list' dataName="home"></imglist>
  </div>
</template>

<script>
import top from '../components/top.vue';
import imglist from '../components/imglist.vue';
export default {
  name: 'classify',
  components:{top,imglist},
  data(){
    return{
      list:[],
      bt:'分类'
    }
  },
  mounted(){
    !this.list.length && this.$http({
      // url:'/360img?%20c=WallPaper&a=getAppsByCategory&cid=7&start=4&count=200',
      url:'/360img',
      params:{
        "c":"WallPaper",
        "a":"getAppsByCategory",
        "cid":26,
        "start":390,
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
<style lang="scss">
  #classify{
    width:100%;
    position: absolute;
  }
</style>

