<template>
  <div>
    <div class="recommend-title">
        周末去哪
    </div>
    <ul>
       <li class="item border-bottom" v-for="item in list" :key="item.id">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" alt="" class="item-img">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
       </li>
    </ul>
  </div>
</template>
<script>
export default {
  nameL:"HomeRecommmend",
  props:{
    list:Array
  },
  data () {
    return{
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title
  line-height .8rem
  background #eee
  text-indent .2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
    height 1.7re
    padding .1rem
.item-title
  line-height .54rem
  font-size .32rem
  ellipsis()
.item-desc
  line-height .4rem
  color #ccc
  ellipsis()
.item-button
  background #ff9300
  padding 0 .1rem
  border-radius 0.6rem
  margin-top .16rem
  line-height .44rem
</style>
