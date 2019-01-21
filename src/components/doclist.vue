<template>
  <div id="doclist">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.img_1024_768" :alt="item.utag">
        <span v-text="item.utag"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'doclist',
  props:['list','dataName'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #doclist{
    width:100%;
    margin-bottom: 1.4rem;
    margin-top: .6rem;
    position: relative;
    ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
      li{
      margin:.1rem 0;
      border:solid .02rem red;
      border-radius: .05rem;
        img{
          margin:.1rem;
          width: 3rem;
          display:block;
          border-radius: .05rem;
        }
        span{
          text-align: center;
          display: inline-block;
          color:#999;
          height:.48rem;
          font:.24rem/.48rem "";
          margin-bottom:.1rem;
          width:3rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  } 
</style>
