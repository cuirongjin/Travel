<template>
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page,index) in  pages" :key="index">
        <div class="icon" v-for="item in  page" :key="item.id">
          <div class="icon-img">
            <img   class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
     </swiper>
  </div>
</template>
<script>
export default {
  nameL:"HomeIconfot",
  data () {
    return {
      swiperOption:{},
      iconList:[
        {
          id:"001",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc:"景点门票"
        },
        {
          id:"002",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc:"一日游"
        },
        {
          id:"003",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc:"北京必游"
        },
        {
          id:"004",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc:"北京流哇"
        },
        {
          id:"005",
          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
          desc:"爬长城"
        },
        {
          id:"006",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc:"故宫"
        },
         {
          id:"007",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/22/98cbc1ff9e33fe02.png",
          desc:"北京庙会"
        },
         {
          id:"008",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
          desc:"北京滑雪"
        },
         {
          id:"009",
          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc:"泡温泉"
        },

      ]
    }
  },
  computed: {
    pages () {
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const  page=Math.floor(index/8);
        console.log(page)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      console.log(pages)
      return  pages;
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl";
@import "~styles/mixins.styl"
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  overflow hidden
  width 25%
  float left
  height 0
  padding-bottom 25%
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing dborder-box
    padding .1rem
    .icon-img-content
      display block
      height 100%
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height .44rem
    line-height .44rem
    color #333
    text-align center
    ellipsis()
</style>
 

