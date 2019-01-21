<template>
  <div id="carlist">
    <top :bt="bt" dataName="home"></top>
    <slider></slider>
    <!-- <navbar :navlist='navlist' dataName="home"></navbar>
    <main></main> -->
  </div>
</template>

<script>
import top from '../components/top.vue';
import slider from '../components/slider.vue';

export default {
  name: 'carlist',
  components:{top,slider},
  data(){
    return{
      list:[],
      bt:'购物车'
    }
  },
  mounted(){
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>

