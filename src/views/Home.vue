<template>
  <div id="home">
    <top :bt="bt" dataName="home"></top>
    <navbar :navlist='navlist' dataName="homeNav"></navbar>
    <!-- <slider id="slider"></slider> -->
    <songlist :songlist='songlist' dataName="homeSong"></songlist>
    <!-- <imglist :list='list' dataName="home"></imglist> -->
  </div>
</template>

<script>
import top from '../components/top.vue';
import navbar from '../components/navbar.vue';
import songlist from '../components/songlist.vue';
import slider from '../components/slider.vue';
export default {
  name: 'home',
  components:{top,navbar,songlist,slider},
  data(){
    return{
      songlist:[],
      navlist:[],
      bt:'主页'
    }
  },
  mounted(){
    this.$http.get('/data/top_newlist.json').then(
      res=>{
        console.log("1111", res.data.result.data);
        console.log(this.$store.state)
        this.songlist  = res.data.result.data
      }
    ),
    this.$http({
      url:'/data/navlist.json'
    }).then(
      
      res=> {
        this.navlist=res.data,
        console.log(res.data)
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #home{
    width:100%;
    position: relative;
    overflow: hidden;
   
  }
</style>

