<template>
  <div id='newlist'>
      <router-link v-for="(item,index) in songlist" :key='index' class="items_new" to="/detail" @click="CHANGE_NEWITEM(item.url)">
          <img class='new_img' :src="item.thumbnail_pic_s" alt="">
          <div class='new_tit'>
            <h3  class='new_title'>{{item.title}}</h3>
            <div class="new_title_s">
              <span  class='new_author'>{{item.author_name}}</span>
              <span  class='new_data'>{{item.date}}</span>
            </div>
          </div>
      </router-link>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import * as types from '../store/types';
export default {
  name: 'songlist',
  props:['songlist','dataName'],
  data(){
    return{
      tabIndex:0,
    }
  },
  methods:mapActions([
    types.CHANGE_NEWITEM,
  ]),
  computed:mapGetters([
    'bFoot','bLoading','newItem'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 #newlist{
     
      margin-top: 1.18rem;
      margin-bottom: 1.5rem;
    .items_new{
      display: block;
      background: #fff;
      margin:.2rem 0;
      padding:.2rem 0;
      height:1.2rem;
      display: flex;
      .new_img{
        padding:0 .2rem;
        height:1.2rem;
        width:1.6rem;
      }
      .new_tit{
        padding:0 .2rem;
        display: flex;
        flex-direction: column;
        align-content: space-between;
        .new_title{
          font-size:.24rem;
          height:.96rem;
          line-height: .40rem;
          text-align: left;
          overflow: hidden;
        }
        .new_title_s{
          
          font-size:.14rem;
          line-height: .24rem;
          color:#666;
          display: flex;
          justify-content: space-between;


        }
      }
    }
   
  }

</style>
