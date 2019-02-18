<template>
<div class="wrapper">
  <swiper :options="swiperOption"  v-if="list.length">
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id">
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
  props:{
    list:Array
  },
  data () {
   return {
      swiperOption:{
        pagination:".swiper-pagination",
        loop:true
      },
      
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
  padding-bottom 31.07%
  overflow hidden
  .imgSwiper
    width 100%
</style>


