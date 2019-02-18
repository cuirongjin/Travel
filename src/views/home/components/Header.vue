<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/旅游
    </div>
    <router-link to="/city"> 
      <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-iocn" >&#xe62d;</span>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
  }
};
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl";
.header
  line-height 0.86rem
  display flex
  color #fff
  background #00bcd4
  .header-left  
    width .64rem
    float left
    .back-icon
      text-align center
      font-size  .4rem
  .header-right
    width 1.24rem
    float:right
    text-align center
    padding-left .2rem
    color white
    .arrow-iocn
      font-size .24rem
  .header-input
    flex 1
    background #fff
    margin-top .12rem
    height .64rem
    line-height .64rem
    margin-left .2rem
    border-radius .1rem
    color $darkTextColor
</style>
