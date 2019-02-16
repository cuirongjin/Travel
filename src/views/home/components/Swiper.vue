<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img  class="imgSwiper" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</div>
</template>
<script>
export default {
  name:"HomeSwiper",
  data () {
   return {
      swiperOption:{
        pagination:".swiper-pagination",
        loop:true
      },
      swiperList: [
        {
          id:"001",
          imgUrl:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/72803ceb525b6294731bfcfda10817f6.jpg"
        },
        {
          id:"002",
          imgUrl:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/6b4671493850d3f28e336dacc2b97f28.jpg"
        }
      ]
   }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
  background yellow !important
.wrapper
  width 100%
  height 0
  padding-bottom 53.25%
  overflow hidden
  .imgSwiper
    width 100%
</style>


