<template>
  <swiper :options="swiperOption">
      <swiper-slide><img width='640' src="/static/images/response.jpg"></swiper-slide>
      <swiper-slide><img width='640' src="/static/images/response.jpg"></swiper-slide>
      <swiper-slide><img width='640' src="/static/images/response.jpg"></swiper-slide>
      <swiper-slide><img width='640' src="/static/images/response.jpg"></swiper-slide>
      <swiper-slide><img width='640' src="/static/images/response.jpg"></swiper-slide>
      <swiper-slide><img width='640' src="/static/images/response.jpg"></swiper-slide>
      <!--以下看需要添加-->
      
    </swiper>
   
</template>
<script>
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      "swiper":swiper,
      "swiper-slide":swiperSlide
    },
      data(){
      return{
        swiperOption: {//swiper3
          autoplay: 3000,
          speed: 1000,
          // paginnation:'.paginnation'
          }
      }
    }
  }
</script>
