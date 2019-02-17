<template>
  <div>
    <div class="recommend-title">
        周末去哪
    </div>
    <ul>
       <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
  data () {
    return{
      recommendList:[
      {
        id:"001",
        imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"002",
        imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"003",
        imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"004",
        imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"005",
        imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      }
    ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title
  margin-top .2rem
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
