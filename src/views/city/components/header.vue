<template>
  <div class="header">
      <router-link to="/"> 
        <div class="iconfont header-icon">&#xe624;</div>
      </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name:"CityHeader"
}
</script>
<style lang="stylus" scoped>

.header
  overflow hidden
  position relative
  height .86rem
  line-height .86rem
  text-align center
  color #fff
  background #00bcd4
  font-size .32rem
  .header-icon
    width .64rem
    position absolute
    top 0
    left 0
    color #fff
</style>


