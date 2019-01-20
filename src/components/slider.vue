<template>
  <swipe class="my-swipe" :speed="100" :auto="1000">
    <swipe-item class="slide1">1</swipe-item>
    <swipe-item class="slide2">2</swipe-item>
    <swipe-item class="slide3">3</swipe-item>
  </swipe>
</template>

<script>

export default {
  name: 'slider',
  components: {
    // 'swipe': Swipe,
    // 'swipe-item': SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .my-swipe {
  margin-top:0.6rem;;
  height: 2rem;
  color: #fff;
  font-size: .3rem;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
