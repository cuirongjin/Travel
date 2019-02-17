<template>
  <div>
    <div class="recommend-title">
        热销推荐
    </div>
    <ul>
       <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看詳情</button>
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
        imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"002",
        imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"003",
        imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"004",
        imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
        title:"故宮",
        desc:"北京市东城区景山前街4号"
      },
      {
        id:"005",
        imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
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
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7re
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
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


