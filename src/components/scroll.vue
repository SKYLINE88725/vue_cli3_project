<template>
  <div id="app">
    <nav>
      <p v-for="(item,$index) in arr" :key="item" @click="toggle($index)" :class="{active:$index==active}"><span :class="{spanlast:$index==7}">{{item}}</span></p>
    </nav>
    <div class="main" style="display: block;">1</div>
    <div class="main">22</div>
    <div class="main">3</div>
    <div class="main">4</div>
    <div class="main">5</div>
    <div class="main">6</div>
    <div class="main">7</div>
    <div class="main">8</div>
  </div>
</template>
<script>
  ``
  export default {
    data() {
      return {
        active: 0,
        arr: [
          "联系我们",

          "安全保障",

          "组织信息",

          "备案信息",

          "联系大家",

          "联系朋友",

          "我的梦想",

          "挑战自我"
        ]
      };
    },
    methods: {
      toggle: function (index) {
        this.active = index;
        var mains = document.getElementsByClassName("main");
        for (var i = 0; i < mains.length; i++) {
          mains[i].style.display = "none";
          if (index == i) {
            mains[i].style.display = "block";
          }
        }
      }
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  #app {
    width: 100%;
    border: 1px solid green;
  }

  ;

  #app nav {
    display: flex;
    height: .5rem;
    background: #ccc;
    overflow: auto;
    position: fixed;
    top: 0px;
  }



  #app p {

    font-size: .16rem;

    text-align: center;

    flex-shrink: 0;

    padding: 12px 0px;

  }



  span {

    padding: 0 0.2rem;

    border-right: 1px solid blue;

  }



  .spanlast {

    padding: 0 0.2rem;

    border-right: 1px solid #ccc;

  }



  #app p.active {

    color: red;

  }



  .main {

    width: 100%;

    border: 1px solid red;

    display: none;

    font-size: .12rem;

    word-break: break-all;

    margin-top: .5rem;

  }
</style>