<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img 
        src="//img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_600x330_0f845e87.jpg" alt="">
        <div class="banner-info">
          <div class="banner-title">
            金隅凤山温泉
          </div>
          <div class="banner-number">
               <span class="iconfont arrow-iocn" >&#xe692;</span>13
          </div>
        </div>
    </div>
    <common-gallary v-show="showGallary" :imgs="ImgsBanner" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name:"Banner",
  components:{
    CommonGallary
  },
 
  data () {
    return {
      showGallary:false,
      ImgsBanner:["http://img1.qunarzz.com/sight/p0/1507/c3/256368254d204ca5b389ae01a03054ea.water.jpg_r_800x800_afa5d2f5.jpg","http://img1.qunarzz.com/sight/p0/1901/e9/e9eacf050ebd0f2fa3.img.jpg_r_800x800_0fbc52f6.jpg"]
    }
  },
  methods:{
    handleBannerClick () {
      this.showGallary=true
    },
    handleGallaryClose () {
       this.showGallary=false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  overflow hidden
  position relative
  height 0
  padding-bottom 55%
  .banner-img
    width 100%

  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
